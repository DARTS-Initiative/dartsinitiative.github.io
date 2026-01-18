# DARTS Initiative Website

Official website source code for the [DARTS Initiative](https://darts-initiative.github.io/).

DARTS (Distributed Autonomous Resilient Technology Swarms) is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.

## Project Overview

This website is built using:
-   **Vite**: For fast development and building.
-   **Vanilla JavaScript**: Core logic (`src/`).
-   **Vite Plugin Markdown**: For loading content from Markdown files.
-   **[Vibe Coding Philosophy](VIBE-CODING.md)**: How we build and maintain this project.

## Getting Started

### Prerequisites
-   Node.js (v18+ recommended)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/darts-initiative/web.git
    cd web
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

To start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Building for Production

To build the static site:
```bash
npm run build
```
The output will be in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
├── content/        # Markdown content (blog posts, news)
├── public/         # Static assets (images, icons)
├── src/
│   ├── main.js     # Application entry point
│   ├── background.js # Canvas background animation
│   ├── renderer.js # UI rendering logic
│   ├── router.js   # Simple client-side router
│   └── style.css   # Global styles
├── index.html      # Main HTML entry
└── vite.config.js  # Vite configuration
```

## Adding Content & Deployment

For detailed instructions on how to add new blog posts, create projects, and how the automated publishing process works, please refer to the **[HOW-TO.md](HOW-TO.md)** guide.


## License

MIT
