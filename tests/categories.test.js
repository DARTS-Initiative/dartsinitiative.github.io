import { describe, it, expect } from 'vitest';
import { categories } from '../src/categories.js';

describe('categories', () => {
    it('has at least one category plus a default', () => {
        const keys = Object.keys(categories);
        expect(keys.length).toBeGreaterThanOrEqual(2);
        expect(categories.default).toBeDefined();
    });

    it('every category has valid color properties', () => {
        for (const [name, cat] of Object.entries(categories)) {
            expect(cat.color, `${name} missing color`).toBeDefined();
            expect(cat.backgroundColor, `${name} missing backgroundColor`).toBeDefined();
            expect(cat.borderColor, `${name} missing borderColor`).toBeDefined();

            // Colors should look like hex or rgba
            expect(cat.color).toMatch(/^#[0-9a-f]{3,8}$/i);
            expect(cat.backgroundColor).toMatch(/^rgba?\(/);
            expect(cat.borderColor).toMatch(/^rgba?\(/);
        }
    });
});
