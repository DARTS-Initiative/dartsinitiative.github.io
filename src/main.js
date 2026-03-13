import './style.css';
import { initBackground } from './background.js';
import { initRouter } from './router.js';
import { renderFooter } from './renderers/footerRenderer.js';
import { initPosts } from './renderers/postRenderer.js';
import { initProjects } from './renderers/projectRenderer.js';
import { initTheme, setupThemeToggle } from './theme.js';
import { initNewsletter } from './newsletter.js';

// Initialize background animation
initTheme();
setupThemeToggle();
initBackground('background-canvas');

// Initialize Posts and Projects Data
await initPosts();
await initProjects();

// Initialize Router (handles main content rendering)
initRouter('app');

// Render Footer (static content)
renderFooter();

// Initialize Newsletter Banner
initNewsletter();

console.log('DARTS Initiative Website Initialized');
