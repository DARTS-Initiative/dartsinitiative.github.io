export function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    return newTheme;
}

export function setupThemeToggle() {
    // Get existing button
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    /* Removed manual button creation since it is now in HTML */

    const updateIcon = () => {
        // Icons are now handled by CSS display property based on data-theme
        // But we can keep this empty or remove it if not needed for anything else.
        // Actually, my CSS relies on data-theme separate from icon content since I put SVGs in HTML.
        // So I don't need to change innerHTML here.
    };

    // Initial check (CSS handles visibility)

    btn.addEventListener('click', () => {
        toggleTheme();
    });
}
