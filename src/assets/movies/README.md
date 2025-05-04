# Videos para Kafe5aromas

Este directorio está destinado a almacenar los videos utilizados en el sitio web de Kafe5aromas.

## Importante: Manejo de archivos de video

Los archivos de video **no** se incluyen en el repositorio de GitHub debido a las limitaciones de tamaño:
- GitHub no recomienda archivos mayores de 50 MB
- GitHub rechaza archivos mayores de 100 MB

## Cómo manejar los videos

Para el despliegue en GitHub Pages, se recomienda:

1. **Alojar los videos en servicios externos** como:
   - Vimeo
   - YouTube
   - Amazon S3
   - Cloudinary

2. **Actualizar las URLs** en el archivo `src/assets/images.js` con las URLs reales de los videos alojados externamente.

## Estructura actual

El archivo `src/assets/images.js` está configurado para usar URLs externas para los videos. Deberás reemplazar las URLs de ejemplo con las URLs reales después de subir tus videos a un servicio de alojamiento.

## Desarrollo local

Para desarrollo local, puedes:

1. Colocar tus videos en este directorio
2. Modificar temporalmente el archivo `src/assets/images.js` para usar los archivos locales
3. Asegurarte de no hacer commit de estos cambios al repositorio

## Nombres de archivos originales

Los videos originales tenían los siguientes nombres:
- `20240530 121923.mp4`
- `20240530 122521.mp4`
- `20240530 124248.mp4`
- `Dji 20240523145934 0013 D.mp4`
