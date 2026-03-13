import { config } from '../config.js';
import { updateSeo } from '../seo.js';
import { processHtml } from './base.js';
import { getPostsIndex, getCategoryStyleString } from './postRenderer.js';
import { getPages } from './pageRenderer.js';
import { markSubscribed } from '../newsletter.js';

const intro = import.meta.glob('../../content/intro.md', { eager: true });

export function renderHome(container) {
    updateSeo(null, config.siteDescription);

    const pages = getPages();
    const postsIndex = getPostsIndex();

    const sectionsHtml = Object.entries(pages).map(([path, page]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
        <a href="#/page/${slug}" class="section-box">
            <h3>${page.attributes.title}</h3>
        </a>
    `;
    }).join('');

    const postsHtml = postsIndex.slice(0, 2).map((post) => {
        const slug = post.slug;
        return `
            <a href="#/post/${slug}" class="post-card" data-slug="${slug}">
                <h3>${post.title}</h3>
                <div class="post-meta" style="${getCategoryStyleString(post.category)}">
                    <span class="category-name">${post.category || 'Others'}</span>
                    <span class="separator">|</span>
                    <span>${post.date}</span>
                    ${post.author ? `<span class="separator">|</span><span class="author">by ${post.author}</span>` : ''}
                </div>
                <p>${post.excerpt || ''}</p>
            </a>
        `;
    }).join('');

    const introContent = processHtml(intro['../../content/intro.md']?.html);

    container.innerHTML = `
    <div class="logo-wrapper">
        <img
            src="${config.logo.light.svg}"
            alt="${config.logo.alt}"
            class="logo logo-light"
            width="500"
            height="500"
        >
        <img
            src="${config.logo.dark.svg}"
            alt="${config.logo.alt}"
            class="logo logo-dark"
            width="500"
            height="500"
        >
    </div>
        <h1 class="title">${config.siteTitle}</h1>
        <p class="description">${config.siteDescription}</p>

        <div class="intro-section">
            ${introContent}
        </div>

        <div class="buttons-section">
            <h2>Explore DARTS</h2>
            <div class="buttons-list">
                ${sectionsHtml}
            </div>
        </div>

        <div class="blog-section">
            <h2>${config.blog.title}</h2>
            <div class="posts-list">
                ${postsHtml || '<p class="no-content-message">No news available yet.</p>'}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="#/blog" class="text-link">View All Posts →</a>
            </div>
        </div>

        <h2 class="subscribe-title">Subscribe to DARTS</h2>
        <div class="subscribe-section">
            <p class="subscribe-text">
                We're just getting started, but there are many projects on the horizon.<br>
                If you don't want to miss what's coming,
                <strong>drop your email</strong> and stay in the loop.
                You'll get exclusive updates and a chance to be part of the project.
            </p>
            <form
                action="${config.newsletterUrl}"
                method="post"
                class="subscribe-form"
                target="_blank"
            >
                <label for="subscribe-email" class="sr-only">Email address</label>
                <input
                    type="email"
                    name="email"
                    id="subscribe-email"
                    placeholder="your@email.com"
                    required
                    autocomplete="email"
                    class="subscribe-input"
                />
                <button type="submit" class="subscribe-submit" aria-label="Subscribe">>-/-></button>
            </form>
            <p class="subscribe-note">(We don't like spam either, so no worries, we'll keep it meaningful)</p>
        </div>
        `;

    container.querySelectorAll('.logo-light').forEach(img => {
        img.addEventListener('error', function() { this.src = config.logo.light.png; }, { once: true });
    });
    container.querySelectorAll('.logo-dark').forEach(img => {
        img.addEventListener('error', function() { this.src = config.logo.dark.png; }, { once: true });
    });

    // Logo push animation
    {
        const logos = container.querySelectorAll('.logo');
        let scale = 1;
        let scaleVel = 0;
        let animFrame = null;

        const spring = () => {
            const stiffness = 0.08;
            const damping = 0.872;

            scaleVel = scaleVel * damping + (1 - scale) * stiffness;
            scale += scaleVel;

            if (Math.abs(1 - scale) < 0.0005 && Math.abs(scaleVel) < 0.0005) {
                scale = 1;
                scaleVel = 0;
                logos.forEach(l => { l.style.transform = ''; });
                animFrame = null;
                return;
            }

            logos.forEach(l => { l.style.transform = `scale(${scale})`; });
            animFrame = requestAnimationFrame(spring);
        };

        let clickCount = 0;
        let escaped = false;
        logos.forEach(logo => {
            logo.style.cursor = 'pointer';
            logo.style.willChange = 'transform';
            logo.addEventListener('click', () => {
                if (escaped) return;
                scale = Math.max(0.3, scale - 0.22);
                scaleVel = 0;
                if (animFrame) cancelAnimationFrame(animFrame);
                animFrame = requestAnimationFrame(spring);

                clickCount++;
                if (clickCount === 10) {
                    escaped = true;
                    if (animFrame) cancelAnimationFrame(animFrame);
                    const wrapper = container.querySelector('.logo-wrapper');
                    if (wrapper) {
                        wrapper.dispatchEvent(new Event('escaped'));
                        wrapper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 1, 1), opacity 0.6s ease';
                        wrapper.style.transform = 'translateX(150%)';
                        wrapper.style.opacity = '0';
                    }
                }
            });
        });
    }

    // Logo scroll-exit animation: translateX directly tied to scroll position
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const logoWrapper = container.querySelector('.logo-wrapper');
        if (logoWrapper) {
            // Capture starting position (router guarantees scrollY=0 at render time)
            const initialTop = logoWrapper.getBoundingClientRect().top;
            let scrollEscaped = false;

            // Allow the easter egg to disable the scroll animation
            logoWrapper.addEventListener('escaped', () => { scrollEscaped = true; });

            const onScroll = () => {
                if (!logoWrapper.isConnected) {
                    window.removeEventListener('scroll', onScroll);
                    return;
                }
                if (scrollEscaped) return;
                const rect = logoWrapper.getBoundingClientRect();
                const height = rect.height;
                if (!height) return;

                // progress: 0 = logo at initial position, 1 = fully off-screen
                // Range spans from initialTop (first scroll) to -height (completely gone)
                const totalRange = initialTop + height;
                const progress = Math.max(0, Math.min(1, (initialTop - rect.top) / totalRange));
                // Cubic ease-in: very smooth start → accelerates as it exits
                const eased = 2 * progress * progress * progress;

                logoWrapper.style.transform = eased > 0 ? `translateX(${eased * 130}%)` : '';
                logoWrapper.style.opacity = eased > 0 ? 1 - progress : '';
            };

            window.addEventListener('scroll', onScroll, { passive: true });
        }
    }

    const subscribeForm = container.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', () => markSubscribed());
    }
}
