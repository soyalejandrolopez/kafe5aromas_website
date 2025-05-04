import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import './styles/global.css';
import './styles/effects.css';
import './styles/responsive.css';
import { applyPerformanceOptimizations } from './utils/performanceOptimizer';

// Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy-loaded Pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Mission = lazy(() => import('./pages/Mission'));
const Values = lazy(() => import('./pages/Values'));
const Vision = lazy(() => import('./pages/Vision'));
const About = lazy(() => import('./pages/About'));
const History = lazy(() => import('./pages/History'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component for page transitions
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply performance optimizations
    applyPerformanceOptimizations();

    // Simular tiempo de carga con una duración más corta para mejor UX
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

      // Preload critical images for better performance
      import('./utils/imageOptimizer').then(module => {
        module.preloadImages([
          // Add paths to critical images here
        ]);
      });
    }, 2000); // Reduced loading time for better user experience

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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/values" element={<Values />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
