import { useTranslation } from 'react-i18next';
import { FaCoffee, FaStore, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import { images, videos } from '../assets/images';
import BackgroundVideo from '../components/BackgroundVideo';

function Vision() {
  const { t } = useTranslation();

  const visionPillars = [
    {
      icon: <FaCoffee />,
      title: "Exceptional Quality",
      description: "Delivering the finest specialty and single-origin coffees."
    },
    {
      icon: <FaStore />,
      title: "Retail & Wholesale",
      description: "Expanding our presence through multiple channels."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Sustainability",
      description: "Promoting environmentally responsible practices."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Connecting coffee enthusiasts with authentic flavors."
    }
  ];

  return (
    <div className="vision-page">
      <section className="hero" style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${images.vision.coffee_future})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-down">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('vision.title')}</h1>
            <div className="divider-gradient"></div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-3">
        <div className="container">
          <div className="vision-content">
            <div className="vision-image" data-aos="fade-right">
              <div className="img-overlay">
                <div
                  style={{
                    height: '400px',
                    borderRadius: 'var(--border-radius-md)',
                    boxShadow: '0 10px 30px rgba(15, 77, 46, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={images.vision.coffee_shop}
                    alt="Coffee Shop"
                    className="floating"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--border-radius-md)',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="vision-text" data-aos="fade-left">
              <p className="vision-quote" style={{
                fontSize: 'var(--font-size-large)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--color-green)',
                paddingLeft: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {t('vision.content')}
              </p>

              <div className="vision-pillars" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)'
              }}>
                {visionPillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="vision-pillar card-hover-effect"
                    data-aos="zoom-in"
                    data-aos-delay={100 * index}
                    style={{
                      padding: 'var(--spacing-md)',
                      backgroundColor: 'var(--color-light-gray)',
                      borderRadius: 'var(--border-radius-md)',
                      textAlign: 'center',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      color: 'var(--color-green)',
                      fontSize: '2rem',
                      marginBottom: 'var(--spacing-sm)'
                    }}>
                      {pillar.icon}
                    </div>
                    <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-1 animated-bg">
        <div className="container">
          <div className="future-content" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-xl)'
          }}>
            <div className="text-center" data-aos="fade-up">
              <h2>Our Future</h2>
              <div className="divider"></div>
              <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                We envision a future where Kafe5aromas is recognized globally for its commitment to quality,
                sustainability, and direct partnerships with farmers, creating a positive impact on communities
                and delivering exceptional coffee experiences.
              </p>
            </div>

            <div className="barista-image" data-aos="zoom-in" style={{
              width: '100%',
              maxWidth: '800px',
              height: '300px',
              borderRadius: 'var(--border-radius-md)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={images.vision.barista}
                alt="Barista"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;
