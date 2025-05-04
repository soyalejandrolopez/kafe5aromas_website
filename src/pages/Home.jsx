import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaCoffee, FaLeaf, FaHandshake, FaStar, FaMugHot, FaAward, FaSeedling } from 'react-icons/fa';
import { localImages } from '../assets/localImages';
import { images } from '../assets/images';
import { useEffect, useState } from 'react';
import '../styles/animations.css';

function Home() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  // Efecto para inicializar animaciones adicionales
  useEffect(() => {
    // Añadir clase para activar animaciones después de que la página cargue
    const timer = setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page" style={{
      position: 'relative',
      overflowX: 'hidden',
      width: '100%',
      maxWidth: '100vw'
    }}>
      {/* Elementos decorativos flotantes en toda la página */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        {/* Círculo decorativo 1 */}
        <div className="float-slow" style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
          opacity: 0.6
        }}></div>

        {/* Círculo decorativo 2 */}
        <div className="float" style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93, 42, 12, 0.1) 0%, rgba(93, 42, 12, 0) 70%)',
          opacity: 0.5
        }}></div>

        {/* Círculo decorativo 3 */}
        <div className="float-fast" style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          opacity: 0.7
        }}></div>
      </div>

      {/* Contenido de la página (con z-index para estar por encima del overlay) */}
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>

      {/* Enhanced Hero Section with Professional Design and High-Quality Background */}
      <section className="hero" style={{
        backgroundImage: `url(${localImages.drone.farm3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Using background-image instead of img tag for better coverage */}

        {/* Professional Overlay with Gradient - Darker for better text contrast */}
        <div className="hero-overlay" style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}></div>

        {/* Decorative Elements */}
        <div className="position-absolute w-100 h-100 z-foreground" style={{pointerEvents: 'none'}}>
          <div className="coffee-bean float-3d position-absolute" style={{top: '15%', left: '10%'}}>
            <FaCoffee size={40} className="text-white opacity-25" />
          </div>

          <div className="coffee-leaf float position-absolute" style={{top: '60%', right: '15%'}}>
            <FaLeaf size={50} className="text-white opacity-25" />
          </div>

          <div className="coffee-mug float-fast position-absolute" style={{bottom: '20%', left: '20%'}}>
            <FaMugHot size={35} className="text-white opacity-25" />
          </div>

          <div className="position-absolute" style={{top: '30%', right: '20%'}}>
            <FaStar size={30} className="text-white opacity-25 float-slow" />
          </div>

          <div className="position-absolute" style={{bottom: '30%', right: '30%'}}>
            <FaAward size={35} className="text-white opacity-25 float" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title font-secondary text-white slide-up" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Experience the Essence
          </h1>

          <div className="divider-gradient glow mx-auto slide-up delay-200" style={{
            marginBottom: '2rem',
            width: '120px',
            height: '4px'
          }}></div>

          <p className="hero-subtitle slide-up delay-300" style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            {t('home.tagline')}
          </p>

          <div className="d-flex justify-content-center gap-5 flex-wrap slide-up delay-500" style={{ marginTop: '2rem' }}>
            <Link to="/about" className="btn btn-primary btn-lg" style={{
              minWidth: '180px',
              margin: '0 1.5rem',
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '50px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none'
            }}>
              {t('nav.about')}
            </Link>

            <Link to="/mission" className="btn btn-outline btn-lg" style={{
              minWidth: '180px',
              margin: '0 1.5rem',
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '50px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              border: '2px solid white',
              color: 'white'
            }}>
              {t('nav.mission')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 left-0 w-100 d-flex justify-content-center pb-4 slide-up delay-700">
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Our Essence Section - Professional Design with Dark Opacity */}
      <section className="section bg-gray-100 py-6" style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${localImages.drone.farm9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        {/* Decorative elements */}
        <div className="section-decoration" style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(76, 125, 77, 0.2)',
          zIndex: 0
        }}></div>

        <div className="section-decoration" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(93, 42, 12, 0.2)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="section-subtitle slide-up" style={{
              color: 'white',
              display: 'block',
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>{t('home.discover')}</span>

            <h2 className="section-title slide-up delay-100" style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '1rem',
              fontWeight: '600',
              position: 'relative',
              display: 'inline-block'
            }}>{t('home.ourEssence')}
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'var(--color-green)',
                borderRadius: '3px'
              }}></span>
            </h2>

            <p className="section-description slide-up delay-200" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '1.5rem auto',
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              lineHeight: '1.8'
            }}>
              At the heart of Kafe5aromas lies our commitment to quality, sustainability, and excellence in every aspect of coffee production.
            </p>
          </div>

          <div className="row mt-5">
            {/* Feature 1 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="feature-box slide-up">
                <div className="feature-icon">
                  <FaCoffee />
                </div>
                <h3 className="feature-title">{t('home.feature1Title')}</h3>
                <p className="feature-text">
                  {t('home.feature1Description')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="feature-box slide-up delay-200">
                <div className="feature-icon">
                  <FaLeaf />
                </div>
                <h3 className="feature-title">{t('home.feature2Title')}</h3>
                <p className="feature-text">
                  {t('home.feature2Description')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="feature-box slide-up delay-300">
                <div className="feature-icon">
                  <FaHandshake />
                </div>
                <h3 className="feature-title">{t('home.feature3Title')}</h3>
                <p className="feature-text">
                  {t('home.feature3Description')}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 slide-up delay-400">
            <Link to="/about" className="btn btn-primary">
              {t('home.learnMore')}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section - Modern Design with Dark Opacity */}
      <section className="section values-section" style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-xxl) 0',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${localImages.drone.farm7})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        {/* Decorative elements */}
        <div className="section-decoration" style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(76, 125, 77, 0.2)',
          zIndex: 0
        }}></div>

        <div className="section-decoration" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(93, 42, 12, 0.2)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span className="section-subtitle" data-aos="fade-up" style={{
              display: 'block',
              color: 'var(--color-light-green)',
              fontWeight: '500',
              fontSize: '1.1rem',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Our Mission</span>

            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100" style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: 'var(--spacing-md)',
              position: 'relative',
              display: 'inline-block'
            }}>
              Crafting Excellence in Every Cup
              <span className="title-underline" style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'var(--color-green)',
                borderRadius: '3px'
              }}></span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="200" style={{
              maxWidth: '700px',
              margin: '0 auto var(--spacing-lg) auto',
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              We are dedicated to delivering exceptional coffee experiences while promoting sustainable practices
              and supporting coffee-growing communities worldwide. Our commitment goes beyond the cup –
              it's about creating positive impact in every step of our journey.
            </p>
          </div>

          <div className="values-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="value-card" data-aos="fade-up" data-aos-delay="100" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaCoffee size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>Premium Coffee</h3>

              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>Selection of the finest coffee beans, roasted to perfection.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="200" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaLeaf size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>Sustainability</h3>

              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>Committed to environmental care and fair trade practices.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="300" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaStar size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>Superior Quality</h3>

              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>Exceptional quality standards in every cup.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }} data-aos="fade-up" data-aos-delay="400">
            <Link to="/about" className="btn glow" style={{
              backgroundColor: 'var(--color-green)',
              color: 'white',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 10px 20px rgba(76, 125, 77, 0.2)',
              border: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              Learn More
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </Link>
          </div>

          {/* Right Column - Image Grid */}
          <div className="mission-images" data-aos="fade-left" style={{
            marginTop: isMobile ? '2rem' : '0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: isMobile ? '1rem' : '1.5rem',
              position: 'relative'
            }}>
              <div style={{
                gridColumn: '1 / -1',
                height: isMobile ? '250px' : '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  src={localImages.mission.farmers}
                  alt="Coffee Farmers"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  src={localImages.drone.farm2}
                  alt="Coffee Farm"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  src={localImages.drone.farm3}
                  alt="Coffee Processing"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              border: '2px solid #4c7d4d',
              borderRadius: '20px',
              opacity: 0.3,
              zIndex: -1
            }}></div>

            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '150px',
              height: '150px',
              border: '2px solid #4c7d4d',
              borderRadius: '20px',
              opacity: 0.3,
              zIndex: -1
            }}></div>
          </div>
        </div>
      </section>

      {/* Vision Section - Modern Split Layout */}
      <section className="section vision-section" style={{
        padding: 'var(--spacing-xxl) 0',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #f1f3f5 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative coffee bean pattern */}
        <div className="pattern-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(199, 231, 199, 0.05) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="vision-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Left column - Text content */}
            <div className="vision-text" data-aos="fade-right" data-aos-duration="1000">
              <span className="section-subtitle" style={{
                display: 'block',
                color: 'var(--color-green)',
                fontWeight: '500',
                fontSize: '1.1rem',
                marginBottom: 'var(--spacing-sm)',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>Looking Forward</span>

              <h2 className="section-title" style={{
                color: 'var(--color-brown)',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                paddingBottom: 'var(--spacing-sm)'
              }}>
                {t('vision.title')}
                <span className="title-underline" style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '80px',
                  height: '3px',
                  background: 'var(--color-green)',
                  borderRadius: '3px'
                }}></span>
              </h2>

              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                lineHeight: '1.8',
                color: 'var(--color-dark-gray)',
                marginBottom: 'var(--spacing-lg)'
              }}>{t('vision.content')}</p>

              <div className="vision-features" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div className="vision-feature" data-aos="fade-up" data-aos-delay="100" style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-sm)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                }}>
                  <h4 style={{
                    color: 'var(--color-brown)',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>Quality First</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-gray)' }}>
                    Exceptional specialty and single-origin coffee
                  </p>
                </div>

                <div className="vision-feature" data-aos="fade-up" data-aos-delay="200" style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-sm)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                }}>
                  <h4 style={{
                    color: 'var(--color-brown)',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>Global Reach</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-gray)' }}>
                    Expanding our presence through multiple channels
                  </p>
                </div>
              </div>

              <div className="text-left" data-aos="fade-up" data-aos-delay="300">
                <Link to="/vision" className="btn hover-lift" style={{
                  backgroundColor: 'var(--color-green)',
                  color: 'white',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 10px 20px rgba(76, 125, 77, 0.2)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}>
                  {t('nav.vision')}
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </Link>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="vision-image-container" data-aos="fade-left" data-aos-duration="1000">
              <div className="vision-image" style={{
                width: '100%',
                height: '500px',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                position: 'relative'
              }}>
                <img
                  src={images.vision.coffee_shop}
                  alt="Coffee Shop"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* Decorative elements */}
                <div className="image-frame" style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  width: '100px',
                  height: '100px',
                  border: '3px solid var(--color-green)',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTopLeftRadius: 'var(--border-radius-md)'
                }}></div>

                <div className="image-frame" style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '100px',
                  height: '100px',
                  border: '3px solid var(--color-green)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderBottomRightRadius: 'var(--border-radius-md)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Elegant Cards with Image Background */}
      <section className="section values-section" style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-xxl) 0',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${images.drone.farm9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Decorative elements */}
        <div className="section-decoration" style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(76, 125, 77, 0.2)',
          zIndex: 0
        }}></div>

        <div className="section-decoration" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(93, 42, 12, 0.2)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span className="section-subtitle" data-aos="fade-up" style={{
              display: 'block',
              color: 'var(--color-green)',
              fontWeight: '500',
              fontSize: '1.1rem',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>What We Stand For</span>

            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100" style={{
              color: 'var(--color-brown)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: 'var(--spacing-md)',
              position: 'relative',
              display: 'inline-block'
            }}>
              {t('values.title')}
              <span className="title-underline" style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'var(--color-green)',
                borderRadius: '3px'
              }}></span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="200" style={{
              maxWidth: '700px',
              margin: '0 auto var(--spacing-lg) auto',
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              lineHeight: '1.8',
              color: 'var(--color-dark-gray)'
            }}>
              Our values guide everything we do, from sourcing the finest beans to supporting the communities where our coffee is grown.
            </p>
          </div>

          <div className="values-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="value-card" data-aos="fade-up" data-aos-delay="100" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(76, 125, 77, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaCoffee size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'var(--color-brown)',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>{t('values.qualityAssurance.title')}</h3>

              <p style={{
                color: 'var(--color-dark-gray)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>{t('values.qualityAssurance.content')}</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="200" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(76, 125, 77, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaHandshake size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'var(--color-brown)',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>{t('values.directTrade.title')}</h3>

              <p style={{
                color: 'var(--color-dark-gray)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>{t('values.directTrade.content')}</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="300" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(76, 125, 77, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76, 125, 77, 0.1) 0%, rgba(76, 125, 77, 0) 70%)',
                zIndex: 0
              }}></div>

              <div className="coffee-bean-icon" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 125, 77, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)',
                position: 'relative',
                zIndex: 1
              }}>
                <FaLeaf size={28} color="var(--color-green)" />
              </div>

              <h3 style={{
                color: 'var(--color-brown)',
                fontSize: '1.3rem',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 1
              }}>{t('values.sustainability.title')}</h3>

              <p style={{
                color: 'var(--color-dark-gray)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>{t('values.sustainability.content')}</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }} data-aos="fade-up" data-aos-delay="400">
            <Link to="/values" className="btn glow" style={{
              backgroundColor: 'var(--color-green)',
              color: 'white',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 10px 20px rgba(76, 125, 77, 0.2)',
              border: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              {t('nav.values')}
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialty Coffee Section - Image Background with Gallery */}
      <section className="section specialty-section" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '800px',
        paddingTop: 'var(--spacing-xxl)',
        paddingBottom: 'var(--spacing-xxl)',
        backgroundImage: `url(${images.drone.farm15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay para la sección specialty */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="specialty-content" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-xl)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Logo emblem */}
              <div className="logo-emblem" data-aos="zoom-in" data-aos-duration="1200">
                <div style={{
                  position: 'relative',
                  height: '150px',
                  width: '150px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <FaSeedling size={60} color="var(--color-green)" />
                </div>
              </div>

              {/* Section header */}
              <div className="section-header text-center" style={{ maxWidth: '800px' }}>
                <span className="section-subtitle" data-aos="fade-up" style={{
                  display: 'block',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  fontSize: '1.1rem',
                  marginBottom: 'var(--spacing-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>Our Promise</span>

                <h2 className="section-title" data-aos="fade-up" data-aos-delay="100" style={{
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'var(--spacing-md)',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  {t('home.tagline')}
                  <span className="title-underline" style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '3px',
                    background: 'var(--color-green)',
                    borderRadius: '3px'
                  }}></span>
                </h2>

                <p data-aos="fade-up" data-aos-delay="200" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                  lineHeight: '1.8',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  Experience the rich flavors and aromas of our carefully selected coffee beans,
                  sourced directly from the finest growing regions around the world.
                </p>

                <div className="text-center" data-aos="fade-up" data-aos-delay="300" style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <Link to="/history" className="btn hover-lift" style={{
                    backgroundColor: 'var(--color-green)',
                    color: 'white',
                    border: 'none',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)'
                  }}>
                    {t('nav.history')}
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </Link>
                </div>
              </div>

              {/* Featured image */}
              <div className="specialty-coffee-image" data-aos="fade-up" data-aos-delay="400" style={{
                width: '100%',
                maxWidth: '800px',
                height: '300px',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                margin: '0 auto var(--spacing-xl) auto',
                position: 'relative'
              }}>
                <img
                  src={localImages.drone.farm5}
                  alt="Specialty Coffee"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* Decorative elements */}
                <div className="image-frame" style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  width: '70px',
                  height: '70px',
                  border: '3px solid var(--color-green)',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTopLeftRadius: 'var(--border-radius-md)'
                }}></div>

                <div className="image-frame" style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                  width: '70px',
                  height: '70px',
                  border: '3px solid var(--color-green)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderBottomRightRadius: 'var(--border-radius-md)'
                }}></div>
              </div>

              {/* Image gallery */}
              <div className="image-gallery" data-aos="fade-up" data-aos-delay="500">
                <h3 style={{
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-md)',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                }}>Our Coffee Farms</h3>

                <div className="gallery-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--spacing-md)',
                  width: '100%',
                  marginBottom: 'var(--spacing-xxl)' // Añadido espaciado adicional después del grid
                }}>
                  {[
                    localImages.drone.farm1,
                    localImages.drone.farm2,
                    localImages.drone.farm3,
                    localImages.drone.farm4
                  ].map((image, index) => (
                    <div key={index} className="gallery-item" data-aos="fade-up" data-aos-delay={100 * (index + 1)} style={{
                      height: '250px',
                      borderRadius: 'var(--border-radius-md)',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      position: 'relative',
                      cursor: 'pointer'
                    }}>
                      <img
                        src={image}
                        alt={`Farm View ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1)';
                          e.target.parentElement.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.parentElement.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="gallery-overlay" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                        color: 'white',
                        textAlign: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                        <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>View Farm {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Home;
