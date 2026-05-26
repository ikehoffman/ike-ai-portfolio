# Ike Hoffman Portfolio

Personal portfolio site built with React + Vite + Tailwind CSS.

---

## Quick start: StackBlitz (recommended first step)

1. Go to **https://stackblitz.com**
2. Create a free account (separate from your business Vercel)
3. Click **"Create new project"** in the top right
4. You'll see templates — skip them. Instead, click the **"Upload project"** button (cloud icon) or drag this entire unzipped folder onto the page
5. StackBlitz will auto-detect it's a Vite project, run `npm install`, and start the dev server
6. You'll see the live site in the right-hand preview pane within about 20 seconds

That's it. You now have a live, editable portfolio with instant preview.

---

## How to iterate

### Edit copy
- Open `src/IkeHoffmanPortfolio.jsx`
- The project data lives in two arrays near the top: `professional` and `personal`
- Edit any field (title, tagline, description, problem, built, details) — the preview updates instantly on save

### Add screenshots for other projects
1. Drop your image file into the `public/images/` folder in StackBlitz (right-click the folder → "Upload files")
2. In `IkeHoffmanPortfolio.jsx`, find the `expand.images` array for the project you want
3. Add an entry:
   ```js
   images: [
     { src: "/images/your-filename.jpg", caption: "Describe what this shows." },
   ],
   ```
4. Save. The image appears in the expanded card view.

### Rules of thumb for screenshots
- Use JPG for photos/screenshots, PNG for things with transparency
- Aim for 1600px wide or less — bigger is just wasted bytes
- Filenames: lowercase, hyphens, no spaces (e.g. `dashboard-overview.jpg`)

---

## When you're ready to ship it

### Option A — Deploy from StackBlitz
1. In StackBlitz, click **"Connect Repository"** to push to GitHub
2. Go to **vercel.com**, sign up with your personal email (separate from biz account)
3. Click "Add New Project" → import the GitHub repo
4. Vercel auto-detects Vite, click Deploy, done
5. You get a URL like `ike-portfolio.vercel.app` within about 60 seconds

### Option B — Buy a custom domain
- Namecheap, Porkbun, or Cloudflare Registrar — all around $10-15/year for a .com
- `ikehoffman.com` is the obvious choice if available
- In Vercel's project settings → Domains, add your custom domain and follow the DNS instructions

---

## Project structure

```
ike-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── rent-roll-original.jpg
│       ├── rent-roll-summary.jpg
│       └── rent-roll-charts.jpg
├── src/
│   ├── App.jsx                      # Wraps the portfolio
│   ├── IkeHoffmanPortfolio.jsx      # The whole site — edit here
│   ├── index.css                    # Tailwind entry
│   └── main.jsx                     # React entry
├── index.html                       # HTML shell + meta tags
├── package.json                     # Dependencies
├── vite.config.js                   # Build config
├── tailwind.config.js               # Tailwind config
└── postcss.config.js                # CSS processing
```

The only file you'll ever need to edit for normal changes is **`src/IkeHoffmanPortfolio.jsx`**.

---

## Local development (optional — only if you want to run on your own machine)

Requires Node.js 18+ installed.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit files, the browser updates instantly.

To build for production:
```bash
npm run build
```

Output goes to `dist/` — Vercel handles this automatically on deploy.

---

## Tech stack

- **React 18** — component framework
- **Vite** — dev server + build tool
- **Tailwind CSS** — utility classes
- Fonts via Google Fonts CDN (Fraunces, Geist, JetBrains Mono)

No backend, no database, no analytics, no tracking. Just a static site.
