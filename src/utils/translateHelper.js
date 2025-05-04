// Helper functions for Google Translate

// Function to force Google Translate to translate the page
export function forceTranslate() {
  // Check if Google Translate is loaded
  if (window.google && window.google.translate) {
    // Get the current language
    const select = document.querySelector('.goog-te-combo');
    if (select && select.value && select.value !== 'en') {
      // Force a re-translation by triggering the change event
      const event = new Event('change', { bubbles: true });
      select.dispatchEvent(event);
    }
  }
}

// Function to initialize translation on page change
export function initTranslationOnPageChange() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Get the stored language preference
  const storedLanguage = localStorage.getItem('preferredLanguage');
  
  // If there's a stored language and it's not English
  if (storedLanguage && storedLanguage !== 'en') {
    // Wait for Google Translate to be available
    const checkInterval = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(checkInterval);
        
        // Get the Google Translate select element
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          // Set the value to the stored language
          select.value = storedLanguage;
          
          // Trigger the change event
          const event = new Event('change', { bubbles: true });
          select.dispatchEvent(event);
        }
      }
    }, 500);
    
    // Clear the interval after 10 seconds to prevent memory leaks
    setTimeout(() => clearInterval(checkInterval), 10000);
  }
}
