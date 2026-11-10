# Alok Social Profile (React + Vite)

A mobile-first link-in-bio website with a main profile page and an Instagram-style profile preview page. Includes external links for portfolio, GitHub, LinkedIn, YouTube, Behance, email and WhatsApp.

## Run locally

1. Install Node.js (18+ recommended).
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
npm run preview
```

Upload the generated `dist` folder to Vercel, Netlify or another static host. For Vercel, choose the Vite framework preset and use `npm run build` with output directory `dist`.

## Customize your details

Edit `src/App.jsx`:
- `profile.photo`: replace with your own portrait URL or `/images/profile.jpg` after adding it to `public/images/`.
- `profile.instagram`: replace with your real Instagram profile URL.
- `profile.instagram` and social URLs: update all external links.
- `posts`: replace the six image URLs with your own post images.
- Stats (`128`, `4,832`, `237`) are placeholders. Enter your actual public counts; they are not fetched from Instagram.

## Notes

This is a front-end profile/landing page, not an Instagram clone and does not log into Instagram or fetch private analytics. The Follow button opens the Instagram URL you configure. External images currently use Unsplash URLs and require internet access.
