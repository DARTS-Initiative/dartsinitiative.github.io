import { defineConfig } from 'vite';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
    plugins: [
        markdown({
            mode: ['html', 'toc']
        })
    ],
    build: {
        outDir: 'dist',
    }
});
