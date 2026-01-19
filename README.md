# Maple Precision Machinery Website

A modern, bilingual (English/French) website for Maple Precision Machinery Ltd, showcasing their cross-border machinery parts business.

## Features

- 🌐 **Bilingual Support**: Full English and French language switching
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🖼️ **Image Gallery**: Beautiful product image galleries with lightbox viewing
- 🎨 **Modern UI**: Clean, professional design matching company branding
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **react-i18next** for internationalization
- **Vite** as build tool
- **CSS3** for styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Important**: Copy the `Product image` folder to the `public` directory:
   - **Windows**: `xcopy "Product image" "public\Product image\" /E /I`
   - **Mac/Linux**: `cp -r "Product image" "public/"`

3. Start development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

See [SETUP.md](./SETUP.md) for detailed setup instructions.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── LanguageSwitcher/
│   ├── ProductCard/
│   ├── ImageGallery/
│   └── ImageLightbox/
├── pages/              # Page components
│   ├── Home/
│   ├── Products/
│   ├── Category/
│   ├── About/
│   └── Contact/
├── locales/            # Translation files
│   ├── en/
│   └── fr/
├── data/               # Data configuration
├── i18n/               # i18n configuration
├── utils/              # Utility functions
└── App.tsx             # Main app component
```

## Language Support

The website supports two languages:
- **English (en)** - Default
- **French (fr)**

Users can switch languages using the language switcher in the header. The preference is saved in localStorage.

## Product Categories

1. **Cast and Forged Parts** - Pièces moulées et forgées
2. **Mechanical Equipment and Parts** - Équipements et pièces mécaniques
3. **Ship Fittings** - Accessoires maritimes
4. **Trailer Parts** - Pièces de remorque

## Image Assets

Product images are located in the `Product image/` directory. Ensure images are properly organized in their respective category folders.

## Development Notes

- Images are referenced from the `public/Product image/` directory
- Translation files are in JSON format in `src/locales/`
- The app uses React Router for client-side routing
- All components are written in TypeScript for type safety

## License

Copyright © 2024 Maple Precision Machinery Ltd. All rights reserved.
