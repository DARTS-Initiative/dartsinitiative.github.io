import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

describe('production build', () => {
    it('vite build completes without errors', () => {
        execSync('npx vite build', {
            cwd: path.resolve('.'),
            stdio: 'pipe',
            timeout: 60000,
        });

        const distDir = path.resolve('dist');
        expect(fs.existsSync(distDir)).toBe(true);
        expect(fs.existsSync(path.join(distDir, 'index.html'))).toBe(true);
    });

    it('dist contains JS and CSS assets', () => {
        const assetsDir = path.resolve('dist/assets');
        expect(fs.existsSync(assetsDir)).toBe(true);

        const assets = fs.readdirSync(assetsDir);
        expect(assets.some(f => f.endsWith('.js'))).toBe(true);
        expect(assets.some(f => f.endsWith('.css'))).toBe(true);
    });
});
