# 🖥️ Embedded Systems Engineer Portfolio

A production-ready personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** — designed for embedded systems engineers and developers.

**Live demo aesthetic:** Dark terminal theme with green accent, JetBrains Mono typography, animated hero with typing effect, project cards with category filters, skills bars, contact form, and dark/light mode toggle.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── resume.pdf                  # Your resume PDF (add yours here)
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (Navbar + Footer)
│   │   ├── page.tsx                # Home page
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/
│   │   │   └── page.tsx            # About Me page
│   │   ├── projects/
│   │   │   └── page.tsx            # Projects page with filter
│   │   ├── resume/
│   │   │   └── page.tsx            # Resume / CV page
│   │   └── contact/
│   │       └── page.tsx            # Contact page with form
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation with mobile menu + theme toggle
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   └── ThemeProvider.tsx   # Dark/light mode context
│   │   │
│   │   ├── sections/               # Full-width page sections (used in Home)
│   │   │   ├── HeroSection.tsx     # Hero with typing animation + terminal card
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── SkillsPreview.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   └── ui/                     # Reusable UI components
│   │       ├── ProjectCard.tsx     # Project card with tech tags + GitHub link
│   │       ├── SkillBar.tsx        # Animated skill progress bar
│   │       └── SectionHeading.tsx  # Consistent section headings
│   │
│   ├── hooks/
│   │   └── useTheme.ts             # Theme toggle hook
│   │
│   ├── lib/
│   │   ├── data.ts                 # ⭐ ALL your content lives here
│   │   ├── types.ts                # TypeScript interfaces
│   │   └── utils.ts                # cn() utility
│   │
│   └── styles/
│       └── globals.css             # Global styles + CSS variables + fonts
│
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Clone or download this project

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Customize your content

**All personal data is centralized in `src/lib/data.ts`:**

```ts
// Update siteConfig with your info
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline here",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  githubUsername: "yourusername",
  location: "Your City, Country",
  available: true,  // shows "Available for work" badge
};
```

Then update:
- `projects[]` — add your own projects
- `skills[]` — update skill names and proficiency levels
- `experience[]` — your work history
- `education[]` — your academic background

### 4. Add your resume PDF

Place your resume at `public/resume.pdf`.

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

### Option A: Vercel (Recommended — easiest)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → import your repo
4. Leave all defaults → click **Deploy**

That's it. Vercel auto-detects Next.js and deploys automatically on every push.

**Custom domain:** In Vercel dashboard → Settings → Domains → add yours.

```bash
# Or deploy via CLI
npm install -g vercel
vercel
```

### Option B: GitHub Pages (static export)

Add to `next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repo-name',  // if not at root domain
};
```

Build and deploy:

```bash
npm run build
# The 'out' directory is your static site

# Deploy via gh-pages
npm install -D gh-pages
npx gh-pages -d out
```

Or use the GitHub Actions workflow below:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Option C: Self-hosted (VPS/Docker)

```bash
npm run build
npm start
# Runs on port 3000
```

With Docker:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## ✉️ Contact Form Setup

The contact form is wired up but sends to a mock endpoint. To make it real:

### With Formspree (free tier, no backend needed):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint URL
3. In `src/app/contact/page.tsx`, update `handleSubmit`:

```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("success");
else setStatus("error");
```

### With Resend + Next.js API route:

Create `src/app/api/contact/route.ts`:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: "portfolio@yourdomain.com",
    to: "you@email.com",
    subject: `Portfolio: ${body.subject}`,
    text: `From: ${body.name} (${body.email})\n\n${body.message}`,
  });
  return Response.json({ ok: true });
}
```

---

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent: #00ff88;   /* Change to your brand color */
}
```

### Fonts

Fonts are loaded from Google Fonts in `globals.css`. Replace with your preferred fonts and update `tailwind.config.ts`.

### Adding pages

Create `src/app/your-page/page.tsx` — Next.js App Router auto-registers it as a route. Add it to `navItems` in `src/lib/data.ts`.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | React framework + App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations + transitions |
| Lucide React | Icons |
| Google Fonts | JetBrains Mono + DM Sans + Space Grotesk |

---

## 📝 License

MIT — use freely for your own portfolio.
