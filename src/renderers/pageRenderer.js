import { updateSeo } from '../seo.js';
import { processHtml, render404 } from './base.js';

const pages = import.meta.glob('../../content/pages/*.md', { eager: true });

export function getPages() {
    return pages;
}

export function renderPage(container, slug) {
    const path = `../../content/pages/${slug}.md`;
    const page = pages[path];

    if (!page) {
        render404(container);
        return;
    }

    updateSeo(page.attributes.title, page.attributes.excerpt || page.attributes.description);

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
