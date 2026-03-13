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
    <img 
            src="${config.logo.light.svg}" 
            alt="${config.logo.alt}" 
            class="logo logo-light"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${config.logo.light.png}'"
        >
        <img 
            src="${config.logo.dark.svg}" 
            alt="${config.logo.alt}" 
            class="logo logo-dark"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${config.logo.dark.png}'"
        >
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
                action="https://buttondown.com/api/emails/embed-subscribe/DARTS"
                method="post"
                class="subscribe-form"
                target="_blank"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    autocomplete="email"
                    class="subscribe-input"
                />
                <button type="submit" class="subscribe-submit">>-/-></button>
            </form>
            <p class="subscribe-note">(We don't like spam either, so no worries, we'll keep it meaningful)</p>
        </div>

        <div class="info-text">
            <p>
                Interested in learning more? Check out our
                <a href="${config.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `;

    const subscribeForm = container.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', () => markSubscribed());
    }
}
