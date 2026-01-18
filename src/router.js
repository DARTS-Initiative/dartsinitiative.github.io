import { renderHome } from './renderers/homeRenderer.js';
import { renderPost, renderBlog } from './renderers/postRenderer.js';
import { renderProjects, renderProject } from './renderers/projectRenderer.js';
import { renderPage } from './renderers/pageRenderer.js';
import { render404 } from './renderers/base.js';

export function initRouter(containerId) {
    const container = document.getElementById(containerId);

    function updateActiveLink(hash) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
        // Special case for Home
        if (hash === '' || hash === '#/') {
            document.querySelector('.nav-link[href="#/"]')?.classList.add('active');
        }
    }

    async function handleRoute() {
        const hash = window.location.hash;

        // Scroll to top on navigation
        window.scrollTo(0, 0);

        updateActiveLink(hash);

        if (hash === '' || hash === '#/') {
            renderHome(container);
        } else if (hash === '#/blog') {
            renderBlog(container);
        } else if (hash === '#/projects') {
            renderProjects(container);
        } else if (hash.startsWith('#/post/')) {
            const slug = hash.replace('#/post/', '');
            await renderPost(container, slug);
        } else if (hash.startsWith('#/project/')) {
            const slug = hash.replace('#/project/', '');
            await renderProject(container, slug);
        } else if (hash.startsWith('#/page/')) {
            const slug = hash.replace('#/page/', '');
            renderPage(container, slug);
        } else {
            render404(container);
        }
    }

    // Handle initial route
    handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);
}
