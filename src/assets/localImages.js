// Local high-quality images for the Kafe5aromas website
// This file centralizes all image imports for better management

// Import logo for development
import logoImg from './images/logofinal.png';

// Define static paths for production
const STATIC_PATH = '/static/images/';

// Define logo path
const logo = logoImg;

// Export organized image collections
export const localImages = {
  // Logo
  logo,
  homeBackground: STATIC_PATH + 'farm3.jpg',

  // Drone images collection
  drone: {
    farm1: STATIC_PATH + 'farm1.jpg',
    farm2: STATIC_PATH + 'farm2.jpg',
    farm3: STATIC_PATH + 'farm3.jpg',
    farm4: STATIC_PATH + 'farm4.jpg',
    farm5: STATIC_PATH + 'farm5.jpg',
    farm6: STATIC_PATH + 'farm6.jpg',
    farm7: STATIC_PATH + 'farm7.jpg',
    farm8: STATIC_PATH + 'farm8.jpg',
    farm9: STATIC_PATH + 'farm9.jpg',
    farm10: STATIC_PATH + 'farm10.jpg',
    farm11: STATIC_PATH + 'farm11.jpg',
    farm12: STATIC_PATH + 'farm12.jpg',
    farm13: STATIC_PATH + 'farm13.jpg'
  },
  
  // Home page images
  home: {
    hero: STATIC_PATH + 'home-hero.jpg',
    about: STATIC_PATH + 'home-about.jpg',
    beans: STATIC_PATH + 'home-beans.jpg',
    brewing: STATIC_PATH + 'home-brewing.jpg'
  },
  
  // Mission page images
  mission: {
    hero: STATIC_PATH + 'mission-hero.jpg',
    farmers: STATIC_PATH + 'mission-farmers.jpg',
    processing: STATIC_PATH + 'mission-processing.jpg',
    sustainability: STATIC_PATH + 'mission-sustainability.jpg'
  },
  
  // Values page images
  values: {
    hero: STATIC_PATH + 'values-hero.jpg',
    quality: STATIC_PATH + 'values-quality.jpg',
    community: STATIC_PATH + 'values-community.jpg',
    innovation: STATIC_PATH + 'values-innovation.jpg'
  },
  
  // Vision page images
  vision: {
    hero: STATIC_PATH + 'vision-hero.jpg',
    future: STATIC_PATH + 'vision-future.jpg',
    experience: STATIC_PATH + 'vision-experience.jpg',
    growth: STATIC_PATH + 'vision-growth.jpg'
  },
  
  // About page images
  about: {
    hero: STATIC_PATH + 'about-hero.jpg',
    team: STATIC_PATH + 'about-team.jpg',
    process: STATIC_PATH + 'about-process.jpg',
    expertise: STATIC_PATH + 'about-expertise.jpg'
  },
  
  // History page images
  history: {
    hero: STATIC_PATH + 'history-hero.jpg',
    origins: STATIC_PATH + 'history-origins.jpg',
    tradition: STATIC_PATH + 'history-tradition.jpg',
    evolution: STATIC_PATH + 'history-evolution.jpg'
  },
  
  // Contact page images
  contact: {
    hero: STATIC_PATH + 'contact-hero.jpg',
    location: STATIC_PATH + 'contact-location.jpg',
    team: STATIC_PATH + 'contact-team.jpg'
  },
  
  // General purpose images
  general: {
    beans: STATIC_PATH + 'general-beans.jpg',
    cup: STATIC_PATH + 'general-cup.jpg',
    farm: STATIC_PATH + 'general-farm.jpg',
    farmers: STATIC_PATH + 'general-farmers.jpg',
    brewing: STATIC_PATH + 'general-brewing.jpg'
  }
};
