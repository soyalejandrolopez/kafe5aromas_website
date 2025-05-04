#!/bin/bash

# Construir el proyecto
npm run build

# Crear una rama gh-pages
git checkout -b gh-pages

# Mover los archivos de dist a la raíz
cp -r dist/* .

# Añadir los archivos
git add .

# Crear un commit
git commit -m "Deploy to GitHub Pages"

# Volver a la rama principal
git checkout main

echo "Para publicar en GitHub Pages, ejecuta:"
echo "git push origin gh-pages"
