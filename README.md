# TestNodeNextJsSite

A sample Next.js 16 site built with the App Router, TypeScript, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section and navigation cards |
| `/about` | About page describing the site and tech stack |
| `/products` | Product catalog grid |
| `/contact` | Contact form (name, email, subject, message) |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | GET | Returns all products. Supports optional `?category=` filter. |
| `/api/contact` | POST | Accepts `{ name, email, subject, message }` and validates the submission. |

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Other Scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework (App Router)
- [React 19](https://react.dev) — UI library
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first styling

