import './style.css';
import { initBackground } from './background.js';
import { initRouter } from './router.js';
import { renderFooter } from './renderer.js';

// Initialize background animation
initBackground('background-canvas');

// Initialize Router (handles main content rendering)
initRouter('app');

// Render Footer (static content)
renderFooter();

console.log('DARTS Initiative Website Initialized');
