import { config } from '../config.js';
import { showNewsletter } from '../newsletter.js';

export function renderFooter() {
    let footer = document.querySelector('footer');

    // Create footer if it doesn't exist
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }

    const linksHtml = config.footer.links.map(link =>
        `<a href="${link.url}" target="${link.url.startsWith('http') ? '_blank' : '_self'}" ${link.url.startsWith('http') ? 'rel="noopener noreferrer"' : ''}>${link.text}</a>`
    ).join('');

    footer.innerHTML = `
        <div class="footer-content">
            <p class="copyright">${config.footer.copyright}</p>
            <p class="license-info">${config.footer.license}</p>
            <div class="footer-links">
                ${linksHtml}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `;

    footer.querySelector('.footer-subscribe').addEventListener('click', (e) => {
        e.preventDefault();
        showNewsletter();
    });
}
