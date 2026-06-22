# InnovatiqMedia - Main Website

Modern React frontend for InnovatiqMedia main website.

## Features

- React 18 with Vite
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication
- Responsive design
- Connected to Laravel backend

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will run on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components
├── layouts/        # Layout components
├── pages/          # Page components
├── services/       # API services
├── styles/         # Global styles
└── utils/          # Utility functions
```

## Pages

- **Home** - Landing page with hero section and features
- **About** - Company information
- **Services** - Services offered
- **Contact** - Contact form and information

## API Integration

The frontend connects to the Laravel backend API at `http://localhost:8000/api`

API configuration is in `src/services/api.js`

## Links to Other Sites

- **Services Portal**: http://localhost:3001
- **Shop Website**: http://localhost:3002
