# Kafe 5 Aromas

Sitio web oficial de Kafe 5 Aromas, una empresa dedicada a ofrecer café de especialidad y origen único.

## Características

- Sitio web bilingüe (Español/Inglés)
- Diseño responsivo para dispositivos móviles y de escritorio
- Animaciones y efectos visuales profesionales
- Información sobre la misión, valores, visión e historia de la empresa

## Tecnologías utilizadas

- React
- Vite
- React Router
- i18next para internacionalización
- AOS (Animate On Scroll) para animaciones
- CSS personalizado para efectos 3D y aéreos

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la versión de producción
npm run preview
```

## Manejo de archivos de video

Los archivos de video no se incluyen en el repositorio debido a las limitaciones de tamaño de GitHub. En su lugar:

1. Los videos están configurados para usar URLs externas en `src/assets/images.js`
2. Para desarrollo local, puedes colocar tus videos en `src/assets/movies/` y modificar temporalmente `src/assets/images.js`
3. Para producción, sube tus videos a un servicio como Vimeo o YouTube y actualiza las URLs en `src/assets/images.js`

Consulta `src/assets/movies/README.md` para más detalles.

## Despliegue

El sitio está configurado para ser desplegado en GitHub Pages:

```bash
# Verificar que todo esté listo para el despliegue
npm run check-deploy

# Desplegar en GitHub Pages
npm run deploy
```

Después del primer despliegue, asegúrate de configurar GitHub Pages en la configuración del repositorio para usar la rama `gh-pages`.

## Licencia

Todos los derechos reservados © 2024 Kafe 5 Aromas
