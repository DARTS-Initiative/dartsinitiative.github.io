import { config } from './config.js';
import { categories } from './categories.js';

// Load posts metadata at build time
const posts = import.meta.glob('../content/posts/*.md', { eager: true });
const pages = import.meta.glob('../content/pages/*.md', { eager: true });
const projects = import.meta.glob('../content/projects/*.md', { eager: true });
const intro = import.meta.glob('../content/intro.md', { eager: true });

const sortedPosts = Object.entries(posts).sort(([, a], [, b]) => {
    return new Date(b.attributes.date) - new Date(a.attributes.date);
});

export function renderHome(container) {
    const sectionsHtml = Object.entries(pages).map(([path, page]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
        <a href="#/page/${slug}" class="section-box">
            <h3>${page.attributes.title}</h3>
        </a>
    `;
    }).join('');

    const postsHtml = sortedPosts.slice(0, 2).map(([path, post]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
            <a href="#/post/${slug}" class="post-card" data-slug="${slug}">
                <h3>${post.attributes.title}</h3>
                <div class="post-meta" style="${getCategoryStyleString(post.attributes.category)}">
                    <span class="category-name">${post.attributes.category || 'Others'}</span>
                    <span class="separator">|</span>
                    <span>${post.attributes.date}</span>
                    ${post.attributes.author ? `<span class="separator">|</span><span class="author">by ${post.attributes.author}</span>` : ''}
                </div>
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
            <div style="text-align: center; margin-top: 30px;">
                <a href="#/blog" class="text-link">View All Posts →</a>
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

export function renderBlog(container) {
    const postsHtml = sortedPosts.map(([path, post]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
            <a href="#/post/${slug}" class="post-card" data-slug="${slug}">
                <h3>${post.attributes.title}</h3>
                <div class="post-meta" style="${getCategoryStyleString(post.attributes.category)}">
                    <span class="category-name">${post.attributes.category || 'Others'}</span>
                    <span class="separator">|</span>
                    <span>${post.attributes.date}</span>
                    ${post.attributes.author ? `<span class="separator">|</span><span class="author">by ${post.attributes.author}</span>` : ''}
                </div>
                <p>${post.attributes.excerpt || ''}</p>
            </a>
        `;
    }).join('');

    container.innerHTML = `
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Blog Posts</h2>
            <div class="posts-list">
                ${postsHtml}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `;
}

export function renderProjects(container) {
    const projectsHtml = Object.entries(projects).map(([path, project]) => {
        const slug = path.split('/').pop().replace('.md', '');
        return `
            <a href="#/project/${slug}" class="post-card project-card" data-slug="${slug}">
            <div class="project-info">
                <h3>${project.attributes.title}</h3>
                <p>${project.attributes.excerpt || ''}</p>
            </div>
            <div class="project-logo-container">
                ${project.attributes.logo ? `<img src="${project.attributes.logo}" alt="${project.attributes.title}" class="project-logo">` : ''}
            </div>
        </a>
        `;
    }).join('');

    container.innerHTML = `
        <div class="blog-section" style="margin-top: 40px;">
            <h2>Our Projects</h2>
            <div class="posts-list">
                ${projectsHtml || '<p>No projects found yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
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
            <a href="#/blog" class="back-button">Back to Blog</a>
            <h1>${post.attributes.title}</h1>
            <div class="post-meta" style="${getCategoryStyleString(post.attributes.category)}">
                <span class="category-name">${post.attributes.category || 'Others'}</span>
                <span class="separator">|</span>
                <span>${post.attributes.date}</span>
                ${post.attributes.author ? `<span class="separator">|</span><span class="author">by ${post.attributes.author}</span>` : ''}
            </div>
            <div class="post-content">
                ${processHtml(post.html)}
            </div>
        </div>
        `;
}

export function renderProject(container, slug) {
    const path = `../content/projects/${slug}.md`;
    const project = projects[path];

    if (!project) {
        render404(container);
        return;
    }

    container.innerHTML = `
        <div class="post-detail">
            <a href="#/projects" class="back-button">Back to Projects</a>
            <h1>${project.attributes.title}</h1>
            <div class="project-detail-logo-container">
                 ${project.attributes.logo ? `<img src="${project.attributes.logo}" alt="${project.attributes.title}" class="project-detail-logo">` : ''}
            </div>
            <div class="post-content">
                ${processHtml(project.html)}
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
            <a href="#/" class="back-button">Back to Home</a>
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
            <a href="#/" class="back-button">Return to Home</a>
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

function getCategoryStyleString(categoryName) {
    const style = categories[categoryName] || categories['default'];
    return `
        color: ${style.color};
        background-color: ${style.backgroundColor};
        border-color: ${style.borderColor};
    `;
}
