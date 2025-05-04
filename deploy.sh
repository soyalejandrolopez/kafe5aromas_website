#!/bin/bash

# Colores para la salida
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Iniciando proceso de despliegue...${NC}"

# Paso 1: Construir el proyecto
echo -e "${YELLOW}📦 Construyendo el proyecto...${NC}"
npm run build

# Verificar si la construcción fue exitosa
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Error durante la construcción. Abortando despliegue.${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Proyecto construido exitosamente.${NC}"

# Paso 2: Preparar para GitHub
echo -e "${YELLOW}🔄 Preparando para subir a GitHub...${NC}"

# Verificar si hay cambios sin confirmar
if [[ $(git status --porcelain) ]]; then
  echo -e "${YELLOW}📝 Hay cambios sin confirmar. Confirmando cambios...${NC}"
  git add .
  git commit -m "Build: Preparación para despliegue en Vercel"
else
  echo -e "${GREEN}✅ No hay cambios para confirmar.${NC}"
fi

# Paso 3: Subir a GitHub
echo -e "${YELLOW}📤 Subiendo a GitHub...${NC}"
git push origin main

# Verificar si el push fue exitoso
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Error al subir a GitHub. Verifica tus credenciales o la conexión.${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Código subido a GitHub exitosamente.${NC}"

# Paso 4: Instrucciones para Vercel
echo -e "${GREEN}🎉 Proceso completado exitosamente.${NC}"
echo -e "${YELLOW}Próximos pasos para desplegar en Vercel:${NC}"
echo -e "1. Ve a https://vercel.com/new"
echo -e "2. Importa tu repositorio de GitHub"
echo -e "3. Configura las opciones de despliegue (el directorio de salida es 'dist')"
echo -e "4. Haz clic en 'Deploy'"

echo -e "${GREEN}¡Listo! Tu proyecto estará disponible en Vercel en unos minutos.${NC}"
