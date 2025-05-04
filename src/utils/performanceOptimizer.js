/**
 * Performance optimization utilities for Kafe5aromas website
 * 
 * This module provides functions to optimize website performance
 * including code splitting, resource loading, and rendering optimizations.
 */

/**
 * Defer non-critical JavaScript
 * 
 * @param {string} src - Script source URL
 * @param {Object} options - Script options
 */
export function loadScriptAsync(src, options = {}) {
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  
  if (options.defer) script.defer = true;
  if (options.id) script.id = options.id;
  if (options.onload) script.onload = options.onload;
  
  document.body.appendChild(script);
}

/**
 * Preconnect to external domains for faster resource loading
 * 
 * @param {Array<string>} domains - Array of domains to preconnect
 */
export function preconnectToDomains(domains) {
  if (typeof window === 'undefined' || !domains || !Array.isArray(domains)) return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Detect when the browser is idle and run non-critical tasks
 * 
 * @param {Function} callback - Function to run when browser is idle
 */
export function runWhenIdle(callback) {
  if (typeof window === 'undefined' || !callback) return;
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback());
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(callback, 1);
  }
}

/**
 * Measure component render time for performance monitoring
 * 
 * @param {string} componentName - Name of the component being measured
 * @param {Function} callback - Function to measure
 * @returns {*} - Result of the callback function
 */
export function measureRenderTime(componentName, callback) {
  if (typeof window === 'undefined' || !callback) return callback();
  
  const startTime = performance.now();
  const result = callback();
  const endTime = performance.now();
  
  console.log(`[Performance] ${componentName} rendered in ${(endTime - startTime).toFixed(2)}ms`);
  
  return result;
}

/**
 * Apply performance optimizations to the website
 */
export function applyPerformanceOptimizations() {
  if (typeof window === 'undefined') return;
  
  // Preconnect to common domains
  preconnectToDomains([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]);
  
  // Defer non-critical scripts
  runWhenIdle(() => {
    // Analytics, social media widgets, etc.
  });
}

export default {
  loadScriptAsync,
  preconnectToDomains,
  runWhenIdle,
  measureRenderTime,
  applyPerformanceOptimizations
};
