const fs = require('fs');
const path = require('path');

// Directorios de origen y destino
const sourceDir = path.join(__dirname, 'src', 'assets', 'images');
const targetDir = path.join(__dirname, 'public', 'static', 'images');

// Crear el directorio de destino si no existe
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Directorio creado: ${targetDir}`);
}

// Función para copiar imágenes
function copyImages() {
  try {
    // Sharp no está disponible, las imágenes se copiarán sin optimizar
    console.log('Las imágenes se copiarán sin optimizar.');

    // Leer todos los archivos del directorio de origen
    const files = fs.readdirSync(sourceDir);

    // Mapeo de nombres de archivo a nombres más descriptivos
    const fileMapping = {
      'DJI_20240523145421_0001_D.JPG': 'farm1.jpg',
      'DJI_20240523145441_0002_D.JPG': 'farm2.jpg',
      'DJI_20240523145450_0003_D.JPG': 'farm3.jpg',
      'DJI_20240523145605_0004_D.JPG': 'farm4.jpg',
      'DJI_20240523145653_0005_D.JPG': 'farm5.jpg',
      'DJI_20240523145657_0006_D.JPG': 'farm6.jpg',
      'DJI_20240523145718_0007_D.JPG': 'farm7.jpg',
      'DJI_20240523145733_0008_D.JPG': 'farm8.jpg',
      'DJI_20240523145807_0009_D.JPG': 'farm9.jpg',
      'DJI_20240523145810_0010_D.JPG': 'farm10.jpg',
      'DJI_20240523145851_0011_D.JPG': 'farm11.jpg',
      'DJI_20240523150913_0015_D.JPG': 'farm12.jpg',
      'DJI_20240523151015_0017_D.JPG': 'farm13.jpg',
      'logofinal.png': 'logo.png'
    };

    // Crear imágenes adicionales para las diferentes secciones
    const additionalImages = [
      'home-hero.jpg',
      'home-about.jpg',
      'home-beans.jpg',
      'home-brewing.jpg',
      'mission-hero.jpg',
      'mission-farmers.jpg',
      'mission-processing.jpg',
      'mission-sustainability.jpg',
      'values-hero.jpg',
      'values-quality.jpg',
      'values-community.jpg',
      'values-innovation.jpg',
      'vision-hero.jpg',
      'vision-future.jpg',
      'vision-experience.jpg',
      'vision-growth.jpg',
      'about-hero.jpg',
      'about-team.jpg',
      'about-process.jpg',
      'about-expertise.jpg',
      'history-hero.jpg',
      'history-origins.jpg',
      'history-tradition.jpg',
      'history-evolution.jpg',
      'contact-hero.jpg',
      'contact-location.jpg',
      'contact-team.jpg',
      'general-beans.jpg',
      'general-cup.jpg',
      'general-farm.jpg',
      'general-farmers.jpg',
      'general-brewing.jpg'
    ];

    // Crear un placeholder para todas las imágenes
    const placeholderPath = path.join(targetDir, 'placeholder.jpg');
    if (!fs.existsSync(placeholderPath)) {
      // Crear un archivo vacío como placeholder
      fs.writeFileSync(placeholderPath, '');
      console.log('Archivo placeholder vacío creado');
    }

    // Procesar cada archivo del directorio de origen
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);

      // Verificar si es un archivo (no un directorio)
      if (fs.statSync(sourcePath).isFile()) {
        // Obtener el nombre de destino mapeado o usar el original
        const targetFileName = fileMapping[file] || file;
        const targetPath = path.join(targetDir, targetFileName);

        // Copiar el archivo directamente
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Archivo copiado: ${file} -> ${targetFileName}`);
      }
    }

    // Crear imágenes adicionales copiando las existentes
    if (files.length > 0) {
      // Usar la primera imagen como base para las adicionales
      const baseImagePath = path.join(targetDir, 'farm1.jpg');

      if (fs.existsSync(baseImagePath)) {
        for (const additionalImage of additionalImages) {
          const targetPath = path.join(targetDir, additionalImage);

          if (!fs.existsSync(targetPath)) {
            fs.copyFileSync(baseImagePath, targetPath);
            console.log(`Imagen adicional creada: ${additionalImage}`);
          }
        }
      }
    }

    console.log('Todos los archivos han sido procesados correctamente.');
  } catch (error) {
    console.error('Error al procesar archivos:', error);
  }
}

// Ejecutar la función
copyImages();
