import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorios de origen y destino
const sourceDir = path.join(__dirname, 'src', 'assets', 'images');
const targetDir = path.join(__dirname, 'public', 'images');

// Crear el directorio de destino si no existe
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Directorio creado: ${targetDir}`);
}

// Función para copiar archivos
function copyFiles() {
  try {
    // Leer todos los archivos del directorio de origen
    const files = fs.readdirSync(sourceDir);

    // Copiar cada archivo al directorio de destino
    files.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      // Verificar si es un archivo (no un directorio)
      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Archivo copiado: ${file}`);
      }
    });

    console.log('Todos los archivos han sido copiados correctamente.');
  } catch (error) {
    console.error('Error al copiar archivos:', error);
  }
}

// Ejecutar la función
copyFiles();
