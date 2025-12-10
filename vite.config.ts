// @ts-nocheck
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Used mainly for Ladle dev fallback; Ladle manages most config internally.
export default defineConfig({
  plugins: [react()]
});
