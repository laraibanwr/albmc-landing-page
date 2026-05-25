# ALBMC Landing Page

A modern, responsive landing page for ALBMC built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Modern UI Components** - Built with Radix UI and custom components
- **Smooth Animations** - Framer Motion for delightful interactions
- **Type Safety** - Full TypeScript support
- **Optimized Performance** - Fast loading and smooth scrolling
- **Accessible** - WCAG compliant UI components
- **Dark Mode** - Theme support with next-themes

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS Animations
- **Build Tool**: Vite
- **UI Library**: Radix UI
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Charts**: Recharts
- **Routing**: Wouter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/albmc-landing-page.git
cd albmc-landing-page

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run serve
```

### Type Checking

Run TypeScript compiler to check for type errors:

```bash
npm run typecheck
```

## Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, About, Services, etc.)
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
├── constants/           # Constants and configuration
├── pages/               # Page components
├── utils/               # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Available Sections

- **Hero** - Eye-catching hero section
- **About** - Company information
- **Services** - Service offerings
- **How It Works** - Process explanation
- **Statistics** - Key metrics and stats
- **Why Choose Us** - Unique value propositions
- **Clients** - Client testimonials
- **AMC** - AMC specific content
- **Who We Serve** - Target audience
- **Contact** - Contact form

## Configuration

Environment variables can be set via `.env.local`:

```env
VITE_API_URL=https://your-api.com
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For issues or questions, please create an issue in the repository.
