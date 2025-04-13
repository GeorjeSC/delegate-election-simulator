import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de la base URL
export default defineConfig({
  base: '/delegate-election-simulator/', // Base URL configurada aquí
  plugins: [react()],
});
