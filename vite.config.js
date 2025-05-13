import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export Vite config
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure the base is correct for Vercel deployment
  build: {
    outDir: 'dist',  // Vercel expects the output to be in the "dist" folder
  },
  server: {
    open: true, // Automatically open the app in the browser when running dev
  },
});
