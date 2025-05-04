/**
 * Image optimization utilities for Kafe5aromas website
 * 
 * This module provides functions to optimize images for better performance
 * and visual quality across the website.
 */

/**
 * Get optimized image URL with appropriate size and format
 * 
 * @param {string} imagePath - Path to the original image
 * @param {Object} options - Optimization options
 * @param {number} options.width - Desired width in pixels
 * @param {number} options.height - Desired height in pixels
 * @param {string} options.format - Image format (webp, jpg, png)
 * @param {number} options.quality - Image quality (1-100)
 * @returns {string} - Optimized image URL
 */
export function getOptimizedImage(imagePath, options = {}) {
  // Default options
  const defaults = {
    width: undefined,
    height: undefined,
    format: 'webp',
    quality: 80
  };
  
  // Merge options with defaults
  const settings = { ...defaults, ...options };
  
  // For local images, we can't do server-side optimization
  // So we just return the original path
  return imagePath;
  
  // In a production environment with a CDN or image optimization service,
  // you would transform the URL to include optimization parameters
  // Example with Cloudinary:
  // return `https://res.cloudinary.com/your-account/image/upload/q_${settings.quality},f_${settings.format}${settings.width ? ',w_' + settings.width : ''}${settings.height ? ',h_' + settings.height : ''}/kafe5aromas/${imagePath}`;
}

/**
 * Preload critical images for better performance
 * 
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
export function preloadImages(imagePaths) {
  if (!imagePaths || !Array.isArray(imagePaths)) return;
  
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
}

/**
 * Get responsive image srcset for different screen sizes
 * 
 * @param {string} imagePath - Path to the original image
 * @param {Array<number>} widths - Array of widths for srcset
 * @returns {string} - srcset attribute value
 */
export function getResponsiveSrcSet(imagePath, widths = [320, 640, 960, 1280, 1920]) {
  return widths
    .map(width => `${getOptimizedImage(imagePath, { width })} ${width}w`)
    .join(', ');
}

/**
 * Apply lazy loading to images
 * 
 * @param {HTMLElement} container - Container element with images
 */
export function applyLazyLoading(container) {
  if (typeof window === 'undefined' || !container) return;
  
  // Check if IntersectionObserver is available
  if ('IntersectionObserver' in window) {
    const lazyImages = container.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = container.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      
      img.classList.add('loaded');
    });
  }
}

export default {
  getOptimizedImage,
  preloadImages,
  getResponsiveSrcSet,
  applyLazyLoading
};
