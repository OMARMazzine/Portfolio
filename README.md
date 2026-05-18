# Omar Mazzine - AI & Data Science Portfolio

A modern, responsive portfolio website built with Next.js, React, TailwindCSS, and Framer Motion. Features a dark theme with elegant animations, glassmorphism effects, and a professional design optimized for recruiters.

![Portfolio Preview](./public/preview.png)

## Features

- **Modern Design**: Dark theme with blue accents and glassmorphism effects
- **Responsive**: Fully responsive on mobile, tablet, and desktop
- **Animated**: Smooth animations with Framer Motion
- **Interactive**: Particle background, skill progress bars, expandable project cards
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: ARIA labels, proper heading structure, keyboard navigation
- **Contact Form**: Ready for email integration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main portfolio page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── particle-background.tsx
│   ├── projects-section.tsx
│   └── skills-section.tsx
├── public/
│   ├── cv.pdf                    # Your CV (add this file)
│   └── omar.png                  # Your photo (add this file)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/OMARMazzine/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Add your assets**

Place your files in the `public/` directory:

```
public/
├── cv.pdf          # Your CV/Resume PDF
├── omar.png        # Your professional photo
└── projects/       # Project screenshots (optional)
    ├── traffic-sign.png
    └── logo-detection.png
```

4. **Start the development server**

```bash
pnpm dev
# or
npm run dev
```

5. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Environment Variables

Create a `.env.local` file for production email integration:

```env
# Email Service (e.g., Resend)
RESEND_API_KEY=your_resend_api_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Email Integration

To enable the contact form to send emails, you can integrate with services like:

- **Resend** (recommended): [resend.com](https://resend.com)
- **SendGrid**: [sendgrid.com](https://sendgrid.com)
- **Mailgun**: [mailgun.com](https://mailgun.com)

See `app/api/contact/route.ts` for implementation examples.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/hero-section.tsx`): Update name, title, description
2. **About Section** (`components/about-section.tsx`): Update bio and highlights
3. **Skills Section** (`components/skills-section.tsx`): Update skill categories and levels
4. **Projects Section** (`components/projects-section.tsx`): Update project details
5. **Education Section** (`components/education-section.tsx`): Update academic info
6. **Experience Section** (`components/experience-section.tsx`): Update work experience
7. **Contact Section** (`components/contact-section.tsx`): Update contact details

### Theme Customization

Edit `app/globals.css` to customize colors:

```css
:root {
  --primary: oklch(0.65 0.18 250);     /* Blue accent */
  --background: oklch(0.08 0.01 250);  /* Dark background */
  /* ... other tokens */
}
```

### SEO

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  // ... other metadata
}
```

## Git Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote origin
git remote add origin https://github.com/OMARMazzine/portfolio.git

# Push to GitHub
git push -u origin main
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Omar Mazzine**  
AI & Data Science Student at ENSIASD

- Email: omarmazzine46@gmail.com
- LinkedIn: [omar-mazzine-b49344298](https://www.linkedin.com/in/omar-mazzine-b49344298/)
- GitHub: [OMARMazzine](https://github.com/OMARMazzine)

---

Built with ❤️ using Next.js and TailwindCSS
