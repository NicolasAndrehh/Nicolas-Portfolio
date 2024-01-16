import react from '@vitejs/plugin-react';
import compression from 'compression';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    outDir: 'build',
  },
  base: '/Nicolas-Portfolio',
  plugins: [react()],
  server: {
    middleware: [
      compression(),
    ],
  },
}));
