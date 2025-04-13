import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/delegate-election-simulator/', // Esto es necesario si vas a usar un subdirectorio
  plugins: [react()],
})
