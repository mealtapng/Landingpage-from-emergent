# Mealtap Technologies - Landing Page PRD

## Original Problem Statement
Build a Mealtap Technologies landing page with Lagos-inspired hero, "Request Pitch Deck" and "Join the Waitlist" modal forms, Netlify form collection + MongoDB storage.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React icons + React Router
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Database**: MongoDB (collections: pitch_deck_requests, waitlist_requests)
- **Fonts**: Montserrat (headings), Poppins (body) via Google Fonts
- **Brand Colors**: Forest Green #2D5A27, Terracotta #C8622A, White #FFFFFF, Off White #F5F5F0

## What's Been Implemented (Jan 2026)

### Iteration 1 - MVP
- [x] Full landing page with 8 sections
- [x] Lagos-inspired AI-generated hero backgrounds
- [x] Two modal forms (Pitch Deck + Waitlist) with MongoDB + Netlify markup
- [x] Backend API endpoints

### Iteration 2 - Hero Image Update
- [x] Replaced busy market with clean Mealtap-branded delivery bike images

### Iteration 3 - Major Restructure (Client Corrections)
- [x] **Renamed** "Atolagbe Michael O." to "Chef Mike"
- [x] **Separated** investor data to dedicated `/investors` page
- [x] **Removed** Jumia/Bolt/Chowdeck competition text from public page
- [x] **Integrated** WhatsApp flow screenshots (12, 13, 14) into "How It Works" section
- [x] **Added** User Flow diagrams (Customer, Vendor, Rider) with tab switcher
- [x] **Added** Brand Showcase section (billboard, signage, delivery bag images)
- [x] **Updated** hero tagline to "Your favorite meals are just one chat away"
- [x] **Added** phone number 0908 112 2220
- [x] **Created** Investor Page with Problem, Market, Business Model, Team sections
- [x] **Updated** navigation with "For Investors" / "Public Page" links

### Page Structure
**Public Page (/):** Hero > How It Works (WhatsApp screenshots) > User Flows (tabs) > Brand Showcase > Team (Chef Mike) > CTA/Footer
**Investor Page (/investors):** Hero > Problem (stats) > Market > Business Model > Team > CTA

## Backlog
### P1
- Add real Mealtap SVG logo
- Email notifications on form submission
- SEO meta tags

### P2
- Floating WhatsApp button
- Analytics integration
- Video demo of ordering flow
