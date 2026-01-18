import { renderHome, renderPost, renderPage, render404 } from './renderer.js';

export function initRouter(containerId) {
    const container = document.getElementById(containerId);

    function handleRoute() {
        const hash = window.location.hash;

        // Scroll to top on navigation
        window.scrollTo(0, 0);

        if (hash === '' || hash === '#/') {
            renderHome(container);
        } else if (hash.startsWith('#/post/')) {
            const slug = hash.replace('#/post/', '');
            renderPost(container, slug);
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
