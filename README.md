# DUAL WEARS COLLECTION

A premium, animated, frontend-only fashion e-commerce showcase built with **React + Vite + Framer Motion**, deployable straight to **GitHub Pages**. No backend, no database, no login — everything lives in the frontend.

---

## 1. What's inside

```
dual-wears/
├── .github/workflows/deploy.yml   ← auto-deploy to GitHub Pages on every push
├── public/
│   └── images/
│       ├── hero/                  ← hero section images
│       ├── about/                 ← about section image
│       ├── couple/                ← 6 couple products (front + back each)
│       ├── unisex/                ← 6 unisex products (front + back each)
│       └── boys/                  ← 6 boys products (front + back each)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── SectionTitle.jsx
│   │   ├── CollectionSection.jsx / .css
│   │   ├── ProductCard.jsx / .css
│   │   ├── ProductGrid.jsx / .css
│   │   ├── SocialIcons.jsx / .css
│   │   ├── About.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx / .css
│   ├── data/
│   │   └── products.js            ← ALL 18 products live here
│   ├── config/
│   │   └── social.js              ← Instagram / TikTok usernames live here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  ← design tokens (colors, fonts, buttons)
├── index.html
├── vite.config.js                 ← GitHub Pages `base` config
├── package.json
└── .gitignore
```

**Placeholder images are already generated** for all 18 products (front + back), the hero, and the about section, so the site works and looks complete the moment you install it. Swap them for your real photography whenever you're ready — see step 5 below.

---

## 2. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

---

## 3. Edit prices, names, and descriptions

Open **`src/data/products.js`**. It's a plain JavaScript object with three arrays: `couple`, `unisex`, `boys` — 6 products each (18 total). Example:

```js
{
  id: 1,
  name: "Couple Set 01",
  price: 2499,          // ← change this
  description: "Premium matching couple set...",  // ← change this
  images: [
    "/images/couple/couple-01-front.jpg",
    "/images/couple/couple-01-back.jpg"
  ],
  sizes: ["S", "M", "L", "XL"],
  collection: "Couple"
}
```

Just save the file — the price, name, description, sizes and images update everywhere on the site automatically (product cards, product detail page). You never touch any component file.

To **add a new product**, copy one of the objects inside the relevant array, give it a new unique `id`, and fill in your details. To **remove one**, delete its object. The grid layout reflows automatically for any number of products.

---

## 4. Change your Instagram & TikTok usernames

Open **`src/config/social.js`**:

```js
const social = {
  instagramUsername: 'YOUR_USERNAME',
  tiktokUsername: 'YOUR_USERNAME',
}
```

Replace `YOUR_USERNAME` with your real handles. This single file powers every Instagram/TikTok icon across the whole site (Couple, Unisex, Boys sections and the footer).

---

## 5. Add your own product photos

1. Take/prepare your photos (front + back recommended, portrait orientation works best — the cards use a 4:5 ratio).
2. Replace the placeholder files inside `public/images/couple/`, `public/images/unisex/`, `public/images/boys/`, `public/images/hero/`, and `public/images/about/` **using the exact same filenames** (e.g. `couple-01-front.jpg`), and they'll show up automatically.
3. Alternatively, use your own filenames and update the matching `images: [...]` paths in `src/data/products.js`.
4. Any image format works (`.jpg`, `.jpeg`, `.png`, `.webp`) — just make sure the extension in the path matches the actual file.

---

## 6. Build for production

```bash
npm run build
```

This creates an optimized `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

---

## 7. Deploy to GitHub Pages

### Step A — Set your repository name in `vite.config.js`

Open `vite.config.js` and set `base` to match your **exact GitHub repository name**:

```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',   // ← change this
})
```

- If your repo is `https://github.com/yourname/dual-wears-collection` → `base: '/dual-wears-collection/'`
- If you're deploying to a user/org page (repo literally named `yourname.github.io`) → `base: '/'`

### Step B — Push the project to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Dual Wears Collection"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step C — Turn on GitHub Pages (automatic deploys)

This project already includes `.github/workflows/deploy.yml`, which builds and deploys the site automatically every time you push to `main`.

1. Go to your repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. After the workflow finishes (~1 minute), your site is live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Alternative: manual deploy with `gh-pages`

If you'd rather deploy manually instead of using GitHub Actions:

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to a `gh-pages` branch (via the included `gh-pages` package). Then in **Settings → Pages**, set the source to the `gh-pages` branch.

---

## 8. Updating the live website after changes

Every time you want to publish a change (new prices, new photos, new products, new usernames):

```bash
git add .
git commit -m "Update products"
git push
```

If you're using the included GitHub Actions workflow, that's it — the site rebuilds and redeploys automatically. If you're using the manual method, also run `npm run deploy` after pushing.

---

## 9. Notes on routing

The app uses `HashRouter` (URLs look like `#/product/couple/1`). This is intentional: GitHub Pages serves static files only and can't rewrite deep links to `index.html`, so hash-based routing guarantees product detail pages always work correctly on refresh and direct link sharing.

---

## 10. Quality checklist

- ✅ 18 products total — exactly 6 Couple, 6 Unisex, 6 Boys
- ✅ Product detail pages with front/back image switching
- ✅ Scroll-triggered animations (hero, section titles, staggered product cards)
- ✅ Hover animations (cards, buttons, nav links, social icons)
- ✅ Sticky navbar with scroll shrink + blur + mobile hamburger menu
- ✅ Instagram + TikTok icons in Couple, Unisex, Boys sections and footer
- ✅ Fully responsive: desktop / tablet / mobile
- ✅ GitHub Pages ready — no backend, no database, no auth
- ✅ All content editable from `src/data/products.js` and `src/config/social.js`
