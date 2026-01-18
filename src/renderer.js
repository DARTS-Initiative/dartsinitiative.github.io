import { config } from './config.js';

// Load posts metadata at build time
const posts = import.meta.glob('../content/posts/*.md', { eager: true });
const pages = import.meta.glob('../content/pages/*.md', { eager: true });
const intro = import.meta.glob('../content/intro.md', { eager: true });

export function renderHome(container) {
    const sectionsHtml = Object.entries(pages).map(([path, page]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
        <a href="#/page/${slug}" class="section-box">
            <h3>${page.attributes.title}</h3>
        </a>
    `;
    }).join('');

    const postsHtml = Object.entries(posts).map(([path, post]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
            <a href="#/post/${slug}" class="post-card" data-slug="${slug}">
                <h3>${post.attributes.title}</h3>
                <div class="post-meta">${post.attributes.date}</div>
                <p>${post.attributes.excerpt || ''}</p>
            </a>
        `;
    }).join('');

    const introContent = processHtml(intro['../content/intro.md']?.html);

    container.innerHTML = `
    <img src="${config.logo.src}" alt="${config.logo.alt}" class="logo">
        <h1 class="title">${config.siteTitle}</h1>
        <p class="description">${config.siteDescription}</p>

        <div class="intro-section">
            ${introContent}
        </div>

        <div class="buttons-section">
            <h2>Explore the Ecosystem</h2>
            <div class="buttons-list">
                ${sectionsHtml}
            </div>
        </div>

        <div class="blog-section">
            <h2>${config.blog.title}</h2>
            <div class="posts-list">
                ${postsHtml}
            </div>
        </div>

        <div class="info-text">
            <p>
                Interested in learning more? Check out our
                <a href="${config.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `;
}

export function renderPost(container, slug) {
    const path = `../content/posts/${slug}.md`;
    const post = posts[path];

    if (!post) {
        render404(container);
        return;
    }

    container.innerHTML = `
        <div class="post-detail">
            <a href="#" class="back-button">Back to Home</a>
            <h1>${post.attributes.title}</h1>
            <div class="post-meta">${post.attributes.date}</div>
            <div class="post-content">
                ${processHtml(post.html)}
            </div>
        </div>
        `;
}

export function renderPage(container, slug) {
    const path = `../content/pages/${slug}.md`;
    const page = pages[path];

    if (!page) {
        render404(container);
        return;
    }

    container.innerHTML = `
        <div class="post-detail">
            <a href="#" class="back-button">Back to Home</a>
            <h1>${page.attributes.title}</h1>
            <div class="post-content">
                ${processHtml(page.html)}
            </div>
        </div>
        `;
}

export function render404(container) {
    container.innerHTML = `
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#" class="back-button">Return to Home</a>
        </div>
    `;
}

// Helper to process markdown HTML (e.g., custom image sizes)
function processHtml(html) {
    if (!html) return '';
    // Support syntax like ![alt|600px](url) -> extracts 600px and applies as max-width
    return html.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g, (match, prefix, alt, size, suffix) => {
        const cleanSize = size.trim();
        // Basic validation for CSS size units
        if (/^\d+(px|%|em|rem|vw|vh)$/.test(cleanSize)) {
            return `<img ${prefix}${alt}" style="width: 100%; max-width: ${cleanSize};" ${suffix}`;
        }
        return match;
    });
}

export function renderFooter() {
    const footerContent = document.querySelector('.footer-content');
    if (!footerContent) return;

    const linksHtml = config.footer.links.map(link =>
        `<a href="${link.url}" target="${link.url.startsWith('http') ? '_blank' : '_self'}">${link.text}</a>`
    ).join('');

    footerContent.innerHTML = `
        <p class="copyright">${config.footer.copyright}</p>
        <p class="license-info">${config.footer.license}</p>
        <div class="footer-links">
            ${linksHtml}
        </div>
        `;
}
