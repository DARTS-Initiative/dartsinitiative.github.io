export function updateSeo(title, description) {
    // Update Title
    document.title = title ? `${title} | DARTS` : 'DARTS';

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Open initiative to research and share advances in AI that understands';

    // Update Social Media Tags (OG & Twitter)
    const updateMeta = (name, content) => {
        let meta = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
        if (meta) meta.content = content || '';
    };

    const finalTitle = title ? `${title} | DARTS` : 'DARTS';
    const finalDesc = description || 'Open initiative to research and share advances in AI that understands.';

    updateMeta('og:title', finalTitle);
    updateMeta('og:description', finalDesc);
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDesc);
}
