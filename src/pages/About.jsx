import { useTranslation } from 'react-i18next';
import { FaCoffee, FaUsers, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';
import { images } from '../assets/images';

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
      <section className="hero bg-pattern-3 parallax" data-aos="fade-down">
        <div className="container">
          <h1 className="section-title text-gradient">{t('about.title')}</h1>
          <div className="divider-gradient"></div>
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
                    src={images.about.team}
                    alt="Coffee Team"
                    className="pulse"
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
          </div>
        </div>
      </section>

      <section className="section bg-gradient-1 animated-bg">
        <div className="container">
          <div className="team-section text-center" data-aos="fade-up">
            <h2>Our Team</h2>
            <div className="divider"></div>
            <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-xl)' }}>
              Our dedicated team of coffee enthusiasts works tirelessly to bring you the finest
              specialty and single-origin coffees while supporting sustainable farming practices.
            </p>

            <div className="team-members" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-lg)'
            }}>
              {[1, 2, 3].map((member, index) => (
                <div
                  key={index}
                  className="team-member hover-lift"
                  data-aos="flip-left"
                  data-aos-delay={100 * index}
                  style={{
                    width: '250px',
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={images.about.coffee_tasting}
                      alt={`Team Member ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: `hue-rotate(${index * 60}deg)`,
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <p style={{ color: 'var(--color-green)', marginBottom: 'var(--spacing-xs)' }}>

                    </p>
                    <p>Passionate about bringing the best coffee experiences to our customers.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-2">
        <div className="container">
          <div className="coffee-tasting-image" data-aos="fade-up" style={{
            width: '100%',
            maxWidth: '800px',
            height: '300px',
            margin: '0 auto',
            borderRadius: 'var(--border-radius-md)',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src={images.general.coffee_beans}
              alt="Coffee Beans"
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
      </section>
    </div>
  );
}

export default About;
