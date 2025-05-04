// Placeholder images for production build
// This file provides placeholder images for deployment where large files might cause issues

// Import logo
import logo from './images/logofinal.png';

// Create a placeholder image function
const createPlaceholder = (color = '#4c7d4d', text = 'Kafe5aromas') => {
  // Return a data URL for a simple colored rectangle with text
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='${color.replace('#', '%23')}' opacity='0.7'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${text}%3C/text%3E%3C/svg%3E`;
};

// Create different colored placeholders for variety
const placeholder1 = createPlaceholder('#4c7d4d', 'Kafe5aromas 1');
const placeholder2 = createPlaceholder('#5d2a0c', 'Kafe5aromas 2');
const placeholder3 = createPlaceholder('#3a5a3a', 'Kafe5aromas 3');
const placeholder4 = createPlaceholder('#6b3c1d', 'Kafe5aromas 4');
const placeholder5 = createPlaceholder('#2d4a2d', 'Kafe5aromas 5');
const placeholder6 = createPlaceholder('#7d4e2f', 'Kafe5aromas 6');
const placeholder7 = createPlaceholder('#1f3a1f', 'Kafe5aromas 7');
const placeholder8 = createPlaceholder('#8e5f40', 'Kafe5aromas 8');
const placeholder9 = createPlaceholder('#102a10', 'Kafe5aromas 9');
const placeholder10 = createPlaceholder('#9f7051', 'Kafe5aromas 10');
const placeholder11 = createPlaceholder('#011a01', 'Kafe5aromas 11');
const placeholder12 = createPlaceholder('#b08162', 'Kafe5aromas 12');
const placeholder13 = createPlaceholder('#000a00', 'Kafe5aromas 13');

// Export organized image collections
export const placeholderImages = {
  // Logo
  logo,
  homeBackground: placeholder3,

  // Drone images collection
  drone: {
    farm1: placeholder1,
    farm2: placeholder2,
    farm3: placeholder3,
    farm4: placeholder4,
    farm5: placeholder5,
    farm6: placeholder6,
    farm7: placeholder7,
    farm8: placeholder8,
    farm9: placeholder9,
    farm10: placeholder10,
    farm11: placeholder11,
    farm12: placeholder12,
    farm13: placeholder13
  },
  
  // Home page images
  home: {
    hero: placeholder3,
    about: placeholder1,
    beans: placeholder2,
    brewing: placeholder4
  },
  
  // Mission page images
  mission: {
    hero: placeholder5,
    farmers: placeholder6,
    processing: placeholder7,
    sustainability: placeholder8
  },
  
  // Values page images
  values: {
    hero: placeholder9,
    quality: placeholder10,
    community: placeholder11,
    innovation: placeholder12
  },
  
  // Vision page images
  vision: {
    hero: placeholder13,
    future: placeholder1,
    experience: placeholder2,
    growth: placeholder3
  },
  
  // About page images
  about: {
    hero: placeholder4,
    team: placeholder5,
    process: placeholder6,
    expertise: placeholder7
  },
  
  // History page images
  history: {
    hero: placeholder8,
    origins: placeholder9,
    tradition: placeholder10,
    evolution: placeholder11
  },
  
  // Contact page images
  contact: {
    hero: placeholder12,
    location: placeholder13,
    team: placeholder1
  },
  
  // General purpose images
  general: {
    beans: placeholder2,
    cup: placeholder3,
    farm: placeholder4,
    farmers: placeholder5,
    brewing: placeholder6
  }
};

export default placeholderImages;
