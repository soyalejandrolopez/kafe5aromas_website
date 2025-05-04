import { useTranslation } from 'react-i18next';
import {
  FaCoffee,
  FaLeaf,
  FaHandshake,
  FaSeedling,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaBalanceScale
} from 'react-icons/fa';
import { localImages } from '../assets/localImages';

function Values() {
  const { t } = useTranslation();

  const values = [
    { key: 'qualityAssurance', icon: <FaCoffee size={30} /> },
    { key: 'farmerEmpowerment', icon: <FaSeedling size={30} /> },
    { key: 'directTrade', icon: <FaHandshake size={30} /> },
    { key: 'sustainability', icon: <FaLeaf size={30} /> },
    { key: 'customerExperience', icon: <FaUsers size={30} /> },
    { key: 'innovation', icon: <FaLightbulb size={30} /> },
    { key: 'community', icon: <FaGlobe size={30} /> },
    { key: 'transparency', icon: <FaBalanceScale size={30} /> }
  ];

  return (
    <div className="values-page">
      <section className="hero" style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${localImages.values.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} data-aos="fade-down">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('values.title')}</h1>
            <div className="divider-gradient"></div>
          </div>
        </div>
      </section>

      <section className="section bg-pattern-1">
        <div className="container">
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                className="value-card staggered-item hover-lift"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
              >
                <div className="value-icon coffee-bean-icon">
                  {value.icon}
                </div>
                <h3 className="animated-border">{t(`values.${value.key}.title`)}</h3>
                <p>{t(`values.${value.key}.content`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${localImages.values.community})`,
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
              <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{t('home.tagline')}</h2>
              <div className="divider"></div>
              <p style={{ maxWidth: '800px', margin: '0 auto', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                {t('mission.content')}
              </p>
            </div>

            <div className="drone-images-grid" data-aos="fade-up" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--spacing-md)',
              width: '100%',
              marginBottom: 'var(--spacing-xxl)'
            }}>
              {[
                localImages.values.quality,
                localImages.values.innovation,
                localImages.values.community,
                localImages.values.hero
              ].map((image, index) => (
                <div key={index} style={{
                  height: '250px',
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}>
                  <img
                    src={image}
                    alt={`Value Image ${index + 1}`}
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

export default Values;
