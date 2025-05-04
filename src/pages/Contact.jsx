import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCoffee, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { images } from '../assets/images';

function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formState.name}%0AEmail: ${formState.email}%0AMessage: ${formState.message}`;

    // Create WhatsApp URL with the formatted message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=19175094157&text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success message
    setFormSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="hero parallax" data-aos="fade-down" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.contact.coffee_shop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1 className="section-title" style={{ color: 'white' }}>{t('contact.title')}</h1>
          <div className="divider-gradient"></div>
        </div>
      </section>

      <section className="section bg-pattern-1">
        <div className="container">
          <div className="contact-content" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)' }}>
            <div className="contact-info" data-aos="fade-right" style={{ flex: '1', minWidth: '300px' }}>
              <div className="contact-card" style={{
                backgroundColor: 'var(--color-light-gray)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                marginBottom: 'var(--spacing-md)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
              }}>
                <div className="contact-item">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--color-green)'
                  }}>
                    <FaEnvelope size={20} style={{ marginRight: 'var(--spacing-sm)' }} />
                    <h3>{t('contact.email')}:</h3>
                  </div>
                  <a href="mailto:contact@kafe5aromas.com" className="animated-border">contact@kafe5aromas.com</a>
                </div>
              </div>

              <div className="contact-card" style={{
                backgroundColor: 'var(--color-light-gray)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                marginBottom: 'var(--spacing-md)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
              }}>
                <div className="contact-item">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--color-green)'
                  }}>
                    <FaPhone size={20} style={{ marginRight: 'var(--spacing-sm)' }} />
                    <h3>{t('contact.phone')}:</h3>
                  </div>
                  <a href="tel:9175094157" className="animated-border">917-509-4157</a>
                </div>
              </div>

              <div className="contact-image" data-aos="fade-up" style={{
                width: '100%',
                height: '200px',
                marginTop: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src={images.general.coffee_cup}
                  alt="Coffee Cup"
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

            <div className="contact-form" data-aos="fade-left" style={{ flex: '2', minWidth: '300px' }}>
              {formSubmitted ? (
                <div className="form-success" style={{
                  backgroundColor: '#25D366', // WhatsApp green color
                  color: 'var(--color-white)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--border-radius-md)',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease',
                  boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
                }}>
                  <FaWhatsapp size={40} style={{ marginBottom: 'var(--spacing-md)' }} />
                  <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Message sent to WhatsApp!</h3>
                  <p>We'll respond to your message as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glow" style={{
                  backgroundColor: 'var(--color-white)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--border-radius-md)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-brown)' }}>Send us a message</h2>

                  <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="animated-border"
                    />
                  </div>

                  <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="animated-border"
                    />
                  </div>

                  <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="animated-border"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn hover-lift"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--spacing-sm)',
                      backgroundColor: '#25D366', // WhatsApp green color
                      color: 'white',
                      fontWeight: '600',
                      padding: 'var(--spacing-sm) var(--spacing-lg)',
                      borderRadius: '30px',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    <FaWhatsapp size={20} />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${images.general.coffee_beans})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container">
          <div className="connect-content" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-xl)'
          }}>
            <div className="text-center" data-aos="zoom-in">
              <h2>Connect With Us</h2>
              <div className="divider"></div>
              <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                We'd love to hear from you! Whether you have questions about our coffee,
                want to learn more about our partnerships with farmers, or are interested
                in wholesale opportunities, we're here to help.
              </p>
            </div>

            <div className="coffee-beans-image" data-aos="fade-up" style={{
              width: '100%',
              maxWidth: '800px',
              height: '300px',
              borderRadius: 'var(--border-radius-md)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              margin: '0 auto'
            }}>
              <img
                src={images.values.quality}
                alt="Coffee Quality"
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

export default Contact;
