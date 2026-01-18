import { config } from '../config.js';
import { updateSeo } from '../seo.js';
import { processHtml, render404 } from './base.js';

const projectsModules = import.meta.glob('../../content/projects/*.md');
let projectsIndex = [];

export async function initProjects() {
    try {
        const response = await fetch('/projects-index.json');
        if (!response.ok) throw new Error('Failed to load projects index');
        const data = await response.json();
        projectsIndex = data.projects;
        console.log('Projects index loaded:', projectsIndex.length, 'projects');
    } catch (e) {
        console.error('Error loading projects index:', e);
        projectsIndex = [];
    }
}

export function getProjectsIndex() {
    return projectsIndex;
}

export function renderProjects(container) {
    updateSeo('Projects', 'Discover the innovative projects developed by the DARTS Initiative.');

    const projectsHtml = projectsIndex.map((project) => {
        const slug = project.slug;
        return `
            <a href="#/project/${slug}" class="post-card project-card" data-slug="${slug}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.excerpt || ''}</p>
            </div>
            <div class="project-logo-container">
                ${project.logo ? `<img src="${project.logo}" alt="${project.title}" class="project-logo">` : ''}
            </div>
        </a>
        `;
    }).join('');

    container.innerHTML = `
        <div class="blog-section" style="margin-top: 40px;">
            <h2>Our Projects</h2>
            <div class="posts-list">
                ${projectsHtml || '<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `;
}

export async function renderProject(container, slug) {
    const path = `../../content/projects/${slug}.md`;
    const loadProject = projectsModules[path];

    if (!loadProject) {
        render404(container);
        return;
    }

    try {
        const projectModule = await loadProject();
        const { attributes, html } = projectModule;

        updateSeo(attributes.title, attributes.excerpt || attributes.description);

        container.innerHTML = `
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${attributes.title}</h1>
                <div class="project-detail-logo-container">
                     ${attributes.logo ? `<img src="${attributes.logo}" alt="${attributes.title}" class="project-detail-logo">` : ''}
                </div>
                <div class="post-content">
                    ${processHtml(html)}
                </div>
            </div>
            `;
    } catch (error) {
        console.error('Error loading project:', error);
        render404(container);
    }
}
