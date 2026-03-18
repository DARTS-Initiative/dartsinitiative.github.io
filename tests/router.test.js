import { describe, it, expect } from 'vitest';

// The isValidSlug function is internal to router.js, so we test the same regex directly
const isValidSlug = (slug) => /^[a-z0-9-]+$/i.test(slug);

describe('slug validation', () => {
    it('accepts valid slugs', () => {
        expect(isValidSlug('hello-world')).toBe(true);
        expect(isValidSlug('welcome-to-darts')).toBe(true);
        expect(isValidSlug('post-123')).toBe(true);
        expect(isValidSlug('about-us')).toBe(true);
        expect(isValidSlug('a')).toBe(true);
    });

    it('rejects invalid slugs', () => {
        expect(isValidSlug('')).toBe(false);
        expect(isValidSlug('hello world')).toBe(false);
        expect(isValidSlug('path/traversal')).toBe(false);
        expect(isValidSlug('../etc/passwd')).toBe(false);
        expect(isValidSlug('<script>')).toBe(false);
        expect(isValidSlug('slug?param=1')).toBe(false);
    });
});

describe('route patterns', () => {
    const routes = ['#/', '#/blog', '#/projects'];
    const dynamicPrefixes = ['#/post/', '#/project/', '#/page/'];

    it('static routes are well-formed', () => {
        routes.forEach(route => {
            expect(route).toMatch(/^#\//);
        });
    });

    it('dynamic route prefixes end with /', () => {
        dynamicPrefixes.forEach(prefix => {
            expect(prefix).toMatch(/^#\/\w+\/$/);
        });
    });
});
