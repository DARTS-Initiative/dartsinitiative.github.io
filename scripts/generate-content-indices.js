import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../content/posts');
const PROJECTS_DIR = path.join(__dirname, '../content/projects');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function generateIndex(sourceDir, outputFile, type) {
    console.log(`Generating ${type} index...`);

    if (!fs.existsSync(sourceDir)) {
        console.warn(`Directory not found: ${sourceDir}`);
        fs.writeFileSync(outputFile, JSON.stringify({ meta: { total: 0 }, items: [] }));
        return;
    }

    const files = fs.readdirSync(sourceDir);
    const items = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
            const { attributes } = frontMatter(content);
            const slug = file.replace('.md', '');

            return {
                slug,
                ...attributes
            };
        });

    // Sort based on type if needed
    if (type === 'posts') {
        items.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const stats = {
        total: items.length,
        generatedAt: new Date().toISOString()
    };

    const output = {
        meta: stats,
        [type]: items  // Usar el tipo como clave: 'posts' o 'projects'
    };

    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
    console.log(`Generated index for ${items.length} ${type} at ${outputFile}`);
}

generateIndex(POSTS_DIR, path.join(PUBLIC_DIR, 'posts-index.json'), 'posts');
generateIndex(PROJECTS_DIR, path.join(PUBLIC_DIR, 'projects-index.json'), 'projects');
