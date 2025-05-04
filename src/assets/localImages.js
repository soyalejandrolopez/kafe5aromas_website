// Local high-quality images for the Kafe5aromas website
// This file centralizes all image imports for better management

// Import logo
import logo from './images/logofinal.png';

// Define a base path for images
const basePath = '/images/';

// Define a placeholder image path
const placeholderImage = `${basePath}placeholder.jpg`;

// Define variables for images
let droneImage1, droneImage2, droneImage3, droneImage4, droneImage5,
    droneImage6, droneImage7, droneImage8, droneImage9, droneImage10,
    droneImage11, droneImage12, droneImage13;

// Use direct image imports for development and relative paths for production
try {
  // Import images directly - this works in development
  droneImage1 = new URL('./images/DJI_20240523145421_0001_D.JPG', import.meta.url).href;
  droneImage2 = new URL('./images/DJI_20240523145441_0002_D.JPG', import.meta.url).href;
  droneImage3 = new URL('./images/DJI_20240523145450_0003_D.JPG', import.meta.url).href;
  droneImage4 = new URL('./images/DJI_20240523145605_0004_D.JPG', import.meta.url).href;
  droneImage5 = new URL('./images/DJI_20240523145653_0005_D.JPG', import.meta.url).href;
  droneImage6 = new URL('./images/DJI_20240523145657_0006_D.JPG', import.meta.url).href;
  droneImage7 = new URL('./images/DJI_20240523145718_0007_D.JPG', import.meta.url).href;
  droneImage8 = new URL('./images/DJI_20240523145733_0008_D.JPG', import.meta.url).href;
  droneImage9 = new URL('./images/DJI_20240523145807_0009_D.JPG', import.meta.url).href;
  droneImage10 = new URL('./images/DJI_20240523145810_0010_D.JPG', import.meta.url).href;
  droneImage11 = new URL('./images/DJI_20240523145851_0011_D.JPG', import.meta.url).href;
  droneImage12 = new URL('./images/DJI_20240523150913_0015_D.JPG', import.meta.url).href;
  droneImage13 = new URL('./images/DJI_20240523151015_0017_D.JPG', import.meta.url).href;
} catch (error) {
  console.warn('Could not load some images directly, using relative paths instead', error);

  // If direct imports fail (like in production build), use relative paths
  droneImage1 = `${basePath}DJI_20240523145421_0001_D.JPG`;
  droneImage2 = `${basePath}DJI_20240523145441_0002_D.JPG`;
  droneImage3 = `${basePath}DJI_20240523145450_0003_D.JPG`;
  droneImage4 = `${basePath}DJI_20240523145605_0004_D.JPG`;
  droneImage5 = `${basePath}DJI_20240523145653_0005_D.JPG`;
  droneImage6 = `${basePath}DJI_20240523145657_0006_D.JPG`;
  droneImage7 = `${basePath}DJI_20240523145718_0007_D.JPG`;
  droneImage8 = `${basePath}DJI_20240523145733_0008_D.JPG`;
  droneImage9 = `${basePath}DJI_20240523145807_0009_D.JPG`;
  droneImage10 = `${basePath}DJI_20240523145810_0010_D.JPG`;
  droneImage11 = `${basePath}DJI_20240523145851_0011_D.JPG`;
  droneImage12 = `${basePath}DJI_20240523150913_0015_D.JPG`;
  droneImage13 = `${basePath}DJI_20240523151015_0017_D.JPG`;
}

// Export organized image collections
export const localImages = {
  // Logo
  logo,
  homeBackground: droneImage3, //  DJI_20240523145450_0003_D.JPG

  // Drone images collection
  drone: {
    farm1: droneImage1, // DJI_20240523145421_0001_D.JPG
    farm2: droneImage2, // DJI_20240523145441_0002_D.JPG
    farm3: droneImage3, // DJI_20240523145450_0003_D.JPG
    farm4: droneImage4, // DJI_20240523145605_0004_D.JPG
    farm5: droneImage5, // DJI_20240523145653_0005_D.JPG
    farm6: droneImage6, // DJI_20240523145657_0006_D.JPG
    farm7: droneImage7, // DJI_20240523145718_0007_D.JPG
    farm8: droneImage8, // DJI_20240523145733_0008_D.JPG
    farm9: droneImage9, // DJI_20240523145807_0009_D.JPG
    farm10: droneImage10, // DJI_20240523145810_0010_D.JPG
    farm11: droneImage11, // DJI_20240523145851_0011_D.JPG
    farm12: droneImage12, // DJI_20240523150913_0015_D.JPG
    farm13: droneImage13  // DJI_20240523151015_0017_D.JPG
  },

  // Home page images
  home: {
    hero: droneImage3, // Use our local high-quality image
    about: droneImage1,
    beans: droneImage2,
    brewing: droneImage4
  },

  // Mission page images
  mission: {
    hero: droneImage5,
    farmers: droneImage6,
    processing: droneImage7,
    sustainability: droneImage8
  },

  // Values page images
  values: {
    hero: droneImage9,
    quality: droneImage10,
    community: droneImage11,
    innovation: droneImage12
  },

  // Vision page images
  vision: {
    hero: droneImage13,
    future: droneImage1,
    experience: droneImage2,
    growth: droneImage3
  },

  // About page images
  about: {
    hero: droneImage4,
    team: droneImage5,
    process: droneImage6,
    expertise: droneImage7
  },

  // History page images
  history: {
    hero: droneImage8,
    origins: droneImage9,
    tradition: droneImage10,
    evolution: droneImage11
  },

  // Contact page images
  contact: {
    hero: droneImage12,
    location: droneImage13,
    team: droneImage1
  },

  // General purpose images
  general: {
    beans: droneImage2,
    cup: droneImage3,
    farm: droneImage4,
    farmers: droneImage5,
    brewing: droneImage6
  }
};

export default localImages;
