import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  eslint:{
    ignoreDuringBuilds: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three'] 
        }
      }
    },
    chunkSizeWarningLimit: 1000 
  }
});
