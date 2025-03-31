// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';
const a = 'https://shiv7.pagekite.me/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    proxy: command === 'serve' ? {
      '/upload': {
        target: a,
        changeOrigin: true,
        secure: false
      },
      '/create-payment': {
        target: a,
        changeOrigin: true,
        secure: false
      },
      '/verify-payment': {
        target: a,
        changeOrigin: true,
        secure: false
      }
    } : undefined
  }
}));