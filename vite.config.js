import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno según el modo (development/production)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: '/', // Using root path

    // Configuración para manejar archivos estáticos
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Asegurarse de que los archivos grandes no sean procesados por Vite
      assetsInlineLimit: 4096, // 4kb - valor por defecto
      // Copiar archivos de public a dist
      copyPublicDir: true,
      // Configuración específica para Vercel
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            i18n: ['i18next', 'react-i18next']
          }
        }
      }
    },

    // Resolver alias para facilitar las importaciones
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@images': resolve(__dirname, 'public/images')
      }
    },

    // Configuración del servidor de desarrollo
    server: {
      port: 5173,
      strictPort: false,
      open: true
    },

    // Configuración para preview
    preview: {
      port: 4173,
      strictPort: false
    }
  }
})
