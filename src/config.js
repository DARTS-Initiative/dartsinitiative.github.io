/**
 * ARCHIVO DE CONFIGURACIÓN PRINCIPAL
 * 
 * Aquí puedes modificar los textos, secciones y enlaces de la web sin tocar la programación.
 */

export const config = {
    // Información General
    siteTitle: "DARTS Initiative",
    siteDescription: "DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.",

    // Configuración del Logo
    // Configuración del Logo
    logo: {
        light: {
            svg: "/images/darts_logo.svg",
            png: "/images/darts_logo.png"
        },
        dark: {
            svg: "/images/darts_logo_black.svg",
            png: "/images/darts_logo_black.png"
        },
        alt: "DARTS Initiative Logo"
    },

    // Secciones de la página principal (Recuadros)
    // Para añadir uno nuevo, simplemente añade una línea más aquí.
    sections: [
        {
            title: 'Research',
            // link: '/research' // Futura funcionalidad: añadir links si es necesario
        },
        { title: 'Swarms' },
        { title: 'Hardware' },
        { title: 'Open Source' }
    ],

    // Sección del Blog
    blog: {
        title: "Latest Updates",
        readMore: "Read Post"
    },

    // Footer
    footer: {
        copyright: "© 2026 DARTS Initiative - Pablo Magariños Docampo",
        license: "Content distributed under open licenses | Committed to Open Source & Open Access",
        links: [
            { text: "GitHub", url: "https://github.com/DARTS-Initiative" },
            { text: "License", url: "#license" },
            { text: "Contribute", url: "#contribute" }
        ]
    }
};
