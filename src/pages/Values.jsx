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
      <section className="hero bg-pattern-2" data-aos="fade-down">
        <div className="container">
          <h1 className="section-title text-gradient">{t('values.title')}</h1>
          <div className="divider-gradient"></div>
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

      <section className="section bg-gradient-1">
        <div className="container text-center">
          <div data-aos="fade-up">
            <h2>{t('home.tagline')}</h2>
            <p className="fade-in" style={{ maxWidth: '800px', margin: '0 auto', marginTop: 'var(--spacing-md)' }}>
              {t('mission.content')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Values;
