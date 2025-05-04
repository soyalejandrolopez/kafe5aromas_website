import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function GoogleTranslate() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  // Función para abrir el sitio en un traductor online
  const openTranslator = (lang) => {
    // Guardar la preferencia de idioma
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);

    // Si es inglés, simplemente cambiar el idioma de la interfaz
    if (lang === 'en') {
      i18n.changeLanguage('en');
      return;
    }

    // Si es español, cambiar el idioma de la interfaz y abrir el traductor online
    if (lang === 'es') {
      i18n.changeLanguage('es');

      // Opción 1: Abrir en un traductor online (DeepL)
      const currentUrl = window.location.href;
      const translatorUrl = `https://www.deepl.com/translator#en/es/${encodeURIComponent(currentUrl)}`;

      // Abrir en una nueva pestaña
      window.open(translatorUrl, '_blank');
    }
  };

  // Manejar el cambio de idioma
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    openTranslator(newLang);
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
