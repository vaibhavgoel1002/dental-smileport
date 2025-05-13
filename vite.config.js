import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './src',  // Ensure Vite is correctly pointed to the src directory if needed
  base: '/',      // Correct for Vercel deployment
});
