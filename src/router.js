import { renderHome, renderPost, renderPage, renderBlog, renderProjects, renderProject, render404 } from './renderer.js';

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

    function handleRoute() {
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
            renderPost(container, slug);
        } else if (hash.startsWith('#/project/')) {
            const slug = hash.replace('#/project/', '');
            renderProject(container, slug);
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
