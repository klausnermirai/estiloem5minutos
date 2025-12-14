import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Garante que process.env.API_KEY não quebre o build, embora Vite use import.meta.env
    'process.env': process.env
  }
});