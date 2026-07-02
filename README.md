# Matrix Industries Web Application

This is a full-stack Next.js web application for Matrix Industries, a pioneering company in self-powered sensor and energy-harvesting technologies ("Self-Powered Intelligence Everywhere").

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Lucide React (Icons).
- **Backend**: Next.js Route Handlers (Node.js API).
- **Validation**: Zod (schema validation for contact form).
- **Storage**: Local file-system JSON storage (`data/submissions.json`).

## Prerequisites
- Node.js version >= 18.x
- npm, yarn, pnpm, or bun

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Open the Application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Features & Architecture

### Frontend
The user interface is designed with a dark, minimal, industrial-tech aesthetic utilizing Tailwind CSS. It is fully responsive and features:
- **Hero Banner:** Emphasizing the brand positioning with strong CTA's.
- **Services:** Highlighting core product lines (Perceptive, Proximity, Prometheus).
- **Value Framework:** A visual layout illustrating the "Sense -> Analyze -> Optimize" data loop.
- **Client Testimonials:** Demonstrating client success in a structured grid layout.
- **Contact Form:** Client-side validation, loading/success/error states, and honeypot bot protection.

### Backend (API Routes)
The backend leverages Next.js API Routes (`app/api/contact/route.ts`) acting as a Node.js server to handle form submissions securely. Features include:
- **Rate Limiting:** Basic in-memory rate limiting based on IP to prevent abuse.
- **Validation:** Strict server-side validation using Zod.
- **Spam Protection:** Silent drop of submissions filling out the hidden honeypot field.
- **Storage:** Appends successful submissions to `data/submissions.json`. 

## Deployment
This project is configured out-of-the-box for [Vercel](https://vercel.com/new).

**Note on Vercel Data Storage:**
Because Vercel uses ephemeral, read-only file systems in serverless functions, the local `data/submissions.json` approach is designed for local development or traditional VPS environments. Before deploying to production on Vercel, replace the `fs.writeFile` logic in `app/api/contact/route.ts` with a persistent datastore such as Vercel KV, PostgreSQL, or MongoDB.
