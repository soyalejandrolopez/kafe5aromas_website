import { useTranslation } from 'react-i18next';
import { FaCoffee, FaUsers, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';
import { localImages } from '../assets/localImages';

function About() {
  const { t } = useTranslation();

  const teamValues = [
    {
      icon: <FaCoffee />,
      title: "Passion for Coffee",
      description: "We are dedicated enthusiasts who love every aspect of specialty coffee."
    },
    {
      icon: <FaUsers />,
      title: "Community Focus",
      description: "We believe in building strong relationships with farmers and customers alike."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Quality Commitment",
      description: "We are committed to delivering exceptional coffee experiences."
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description: "We are dedicated to environmentally responsible practices."
    }
  ];

  return (
    <div className="about-page">
      <section className="hero" style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${localImages.about.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-down">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('about.title')}</h1>
            <div className="divider-gradient"></div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-1">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p className="about-quote" style={{
                fontSize: 'var(--font-size-large)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--color-brown)',
                paddingLeft: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {t('about.content')}
              </p>

              <div className="about-values" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-xl)'
              }}>
                {teamValues.map((value, index) => (
                  <div
                    key={index}
                    className="about-value hover-lift"
                    data-aos="zoom-in"
                    data-aos-delay={100 * index}
                    style={{
                      padding: 'var(--spacing-md)',
                      backgroundColor: 'var(--color-light-gray)',
                      borderRadius: 'var(--border-radius-md)',
                      textAlign: 'center',
                      height: '100%',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div style={{
                      color: 'var(--color-green)',
                      fontSize: '2rem',
                      marginBottom: 'var(--spacing-sm)'
                    }}>
                      {value.icon}
                    </div>
                    <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-image" data-aos="fade-left">
              <div className="img-overlay">
                <div
                  style={{
                    height: '400px',
                    borderRadius: 'var(--border-radius-md)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={localImages.about.team}
                    alt="Coffee Team"
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${localImages.about.process})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="team-section text-center" data-aos="zoom-in">
            <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Our Team</h2>
            <div className="divider"></div>
            <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-xl)', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Our dedicated team of coffee enthusiasts works tirelessly to bring you the finest
              specialty and single-origin coffees while supporting sustainable farming practices.
            </p>

            <div className="team-members" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-lg)'
            }}>
              {[
                localImages.about.team,
                localImages.about.process,
                localImages.about.expertise
              ].map((image, index) => (
                <div
                  key={index}
                  className="team-member"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                  style={{
                    width: '250px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <div style={{
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={image}
                      alt={`Team Member ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: 'var(--spacing-md)', color: 'white' }}>
                    <h4 style={{ color: 'white', marginBottom: 'var(--spacing-xs)' }}>
                      Coffee Expert {index + 1}
                    </h4>
                    <p>Passionate about bringing the best coffee experiences to our customers.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{
        padding: 'var(--spacing-xxl) 0',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #f1f3f5 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="drone-images-grid" data-aos="fade-up" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-md)',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              localImages.general.beans,
              localImages.general.cup,
              localImages.general.farm,
              localImages.general.brewing
            ].map((image, index) => (
              <div key={index} style={{
                height: '250px',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}>
                <img
                  src={image}
                  alt={`Coffee Image ${index + 1}`}
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
      </section>
    </div>
  );
}

export default About;
