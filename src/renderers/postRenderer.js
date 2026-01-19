import { config } from '../config.js';
import { categories } from '../categories.js';
import { updateSeo } from '../seo.js';
import { processHtml, render404 } from './base.js';

const postsModules = import.meta.glob('../../content/posts/*.md');
let postsIndex = [];

export async function initPosts() {
    try {
        const response = await fetch('/posts-index.json');
        if (!response.ok) throw new Error('Failed to load posts index');
        const data = await response.json();
        postsIndex = data.posts || [];
        console.log('Posts index loaded:', postsIndex.length, 'posts');
    } catch (e) {
        console.error('Error loading posts index:', e);
        postsIndex = [];
    }
}

export function getPostsIndex() {
    return postsIndex;
}

export function renderBlog(container) {
    updateSeo('Blog', 'Read the latest news and updates from the DARTS Initiative.');

    const postsHtml = postsIndex.map((post) => {
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

    container.innerHTML = `
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Blog Posts</h2>
            <div class="posts-list">
                ${postsHtml || '<p class="no-content-message">No blog posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `;
}

export async function renderPost(container, slug) {
    const path = `../../content/posts/${slug}.md`;
    const loadPost = postsModules[path];

    if (!loadPost) {
        render404(container);
        return;
    }

    try {
        const postModule = await loadPost();
        const { attributes, html } = postModule;

        updateSeo(attributes.title, attributes.excerpt || attributes.description);

        container.innerHTML = `
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${attributes.title}</h1>
                <div class="post-meta" style="${getCategoryStyleString(attributes.category)}">
                    <span class="category-name">${attributes.category || 'Others'}</span>
                    <span class="separator">|</span>
                    <span>${attributes.date}</span>
                    ${attributes.author ? `<span class="separator">|</span><span class="author">by ${attributes.author}</span>` : ''}
                </div>
                <div class="post-content">
                    ${processHtml(html)}
                </div>
            </div>
            `;
    } catch (error) {
        console.error('Error loading post:', error);
        render404(container);
    }
}

export function getCategoryStyleString(categoryName) {
    const style = categories[categoryName] || categories['default'];
    return `
        color: ${style.color};
        background-color: ${style.backgroundColor};
        border-color: ${style.borderColor};
    `;
}
