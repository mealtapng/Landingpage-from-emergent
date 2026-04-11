# Mealtap Technologies - Landing Page PRD

## Original Problem Statement
Build a Mealtap Technologies landing page from scratch with:
- Lagos, Nigeria-inspired background pictures in hero section
- "Request Pitch Deck" button with modal popup form
- "Join the Waitlist" button with modal popup form
- All forms collected by Netlify (+ MongoDB storage for preview)
- Full landing page: Hero, Problem, Solution, How It Works, Market Stats, Business Model, Team, CTA/Footer

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React icons
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Database**: MongoDB (collections: pitch_deck_requests, waitlist_requests)
- **Fonts**: Montserrat (headings), Poppins (body) via Google Fonts
- **Brand Colors**: Forest Green #2D5A27, Terracotta #C8622A, White #FFFFFF, Off White #F5F5F0

## User Personas
1. **Investors** - Looking at the pitch deck for investment opportunities
2. **Strategic Partners** - Potential co-founders or tech partners
3. **Early Adopters** - Waitlist users wanting early access to Mealtap
4. **Press/Media** - Journalists covering Nigerian tech startups

## Core Requirements
- Hero section with Lagos-inspired AI-generated background imagery
- Two CTAs: "Request Pitch Deck" and "Join the Waitlist"
- Modal forms with specific fields per user specification
- MongoDB storage + Netlify form markup (data-netlify="true")
- Responsive design (desktop + mobile)
- Smooth scroll navigation between sections

## What's Been Implemented (Jan 2026)
- [x] Full landing page with 8 sections (Hero, Problem, Solution, How It Works, Market Stats, Business Model, Team, CTA/Footer)
- [x] Lagos-inspired AI-generated hero background images (v2: clean delivery bikes with MEALTAP branding, restaurant scenes)
- [x] Request Pitch Deck modal form (Full Name, Email, Phone, Organisation, Role, Reason, Interest, How did you hear)
- [x] Join Waitlist modal form (Full Name, Email, Phone, Company, Why Mealtap)
- [x] Backend API endpoints for form submissions (POST + GET for both forms)
- [x] MongoDB storage for all submissions
- [x] Netlify form attributes (data-netlify="true") for production deployment
- [x] Responsive navbar with mobile hamburger menu
- [x] Brand identity: Mealtap colors, Montserrat + Poppins typography
- [x] Animations and micro-interactions

## Backlog / Next Tasks
### P0 (Critical)
- None (all core features implemented)

### P1 (High Priority)
- Add real Mealtap logo (SVG with chat bubble + handlebars + steaming bowl)
- Add email notification when form is submitted
- SEO meta tags optimization

### P2 (Nice to Have)
- WhatsApp button linking to Mealtap's WhatsApp number
- Analytics tracking (Google Analytics / Mixpanel)
- A/B testing on CTA button copy
- Blog section for content marketing
- Video demo of WhatsApp ordering flow
- Testimonials/social proof section
