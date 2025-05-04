import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Using root path

  // Configuración para manejar archivos estáticos
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Asegurarse de que los archivos grandes no sean procesados por Vite
    assetsInlineLimit: 0,
    // Copiar archivos de public a dist
    copyPublicDir: true
  },

  // Resolver alias para facilitar las importaciones
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@images': resolve(__dirname, 'public/images')
    }
  }
})
