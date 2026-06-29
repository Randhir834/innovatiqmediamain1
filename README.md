# InnovatiqMedia - Main Website

Modern React frontend for InnovatiqMedia main website with **cutting-edge 2026 animations**.

## ✨ Advanced Animations

This website features **15+ custom animation components** based on the latest 2026 web animation trends:

### 🎯 Key Animation Features
- **Custom Cursor** - Magnetic cursor with attraction effects (desktop)
- **Scroll Progress** - Beautiful gradient progress indicator at top
- **3D Tilt Cards** - Interactive perspective transforms on hover
- **Text Reveal** - Word-by-word animated text reveals
- **CountUp Animations** - Smooth number counting for stats
- **Magnetic Buttons** - Buttons that attract toward cursor
- **Morphing Blobs** - Organic background shapes in Hero
- **Parallax Effects** - Depth-based scrolling animations
- **Floating Elements** - Continuous hover animations
- **Gradient Text** - Animated color transitions

### 📚 Animation Documentation
- **`ANIMATIONS_GUIDE.md`** - Complete animation component reference with usage examples
- **`ANIMATION_SUMMARY.md`** - Implementation overview and feature list

### 🎨 Animation Tech Stack
- **Framer Motion 12.40.0** - Production-grade React animations
- Custom spring physics for natural movement
- GPU-accelerated transforms for 60fps
- Scroll-triggered viewport-aware animations
- Responsive and mobile-optimized

### 🎭 Where Animations Are Used
- **Hero Section**: Morphing blobs, magnetic CTAs, gradient text
- **Features**: CountUp stats, parallax text, floating decorations
- **Portfolio**: 3D tilt cards, magnetic filters, smooth transitions
- **Clients**: Staggered grid, advanced hover effects
- **Process**: Text reveal, floating elements, magnetic CTA
- **Testimonials**: 3D tilt cards, animated quotes, gradient overlays
- **Global**: Scroll progress bar, custom cursor

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
