# 聖本篤文化中心 (Saint Benedict Cultural Center)

A React application built with Vite and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build for deployment

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update the base path (if needed):**
   - If your repository name is different from `chinese-christian-munich`, update the `base` path in `vite.config.js`
   - Change `/chinese-christian-munich/` to match your repository name

3. **Push to main branch:**
   - The GitHub Action will automatically build and deploy when you push to the `main` branch
   - You can also manually trigger it from the Actions tab

4. **Access your site:**
   - Your site will be available at: `https://[your-username].github.io/chinese-christian-munich/`
   - Or if using a custom domain, configure it in Settings → Pages

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch (using a tool like `gh-pages` package)

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Project Structure

```
├── public/
│   ├── images/
│   │   └── logo.png
│   └── 404.html          # SPA routing support for GitHub Pages
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind CSS imports
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment workflow
├── index.html
├── vite.config.js        # Vite configuration with GitHub Pages base path
└── package.json
```

## Notes

- The project uses a dark theme optimized for mobile and desktop views
- All content blocks are clickable navigation elements
- The site is fully responsive and touch-friendly
