"use client";

import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaWhatsapp
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from "../assets/images/logofinal.png";
// Usar una imagen más pequeña o un color de fondo en lugar de la imagen grande
// import backgroundImage from "../assets/images/DJI_20240523145421_0001_D.JPG";
import '../styles/animations.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{
      backgroundColor: "#1a1a1a",
      color: "#fff",
      position: "relative",
      paddingTop: "80px",
      marginTop: "50px",
      overflow: "hidden"
    }}>
      {/* Background Color instead of Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#111",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.1,
        zIndex: 1
      }}></div>

      {/* Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(26, 26, 26, 0.97)",
        zIndex: 2
      }}></div>

      {/* Decorative wave shape */}
      <div className="footer-wave" style={{
        position: "absolute",
        top: "-70px",
        left: 0,
        width: "100%",
        height: "70px",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%234c7d4d'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%234c7d4d'%3E%3C/path%3E%3C/svg%3E\")",
        backgroundSize: "100% 100%",
        animation: "wave 15s linear infinite",
        zIndex: 3
      }}></div>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px", position: "relative", zIndex: 3 }}>
        <div className="footer-content" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "50px",
          padding: "50px 0"
        }}>
          {/* Brand Section */}
          <div className="footer-brand" data-aos="fade-right">
            <Link to="/" className="footer-logo-link" style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px"
            }}>
              <div className="logo-wrapper float-slow" style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "10px",
                width: "80px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 20px rgba(76, 125, 77, 0.2)"
              }}>
                <img
                  src={logo}
                  alt="Kafe 5 Aromas"
                  style={{
                    width: "60px",
                    height: "auto",
                    objectFit: "contain"
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  color: "#fff"
                }}>Kafe 5 Aromas</h3>
                <p style={{ color: "#fff", fontSize: "0.9rem" }}>Premium Coffee Experience</p>
              </div>
            </Link>
            <p style={{
              color: "#fff",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>
              Discover the unique experience of our specialty coffee, grown with passion and roasted to perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links" data-aos="fade-up">
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              marginBottom: "20px",
              position: "relative"
            }}>Quick Links
              <span className="divider-gradient" style={{
                position: "absolute",
                bottom: "-10px",
                left: "0",
                width: "40px",
                height: "3px"
              }}></span>
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Mission', path: '/mission' },
                { name: 'Vision', path: '/vision' },
                { name: 'Values', path: '/values' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    to={item.path}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#4c7d4d"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
                  >
                    <FaLeaf size={12} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              marginBottom: "20px",
              position: "relative"
            }}>Contact Us
              <span className="divider-gradient" style={{
                position: "absolute",
                bottom: "-10px",
                left: "0",
                width: "40px",
                height: "3px"
              }}></span>
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <a
                href="tel:+19175094157"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#4c7d4d"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
              >
                <FaPhone /> 917-509-4157
              </a>
              <a
                href="mailto:contact@kafe5aromas.com"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#4c7d4d"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
              >
                <FaEnvelope /> contact@kafe5aromas.com
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=19175094157"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#4c7d4d"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
              >
                <FaWhatsapp /> WhatsApp Support: 1-917-509-4157
              </a>
              <p style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <FaMapMarkerAlt /> 7616 4th Ave, North Bergen, New Jersey 07047
              </p>

            </div>
          </div>

          {/* Social Media */}
          <div className="footer-social" data-aos="fade-left">
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              marginBottom: "20px",
              position: "relative"
            }}>Follow Us
              <span className="divider-gradient" style={{
                position: "absolute",
                bottom: "-10px",
                left: "0",
                width: "40px",
                height: "3px"
              }}></span>
            </h4>
            <div style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px"
            }}>
              {[
                { icon: FaFacebookF, link: "https://facebook.com/kafe5aromas", name: "Facebook" },
                { icon: FaInstagram, link: "https://instagram.com/kafe5aromas", name: "Instagram" },
                { icon: FaTwitter, link: "https://twitter.com/kafe5aromas", name: "Twitter" },
                { icon: FaTiktok, link: "https://tiktok.com/@kafe5aromas", name: "TikTok" },
                { icon: FaWhatsapp, link: "https://api.whatsapp.com/send?phone=19175094157", name: "WhatsApp" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link glow"
                  title={social.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#4c7d4d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 8px rgba(76, 125, 77, 0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(76, 125, 77, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(76, 125, 77, 0.2)";
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p style={{ color: "#fff", fontSize: "0.9rem" }}>
              Stay connected with us on social media for updates and special offers!
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 0",
          textAlign: "center",
          color: "#fff",
          fontSize: "0.9rem"
        }}>
          <p style={{ marginBottom: "10px" }}>
            Made with <FaHeart style={{ color: "#4c7d4d", margin: "0 5px" }} /> by Kafe 5 Aromas
          </p>
          <p>
            © {currentYear} Kafe 5 Aromas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

