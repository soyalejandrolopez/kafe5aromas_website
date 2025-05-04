const fs = require('fs');
const path = require('path');

// Función para verificar si un archivo existe
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Función para crear un archivo .env.production
function createEnvFile() {
  const envContent = `
# Producción
VITE_APP_BASE_URL=/
VITE_APP_API_URL=https://api.example.com
VITE_APP_ENV=production
`;

  fs.writeFileSync('.env.production', envContent.trim());
  console.log('✅ Archivo .env.production creado');
}

// Función para verificar y actualizar el vite.config.js
function updateViteConfig() {
  const viteConfigPath = path.join(__dirname, 'vite.config.js');
  
  if (fileExists(viteConfigPath)) {
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Verificar si ya tiene configuración de base
    if (!viteConfig.includes('base:')) {
      // Añadir configuración de base
      viteConfig = viteConfig.replace(
        'export default defineConfig({',
        'export default defineConfig({\n  base: \'/\',');
      
      fs.writeFileSync(viteConfigPath, viteConfig);
      console.log('✅ vite.config.js actualizado con base: \'/\'');
    } else {
      console.log('ℹ️ vite.config.js ya tiene configuración de base');
    }
  } else {
    console.log('⚠️ No se encontró vite.config.js');
  }
}

// Función para crear un archivo README.md para GitHub
function createReadme() {
  const readmeContent = `# Kafe 5 Aromas Website

A professional website for Kafe 5 Aromas coffee company, showcasing their mission, values, vision, and history.

## Features

- Bilingual (English/Spanish) content
- Professional animations and elegant presentation
- Responsive design for both mobile and web views
- 3D and aerial design concepts
- Containerized content with proper padding

## Technologies Used

- React
- Vite
- React Router
- i18next for translations
- AOS (Animate On Scroll) for animations
- React Icons

## Deployment

This project is deployed on Vercel.

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## License

All rights reserved.
`;

  fs.writeFileSync('README.md', readmeContent);
  console.log('✅ README.md creado para GitHub');
}

// Ejecutar todas las funciones
console.log('🚀 Preparando el proyecto para producción...');
createEnvFile();
updateViteConfig();
createReadme();
console.log('✅ Proyecto listo para producción');
console.log('');
console.log('Próximos pasos:');
console.log('1. Ejecuta "npm run build" para construir el proyecto');
console.log('2. Sube el proyecto a GitHub');
console.log('3. Configura el despliegue en Vercel');
