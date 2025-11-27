# Recycling Front

A modern React-based frontend application for recycling management, built with Vite and styled with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Available Scripts

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Production Build

Create an optimized production build:

```bash
npm run build
```

The compiled files will be output to the `dist` directory.

### Preview Build

Preview the production build locally before deployment:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality and fix issues:

```bash
npm run lint
```

## Tech Stack

**Frontend Framework**

- React 19.2.0 - Modern UI library with latest features

**Build Tool**

- Vite 7.2.4 - Lightning-fast development and production builds

**Styling**

- Tailwind CSS 4.1.17 - Utility-first CSS framework
- @tailwindcss/vite - Vite plugin for optimized Tailwind CSS

**UI Components**

- Lucide React 0.555.0 - Beautiful, consistent icon library

**Code Quality**

- ESLint - JavaScript linting with React-specific rules
- React Hooks ESLint Plugin - Best practices for React Hooks

## Project Structure

```
recycling-front/
├── src/                 # Source code
├── public/              # Static assets
├── dist/                # Production build output
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## Development Workflow

1. Run `npm run dev` to start the development server
2. Make changes to your components in the `src` directory
3. Changes will automatically reload in your browser
4. Use `npm run lint` to check code quality before committing
5. Run `npm run build` when ready to create a production-ready build

## Browser Support

This project uses modern JavaScript and CSS features. It's recommended for use with current versions of:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is private. See package.json for details.

## Getting Help

If you encounter issues:

- Check that all dependencies are installed with `npm install`
- Clear your browser cache and restart the dev server
- Review the Vite and React documentation for framework-specific questions
