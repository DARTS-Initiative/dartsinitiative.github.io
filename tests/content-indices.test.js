import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');

describe('content index generation', () => {
    beforeAll(() => {
        execSync('npm run generate-indices', { cwd: path.resolve('.') });
    });

    it('generates posts-index.json with valid structure', () => {
        const filePath = path.join(PUBLIC_DIR, 'posts-index.json');
        expect(fs.existsSync(filePath)).toBe(true);

        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        expect(data.meta).toBeDefined();
        expect(data.meta.total).toBeTypeOf('number');
        expect(data.meta.generatedAt).toBeDefined();
        expect(data.posts).toBeInstanceOf(Array);
        expect(data.posts.length).toBe(data.meta.total);
    });

    it('generates projects-index.json with valid structure', () => {
        const filePath = path.join(PUBLIC_DIR, 'projects-index.json');
        expect(fs.existsSync(filePath)).toBe(true);

        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        expect(data.meta).toBeDefined();
        expect(data.meta.total).toBeTypeOf('number');
        expect(data.projects).toBeInstanceOf(Array);
    });

    it('posts have required frontmatter fields', () => {
        const data = JSON.parse(
            fs.readFileSync(path.join(PUBLIC_DIR, 'posts-index.json'), 'utf-8')
        );

        data.posts.forEach(post => {
            expect(post.slug, 'post missing slug').toBeDefined();
            expect(post.title, `${post.slug} missing title`).toBeDefined();
            expect(post.date, `${post.slug} missing date`).toBeDefined();
        });
    });
});
