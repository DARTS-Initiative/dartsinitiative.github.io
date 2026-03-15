export function render404(container) {
    container.innerHTML = `
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `;
}

// Helper to process markdown HTML (e.g., custom image sizes)
export function processHtml(html) {
    if (!html) return '';
    // Support syntax like ![alt|600px](url) -> extracts 600px and applies as max-width
    return html.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g, (match, prefix, alt, size, suffix) => {
        const cleanSize = size.trim();
        // Basic validation for CSS size units
        if (/^\d+(px|%|em|rem|vw|vh)$/.test(cleanSize)) {
            return `<img ${prefix}${alt}" style="width: 100%; max-width: ${cleanSize};"${suffix.slice(1)}`;
        }
        return match;
    });
}
