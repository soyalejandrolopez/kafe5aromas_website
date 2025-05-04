// Imágenes y videos para el sitio web
// Usar URLs de imágenes externas en lugar de importar imágenes locales
// Estas son imágenes de café de Unsplash como placeholders

// Definir URLs de imágenes externas
const droneFarm1 = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1742&auto=format&fit=crop';
const droneFarm2 = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop';
const droneFarm3 = 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1740&auto=format&fit=crop';
const droneFarm4 = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1742&auto=format&fit=crop';
const droneFarm5 = 'https://images.unsplash.com/photo-1442975631115-c4f7b05b6107?q=80&w=1740&auto=format&fit=crop';
const droneFarm6 = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1740&auto=format&fit=crop';
const droneFarm7 = 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1734&auto=format&fit=crop';
const droneFarm8 = 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1769&auto=format&fit=crop';
const droneFarm9 = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop';
const droneFarm10 = 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1887&auto=format&fit=crop';
const droneFarm11 = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop';
const droneFarm15 = 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1887&auto=format&fit=crop';
const droneFarm17 = 'https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1887&auto=format&fit=crop';

export const images = {
  // Imágenes para la página de inicio
  home: {
    hero: droneFarm1,
    coffee: droneFarm2,
    coffee_beans_closeup: droneFarm3,
    coffee_brewing: droneFarm4
  },

  // Imágenes para la página de misión
  mission: {
    farmers: droneFarm4,
    coffee_plantation: droneFarm5,
    coffee_harvest: droneFarm6,
    coffee_drying: droneFarm7
  },

  // Imágenes para la página de valores
  values: {
    quality: droneFarm8,
    sustainability: droneFarm9,
    community: droneFarm10,
    innovation: droneFarm11
  },

  // Imágenes para la página de visión
  vision: {
    coffee_shop: droneFarm15,
    barista: droneFarm17,
    coffee_future: droneFarm1,
    coffee_experience: droneFarm2
  },

  // Imágenes para la página de historia
  history: {
    vintage: droneFarm3,
    coffee_processing: droneFarm4,
    coffee_history: droneFarm5,
    coffee_tradition: droneFarm6
  },

  // Imágenes para la página de about
  about: {
    team: droneFarm7,
    coffee_tasting: droneFarm8,
    coffee_experts: droneFarm9,
    coffee_cupping: droneFarm10
  },

  // Imágenes para la página de contacto
  contact: {
    coffee_shop: droneFarm11,
    coffee_meeting: droneFarm15
  },

  // Imágenes generales
  general: {
    coffee_beans: droneFarm3,
    coffee_cup: droneFarm17,
    coffee_pouring: droneFarm1,
    coffee_art: droneFarm2,
    coffee_roasting: droneFarm3
  },

  // Imágenes de dron
  drone: {
    farm1: droneFarm1,
    farm2: droneFarm2,
    farm3: droneFarm3,
    farm4: droneFarm4,
    farm5: droneFarm5,
    farm6: droneFarm6,
    farm7: droneFarm7,
    farm8: droneFarm8,
    farm9: droneFarm9,
    farm10: droneFarm10,
    farm11: droneFarm11,
    farm15: droneFarm15,
    farm17: droneFarm17
  }
};

// Videos para el sitio web (usando URLs externas)
// Nota: Estos son URLs de ejemplo. Deberás reemplazarlos con tus propios URLs después de subir los videos.

export const videos = {
  // Videos para la página de inicio
  home: {
    // Reemplazar con URLs reales después de subir los videos a un servicio de alojamiento
    hero: "https://player.vimeo.com/external/123456789.hd.mp4?s=abcdef123456&profile_id=123",
    brewing: "https://player.vimeo.com/external/123456790.hd.mp4?s=abcdef123457&profile_id=123"
  },

  // Videos para la página de misión
  mission: {
    farmers: "https://player.vimeo.com/external/123456791.hd.mp4?s=abcdef123458&profile_id=123",
    process: "https://player.vimeo.com/external/123456790.hd.mp4?s=abcdef123457&profile_id=123"
  },

  // Videos para la página de valores
  values: {
    quality: "https://player.vimeo.com/external/123456791.hd.mp4?s=abcdef123458&profile_id=123",
    sustainability: "https://player.vimeo.com/external/123456792.hd.mp4?s=abcdef123459&profile_id=123"
  },

  // Videos para la página de visión
  vision: {
    future: "https://player.vimeo.com/external/123456789.hd.mp4?s=abcdef123456&profile_id=123"
  },

  // Videos para la página de historia
  history: {
    story: "https://player.vimeo.com/external/123456790.hd.mp4?s=abcdef123457&profile_id=123"
  },

  // Videos generales
  general: {
    beans: "https://player.vimeo.com/external/123456791.hd.mp4?s=abcdef123458&profile_id=123",
    steam: "https://player.vimeo.com/external/123456792.hd.mp4?s=abcdef123459&profile_id=123",
    pour: "https://player.vimeo.com/external/123456790.hd.mp4?s=abcdef123457&profile_id=123"
  }
};
