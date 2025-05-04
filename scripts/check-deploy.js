// Script para verificar que todo esté listo para el despliegue
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Verificar que el archivo vite.config.js tenga la configuración correcta
const viteConfigPath = path.join(rootDir, 'vite.config.js');
const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

if (!viteConfig.includes("base: '/kafe5aromas/'")) {
  console.error('❌ El archivo vite.config.js no tiene la configuración base correcta para GitHub Pages');
  process.exit(1);
}

// Verificar que el package.json tenga los scripts de despliegue
const packageJsonPath = path.join(rootDir, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.scripts.deploy || !packageJson.scripts.predeploy) {
  console.error('❌ El package.json no tiene los scripts de despliegue necesarios');
  process.exit(1);
}

// Verificar que exista el archivo .nojekyll
const nojekyllPath = path.join(rootDir, 'public', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.error('❌ No se encontró el archivo .nojekyll en la carpeta public');
  process.exit(1);
}

// Verificar que exista el archivo 404.html
const notFoundPath = path.join(rootDir, 'public', '404.html');
if (!fs.existsSync(notFoundPath)) {
  console.error('❌ No se encontró el archivo 404.html en la carpeta public');
  process.exit(1);
}

console.log('✅ Todo está listo para el despliegue en GitHub Pages');
console.log('Para desplegar, ejecuta: npm run deploy');
