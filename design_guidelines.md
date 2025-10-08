# Design Guidelines: Kenya College Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern educational institutions (MIT, Stanford, University of Nairobi) combined with clean, professional service websites. Focus on credibility, accessibility, and student engagement.

**Core Principles:**
- Academic credibility through clean, structured layouts
- Vibrant but professional color palette reflecting African educational excellence
- Clear information hierarchy for prospective students
- Mobile-first responsive design for widespread accessibility

## Color Palette

**Primary Colors:**
- Primary Blue: 210 70% 45% (Trust, academic authority)
- Deep Navy: 220 50% 20% (Headers, text)
- Warm Accent: 25 85% 55% (CTAs, highlights - African sunset inspiration)

**Supporting Colors:**
- Success Green: 145 60% 45% (Acceptance, positive actions)
- Light Background: 210 15% 97%
- Dark Mode Primary: 210 30% 15%
- Dark Mode Surface: 220 25% 18%

## Typography

**Font Stack:**
- Headlines: Inter (700, 600) - Modern, professional
- Body: Inter (400, 500) - Excellent readability
- Accent/Stats: Inter (800) - Bold impact

**Scale:**
- Hero Headline: text-5xl lg:text-7xl
- Section Titles: text-3xl lg:text-5xl
- Subsections: text-2xl lg:text-3xl
- Body: text-base lg:text-lg
- Small: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 lg:py-24
- Card padding: p-6 lg:p-8
- Element gaps: gap-6 lg:gap-8

**Container Widths:**
- Full sections: max-w-7xl mx-auto
- Content areas: max-w-6xl
- Text content: max-w-4xl

## Component Library

### Navigation
- Sticky header with college logo, main navigation, "Apply Now" CTA
- Mobile: Hamburger menu with slide-in drawer
- Desktop: Horizontal nav with hover indicators

### Hero Section (Homepage)
- Large background image: Campus scene with students (80vh)
- Overlay gradient: from-navy/80 to-navy/40
- Centered content with headline, subheading, dual CTAs
- Stats bar below hero: Student count, programs, success rate (4-column grid)

### Program Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card design: White background, border, hover lift effect
- Content: Icon/image, program name, brief description, "Learn More" link

### Features/Benefits Section
- Alternating image-text rows
- Icons for quick scanning
- 2-column layout on desktop, stacked mobile

### Testimonials
- Card-based design with student photos
- 2-column grid on desktop
- Quote, name, program, graduation year

### Admissions Section
- Step-by-step timeline/process visualization
- Numbered cards with clear progression
- Prominent application deadline callout

### Contact Form
- 2-column split: Form left, contact info/map right
- Fields: Name, Email, Phone, Program Interest, Message
- Clear submit button

### Footer
- 4-column layout: About, Quick Links, Programs, Connect
- Social media icons
- Newsletter signup
- Copyright and legal links

## Images Strategy

**Required Images:**
1. **Hero Image:** Wide campus shot with students engaged in activities, bright and welcoming (main homepage)
2. **Program Section:** 3-4 images of different academic settings (labs, libraries, classrooms)
3. **Campus Life:** Students collaborating, diverse activities
4. **Testimonial Photos:** 4-6 student headshots
5. **About Page:** Historical college building or ceremony photo

## Chatbot Integration
- Fixed position bottom-right
- Dialogflow messenger with custom color scheme matching primary blue
- Subtle pulse animation on initial page load
- z-index above content but below modals

## Accessibility & Dark Mode
- Full dark mode support across all pages
- WCAG AA contrast ratios
- Form inputs styled consistently in both modes
- Focus states clearly visible
- Semantic HTML throughout

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Page-Specific Notes

**Homepage:** 6-8 sections including hero, featured programs, why choose us, testimonials, stats, campus life, CTA
**About:** Mission/vision cards, history timeline, leadership team grid
**Programs:** Filterable program grid, category tabs, detailed program cards
**Admissions:** Process timeline, requirements checklist, application form embed
**Contact:** Google Maps embed, contact details, inquiry form, office hours

## Animation Guidelines
Minimal, purposeful animations only:
- Card hover: subtle lift (translateY -4px)
- Button hover: scale(1.02)
- Page transitions: fade-in for sections on scroll (intersection observer)
- No autoplay carousels or distracting effects