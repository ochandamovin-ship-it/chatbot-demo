# Kenya College Website

A modern, responsive college marketing website built with Next.js 15 and React 18. Features an integrated AI chatbot powered by Google Dialogflow for prospective student inquiries.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a complete college recruitment and student engagement platform for "Kenya College." It showcases academic programs, admissions information, campus details, and includes an AI chatbot for answering prospective student questions.

### Key Pages

- **Home** - Hero section, statistics, featured programs, testimonials
- **About** - Mission, vision, core values, institutional history
- **Programs** - 100+ programs across 6 categories with filtering
- **Admissions** - Application process, requirements, important dates
- **Contact** - Contact form with validation, contact information

## Tech Stack

### Core Framework
- **Next.js 15.1.4** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **tailwindcss-animate** - Animation utilities
- **@tailwindcss/typography** - Rich text styling

### UI Components
- **shadcn/ui** - 50+ accessible components built on Radix UI
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### State & Data
- **@tanstack/react-query** - Server state management
- **next-themes** - Dark/light mode

### External Services
- **Google Dialogflow** - AI chatbot

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chatbot-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
chatbot-demo/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header, Footer, Providers)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and CSS variables
│   ├── providers.tsx            # Context providers
│   ├── about/page.tsx           # About page
│   ├── programs/page.tsx        # Programs listing
│   ├── admissions/page.tsx      # Admissions info
│   └── contact/page.tsx         # Contact form
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section
│   ├── ContactForm.tsx          # Contact form with validation
│   ├── DialogflowChatbot.tsx    # AI chatbot integration
│   ├── ProgramCard.tsx          # Program display card
│   ├── Stats.tsx                # Statistics section
│   ├── TestimonialCard.tsx      # Testimonial card
│   └── ui/                      # shadcn/ui components (50+)
├── lib/                          # Utilities
│   ├── utils.ts                 # Tailwind class utilities
│   └── queryClient.ts           # React Query config
├── hooks/                        # Custom hooks
│   ├── use-toast.ts             # Toast notifications
│   └── use-mobile.tsx           # Mobile detection
├── public/                       # Static assets
│   └── *.png                    # Images (hero, testimonials)
├── tailwind.config.ts           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── components.json              # shadcn/ui configuration
└── design_guidelines.md         # Design system documentation
```

## Pages

### Home (`/`)
- Full-screen hero with call-to-action buttons
- Statistics bar (15,000+ students, 100+ programs, 95% success rate, 50+ countries)
- Featured programs grid
- Student testimonials
- Benefits section

### About (`/about`)
- College mission and vision statements
- Core values (Excellence, Integrity, Community)
- Historical timeline (1970-2025)

### Programs (`/programs`)
- Category filter buttons (Technology, Business, Health, Engineering, Arts, Sciences)
- Program cards with icons, descriptions, and "Learn More" links
- 100+ programs available

### Admissions (`/admissions`)
- 4-step application process visualization
- Requirements checklist
- Important dates (September and January intakes)
- Campus visit scheduling

### Contact (`/contact`)
- Contact form (name, email, phone, program interest, message)
- Zod validation with error messages
- Contact information cards
- Map placeholder

## Features

### AI Chatbot
Google Dialogflow integration providing 24/7 support for prospective students. The chatbot widget appears in the bottom-right corner on all pages.

### Dark Mode
Full dark/light theme support with system preference detection. Toggle available in the header.

### Responsive Design
Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px, and 1536px.

### Form Validation
Contact form uses React Hook Form with Zod schemas for runtime validation and helpful error messages.

### Toast Notifications
Custom toast system for user feedback on form submissions and actions.

## Configuration

### Tailwind (`tailwind.config.ts`)
- CSS variable-based theming
- Custom color palette for light/dark modes
- Animation utilities
- Typography plugin

### Next.js (`next.config.mjs`)
- Standalone output for deployment
- Configured for static and server-side rendering

### shadcn/ui (`components.json`)
- "new-york" style preset
- Neutral base color
- Path aliases configured

## Environment Variables

Currently, the Dialogflow agent ID is hardcoded. For production, consider:

```env
NEXT_PUBLIC_DIALOGFLOW_AGENT_ID=your-agent-id
```

## Deployment

The project is configured with standalone output, suitable for:

- **Vercel** - Import repository, auto-detects Next.js
- **Docker** - Use standalone output in container
- **Node.js hosting** - Run `npm run build && npm run start`

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Future Enhancements

- [ ] API routes for contact form email sending
- [ ] Database integration for storing submissions
- [ ] Unit and E2E testing
- [ ] Google Analytics integration
- [ ] Functional map on contact page
- [ ] SEO metadata for all pages

## License

Add a LICENSE file if you intend to open source this project.

---

Built with Next.js 15 and React 18.
