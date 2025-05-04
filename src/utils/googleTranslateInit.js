// This file initializes the Google Translate widget

// Function to initialize Google Translate
export function initGoogleTranslate() {
  // Check if Google Translate is already loaded
  if (window.google && window.google.translate) {
    return;
  }

  // Create the script element
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;

  // Define the callback function
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false,
        gaId: ''
      },
      'google_translate_element'
    );

    // Add a small delay to ensure the widget is fully loaded
    setTimeout(() => {
      // Try to find the select element
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        // Add event listener to the original Google Translate select
        select.addEventListener('change', function() {
          // Update our custom select to match
          const customSelect = document.getElementById('custom-google-translate-select');
          if (customSelect) {
            customSelect.value = select.value;
          }
        });
      }
    }, 1000);
  };

  // Append the script to the document
  document.body.appendChild(script);
}

// Export the function to change language
export function changeGoogleTranslateLanguage(lang) {
  // Use direct DOM manipulation to trigger Google Translate
  if (document.readyState === 'complete') {
    // Method 1: Try to use the Google Translate select directly
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = lang;

      // Trigger both change and click events
      googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
      googleCombo.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    // Method 2: Try to use the Google Translate API directly
    else if (window.google && window.google.translate) {
      try {
        const translateElement = window.google.translate.TranslateElement;
        if (translateElement) {
          translateElement.getInstance().setLanguage(lang);
        }
      } catch (e) {
        console.error('Error changing language:', e);
      }
    }
    // Method 3: As a fallback, try to click the language directly in the Google UI
    else {
      try {
        // Find and click the language button
        const langBtn = document.querySelector(`[value="${lang}"]`);
        if (langBtn) {
          langBtn.click();
        }
      } catch (e) {
        console.error('Error clicking language button:', e);
      }
    }
  } else {
    // If document not ready, wait and try again
    window.addEventListener('load', () => {
      setTimeout(() => changeGoogleTranslateLanguage(lang), 1000);
    });
  }
}
