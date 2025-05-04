import { useState } from 'react';

function GoogleTranslate() {
  const [language, setLanguage] = useState('en');

  // Función directa para traducir la página usando Google Translate
  const translatePage = (lang) => {
    // Actualizar el estado
    setLanguage(lang);

    // Guardar la preferencia de idioma
    localStorage.setItem('preferredLanguage', lang);

    // Si es inglés, recargar la página para volver al original
    if (lang === 'en') {
      window.location.reload();
      return;
    }

    // Crear el script de Google Translate
    const script = document.createElement('script');
    script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    script.async = true;

    // Definir la función de inicialización
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es',
        autoDisplay: false
      }, 'google_translate_element');

      // Forzar la traducción al idioma seleccionado
      setTimeout(() => {
        // Buscar el iframe de Google Translate
        const iframe = document.querySelector('.goog-te-menu-frame');
        if (iframe) {
          // Acceder al documento dentro del iframe
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

          // Buscar y hacer clic en el enlace del idioma
          const links = iframeDoc.querySelectorAll('a.goog-te-menu2-item');
          for (let i = 0; i < links.length; i++) {
            if (links[i].textContent.includes('Spanish') || links[i].textContent.includes('Español')) {
              links[i].click();
              break;
            }
          }
        } else {
          // Si no encontramos el iframe, intentar con el método alternativo
          const select = document.querySelector('.goog-te-combo');
          if (select) {
            select.value = 'es';
            select.dispatchEvent(new Event('change'));
          }
        }
      }, 1000);
    };

    // Añadir el script al documento
    document.body.appendChild(script);
  };

  // Manejar el cambio de idioma
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    translatePage(newLang);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      style={{
        padding: "8px 12px",
        borderRadius: "20px",
        border: "1px solid rgba(76, 125, 77, 0.3)",
        outline: "none",
        fontFamily: "inherit",
        fontSize: "0.9rem",
        color: "var(--color-dark-gray)",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        minWidth: "120px",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234c7d4d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px center",
        backgroundSize: "16px",
        paddingRight: "30px"
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = "var(--color-green)";
        e.target.style.boxShadow = "0 4px 8px rgba(76, 125, 77, 0.15)";
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = "rgba(76, 125, 77, 0.3)";
        e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.05)";
        e.target.style.transform = "translateY(0)";
      }}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default GoogleTranslate;
