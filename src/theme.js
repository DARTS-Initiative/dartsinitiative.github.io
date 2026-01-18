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
    // Create button
    const btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.ariaLabel = 'Toggle Dark Mode';
    document.body.appendChild(btn);

    const updateIcon = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        btn.innerHTML = isDark ? '🌙' : '☀';
    };

    // Initial icon
    updateIcon();

    btn.addEventListener('click', () => {
        toggleTheme();
        updateIcon();
    });
}
