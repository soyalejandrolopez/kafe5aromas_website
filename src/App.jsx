import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/global.css';
import './styles/effects.css';
import './styles/responsive.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Pages
import Home from './pages/Home';
import Mission from './pages/Mission';
import Values from './pages/Values';
import Vision from './pages/Vision';
import About from './pages/About';
import History from './pages/History';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false);

      // Check for stored language preference
      const storedLanguage = localStorage.getItem('preferredLanguage');

      // Importar el módulo i18n
      import('./i18n/i18n').then(i18nModule => {
        if (storedLanguage) {
          // Aplicar el idioma guardado
          i18nModule.default.changeLanguage(storedLanguage);
        } else {
          // Asegurar que el idioma por defecto sea inglés
          i18nModule.default.changeLanguage('en');
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/values" element={<Values />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
