import { useTranslation } from 'react-i18next';
import { FaCoffee, FaLeaf, FaHandshake } from 'react-icons/fa';
import { images, videos } from '../assets/images';
import BackgroundVideo from '../components/BackgroundVideo';

function Mission() {
  const { t } = useTranslation();

  const missionPoints = [
    {
      icon: <FaCoffee />,
      title: "Quality Coffee",
      description: "We source only the finest specialty and single-origin coffees."
    },
    {
      icon: <FaHandshake />,
      title: "Direct Partnerships",
      description: "We partner directly with farmers to ensure fair pricing and support."
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description: "We promote environmentally sustainable practices throughout our supply chain."
    }
  ];

  return (
    <div className="mission-page">
      <section className="hero" style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images.mission.farmers})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-down">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('mission.title')}</h1>
            <div className="divider-gradient"></div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-1">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text" data-aos="fade-right">
              <p className="mission-quote" style={{
                fontSize: 'var(--font-size-large)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--color-brown)',
                paddingLeft: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {t('mission.content')}
              </p>

              <div className="mission-points">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="mission-point"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: 'var(--spacing-md)',
                      padding: 'var(--spacing-md)',
                      backgroundColor: 'var(--color-light-gray)',
                      borderRadius: 'var(--border-radius-md)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  >
                    <div style={{
                      marginRight: 'var(--spacing-md)',
                      color: 'var(--color-green)',
                      fontSize: '1.5rem'
                    }}>
                      {point.icon}
                    </div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-image" data-aos="fade-left">
              <div className="img-overlay">
                <div
                  style={{
                    height: '400px',
                    borderRadius: 'var(--border-radius-md)',
                    boxShadow: '0 10px 30px rgba(93, 42, 12, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={images.mission.farmers}
                    alt="Coffee Farmers"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--border-radius-md)',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.mission.coffee_plantation})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="container">
            <div className="commitment-content" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-xl)'
            }}>
              <div className="text-center" data-aos="zoom-in">
                <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Our Commitment</h2>
                <div className="divider"></div>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                  At Kafe5aromas, we are committed to delivering exceptional coffee experiences while supporting
                  sustainable farming practices and fair trade relationships with our coffee producers.
                </p>
              </div>

              <div className="drone-images-grid" data-aos="fade-up" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)',
                width: '100%',
                marginBottom: 'var(--spacing-xxl)' // Añadido espaciado adicional después del grid
              }}>
                {[
                  images.drone.farm5,
                  images.drone.farm6,
                  images.drone.farm7,
                  images.drone.farm8
                ].map((image, index) => (
                  <div key={index} style={{
                    height: '250px', // Aumentado la altura para coincidir con la página de inicio
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
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
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Mission;
