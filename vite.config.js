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
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    if (id.includes('src/renderer.js')) {
                        return 'renderer';
                    }
                }
            }
        }
    }
});
