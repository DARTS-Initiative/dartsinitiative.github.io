import './style.css';
import { initBackground } from './background.js';
import { initRouter } from './router.js';
import { renderFooter } from './renderer.js';
import { initTheme, setupThemeToggle } from './theme.js';

// Initialize background animation
initTheme();
setupThemeToggle();
initBackground('background-canvas');

// Initialize Router (handles main content rendering)
initRouter('app');

// Render Footer (static content)
renderFooter();

console.log('DARTS Initiative Website Initialized');
