export function updateSeo(title, description) {
    // Update Title
    document.title = title ? `${title} | DARTS Initiative` : 'DARTS Initiative';

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Decentralized Autonomous Research & Technology System - Advancing open science and technology.';

    // Update Social Media Tags (OG & Twitter)
    const updateMeta = (name, content) => {
        let meta = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
        if (meta) meta.content = content || '';
    };

    const finalTitle = title ? `${title} | DARTS Initiative` : 'DARTS Initiative';
    const finalDesc = description || 'Decentralized Autonomous Research & Technology System - Advancing open science and technology.';

    updateMeta('og:title', finalTitle);
    updateMeta('og:description', finalDesc);
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDesc);
}
