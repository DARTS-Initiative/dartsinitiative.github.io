import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');

describe('index.html', () => {
    it('has the app container', () => {
        expect(html).toContain('id="app"');
    });

    it('has the background canvas', () => {
        expect(html).toContain('id="background-canvas"');
    });

    it('has a navigation bar with essential links', () => {
        expect(html).toContain('<nav');
        expect(html).toContain('href="#/"');
        expect(html).toContain('href="#/blog"');
        expect(html).toContain('href="#/projects"');
    });

    it('has the theme toggle button', () => {
        expect(html).toContain('id="theme-toggle"');
    });

    it('loads the main JS module', () => {
        expect(html).toMatch(/src=["']\/src\/main\.js["']/);
    });

    it('has essential meta tags for SEO', () => {
        expect(html).toContain('meta name="description"');
        expect(html).toContain('property="og:title"');
        expect(html).toContain('property="og:description"');
        expect(html).toContain('property="twitter:title"');
    });

    it('has a noscript fallback', () => {
        expect(html).toContain('<noscript>');
    });

    it('declares the document language', () => {
        expect(html).toMatch(/<html\s+lang="/);
    });
});
