import { useTranslation } from 'react-i18next';
import { FaCoffee, FaHistory, FaCalendarAlt, FaSeedling } from 'react-icons/fa';
import { localImages } from '../assets/localImages';

function History() {
  const { t } = useTranslation();

  const timelineEvents = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Kafe5aromas was founded with a vision to connect coffee lovers with authentic flavors."
    },
    {
      year: "2017",
      title: "First Partnerships",
      description: "We established our first direct partnerships with coffee farmers in Latin America."
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Our coffee became available in select retail locations and through our online store."
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "We launched our comprehensive sustainability program to support farmers and the environment."
    }
  ];

  return (
    <div className="history-page">
      <section className="hero" style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${localImages.history.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-down">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('history.title')}</h1>
            <div className="divider-gradient"></div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-3">
        <div className="container">
          <div className="history-content">
            <div className="history-image" data-aos="fade-right">
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
                    src={localImages.history.origins}
                    alt="Coffee History"
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

            <div className="history-text" data-aos="fade-left">
              <p className="history-quote" style={{
                fontSize: 'var(--font-size-large)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--color-brown)',
                paddingLeft: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {t('history.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-1">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Journey</h2>

          <div className="timeline" style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: 'var(--spacing-lg) 0'
          }}>
            {/* Timeline center line */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '4px',
              backgroundColor: 'var(--color-brown)',
              transform: 'translateX(-50%)'
            }}></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="timeline-item"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 * index}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  padding: 'var(--spacing-lg) 0',
                  position: 'relative'
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--color-green)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2
                }}></div>

                {/* Content box */}
                <div style={{
                  width: '45%',
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--color-light-gray)',
                  borderRadius: 'var(--border-radius-md)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    <FaCalendarAlt color="var(--color-brown)" style={{ marginRight: 'var(--spacing-sm)' }} />
                    <h3 style={{ color: 'var(--color-brown)' }}>{event.year}</h3>
                  </div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${localImages.history.evolution})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="legacy-content" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-xl)'
          }}>
            <div className="text-center" data-aos="zoom-in">
              <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Our Legacy Continues</h2>
              <div className="divider"></div>
              <p style={{ maxWidth: '800px', margin: '0 auto', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Today, we continue to build on our rich history, honoring our commitment to quality,
                sustainability, and the communities we serve. Each cup of Kafe5aromas coffee tells
                a story of passion, dedication, and the pursuit of excellence.
              </p>
              <div style={{ marginTop: 'var(--spacing-lg)' }}>
                <FaCoffee size={40} className="coffee-bean-icon" color="var(--color-green)" />
              </div>
            </div>

            <div className="drone-images-grid" data-aos="fade-up" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--spacing-md)',
              width: '100%',
              marginBottom: 'var(--spacing-xxl)'
            }}>
              {[
                localImages.history.origins,
                localImages.history.tradition,
                localImages.history.evolution,
                localImages.history.hero
              ].map((image, index) => (
                <div key={index} style={{
                  height: '250px',
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}>
                  <img
                    src={image}
                    alt={`History Image ${index + 1}`}
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

export default History;
