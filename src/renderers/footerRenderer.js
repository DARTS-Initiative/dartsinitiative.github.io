import { config } from '../config.js';

export function renderFooter() {
    const footerContent = document.querySelector('.footer-content');
    if (!footerContent) return;

    const linksHtml = config.footer.links.map(link =>
        `<a href="${link.url}" target="${link.url.startsWith('http') ? '_blank' : '_self'}">${link.text}</a>`
    ).join('');

    footerContent.innerHTML = `
        <p class="copyright">${config.footer.copyright}</p>
        <p class="license-info">${config.footer.license}</p>
        <div class="footer-links">
            ${linksHtml}
        </div>
        `;
}
