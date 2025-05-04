# Instrucciones para desplegar en Vercel

Sigue estos pasos para desplegar tu proyecto en Vercel:

## 1. Preparar el proyecto para producción

```bash
# Asegúrate de tener todas las dependencias instaladas
npm install

# Construir el proyecto para producción
npm run build
```

## 2. Subir a GitHub

```bash
# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Preparar para despliegue en Vercel"

# Subir a GitHub
git push origin main
```

## 3. Desplegar en Vercel

1. Ve a [Vercel](https://vercel.com/new)
2. Inicia sesión con tu cuenta de GitHub
3. Selecciona el repositorio "kafe5aromas_website"
4. Configura las opciones de despliegue:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Haz clic en "Deploy"

## 4. Verificar el despliegue

Una vez completado el despliegue, Vercel te proporcionará una URL para tu sitio. Verifica que todo funcione correctamente.

## Solución de problemas comunes

### Error: "Could not resolve image"

Si encuentras errores relacionados con imágenes que no se pueden resolver, asegúrate de:

1. No usar imágenes locales grandes que no estén en el repositorio
2. Usar URLs de imágenes externas para imágenes grandes
3. Verificar que todas las rutas de importación sean correctas

### Error: "Build failed"

Si la construcción falla:

1. Revisa los logs de error en Vercel
2. Asegúrate de que el proyecto se construya correctamente localmente con `npm run build`
3. Verifica que todas las dependencias estén correctamente instaladas
