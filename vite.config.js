import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ============================================================
// GITHUB PAGES CONFIGURATION
// ------------------------------------------------------------
// Replace "dual-wears-collection" below with the EXACT name of
// the GitHub repository you create for this project.
//
// Example: if your repo URL is
//   https://github.com/yourname/my-shop
// then base should be:
//   base: '/my-shop/'
//
// If you deploy to a USER/ORG page (repo named yourname.github.io),
// set base: '/' instead.
// ============================================================
export default defineConfig({
  plugins: [react()],
  base: '/dual-wears-collection/',
})
