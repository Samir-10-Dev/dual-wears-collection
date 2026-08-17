// ============================================================
// ASSET PATH HELPER
// ------------------------------------------------------------
// Files in products.js and elsewhere reference images as
// root-relative paths, e.g. "/images/couple/couple-01-front.jpg".
// That's the simplest way to write them — but when this site is
// deployed under a GitHub Pages subpath (base: '/repo-name/' in
// vite.config.js), a hardcoded "/images/..." path resolves to the
// wrong URL and the image 404s.
//
// asset() rewrites any root-relative path to respect whatever
// `base` is configured in vite.config.js, in both dev and build.
// Always wrap image paths coming from data files with this.
// ============================================================

export function asset(path) {
  if (!path) return path
  const base = import.meta.env.BASE_URL || '/'
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
