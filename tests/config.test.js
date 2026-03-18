import { describe, it, expect } from 'vitest';
import { config } from '../src/config.js';

describe('config', () => {
    it('has required top-level properties', () => {
        expect(config.siteTitle).toBeDefined();
        expect(config.siteDescription).toBeDefined();
        expect(config.logo).toBeDefined();
        expect(config.footer).toBeDefined();
    });

    it('has valid logo configuration for both themes', () => {
        for (const theme of ['light', 'dark']) {
            expect(config.logo[theme]).toBeDefined();
            expect(config.logo[theme].svg).toMatch(/\.svg$/);
            expect(config.logo[theme].png).toMatch(/\.png$/);
        }
        expect(config.logo.alt).toBeDefined();
    });

    it('has valid footer with links', () => {
        expect(config.footer.copyright).toBeDefined();
        expect(config.footer.links).toBeInstanceOf(Array);
        expect(config.footer.links.length).toBeGreaterThan(0);

        config.footer.links.forEach(link => {
            expect(link.text).toBeDefined();
            expect(link.url).toBeDefined();
        });
    });

    it('has a newsletter URL', () => {
        expect(config.newsletterUrl).toMatch(/^https?:\/\//);
    });
});
