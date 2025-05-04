"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18n from "../i18n/i18n"
import { FaGlobeAmericas, FaBars, FaTimes } from "react-icons/fa"
import { localImages } from "../assets/localImages"
import logo from "../assets/images/logofinal.png"
import LanguageSwitcher from "./LanguageSwitcher"
import '../styles/Header.css'

function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Google Translate is now handling language changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);

    // Check for stored language preference
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      // Aplicar el idioma guardado
      i18n.changeLanguage(storedLanguage);
    } else {
      // Asegurar que el idioma por defecto sea inglés
      i18n.changeLanguage('en');
    }
  }, [location, i18n])

  const isHomePage = location.pathname === "/"

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${isHomePage ? "transparent" : ""}`}
      style={{
        transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
        boxShadow: scrolled ? "0 8px 20px rgba(0, 0, 0, 0.08)" : "none",
        backgroundColor: scrolled || !isHomePage
          ? "rgba(255, 255, 255, 0.92)"
          : "transparent",
        backdropFilter: scrolled || !isHomePage ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled || !isHomePage ? "blur(10px)" : "none",
        position: isHomePage ? "absolute" : "fixed",
        width: "100%",
        zIndex: 1000,
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <div
              className="logo-wrapper"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: scrolled
                  ? "0 8px 20px rgba(76, 125, 77, 0.15)"
                  : "0 15px 35px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                height: scrolled ? "100px" : "120px",
                width: scrolled ? "100px" : "120px",
                overflow: "hidden",
                transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                transform: scrolled ? "translateY(0)" : "translateY(5px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = scrolled
                  ? "translateY(-5px) scale(1.05)"
                  : "translateY(0) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(76, 125, 77, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = scrolled
                  ? "translateY(0)"
                  : "translateY(5px)";
                e.currentTarget.style.boxShadow = scrolled
                  ? "0 8px 20px rgba(76, 125, 77, 0.15)"
                  : "0 15px 35px rgba(0, 0, 0, 0.2)";
              }}
            >
              <img
                src={logo || "/placeholder.svg"}
                alt="Kafe 5 Aromas"
                className="logo"
                style={{
                  maxHeight: scrolled ? "80px" : "100px",
                  maxWidth: scrolled ? "80px" : "100px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  animation: "pulse 2s infinite ease-in-out"
                }}
              />
            </div>
          </Link>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              color: "var(--color-green)",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "var(--shadow-md)",
              position: "relative",
              zIndex: 1001
            }}
          >
            {isMenuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>

          <nav
            className={`main-nav ${isMenuOpen ? "active" : ""}`}
            style={{
              transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              boxShadow: isMenuOpen ? "0 10px 30px rgba(0, 0, 0, 0.25)" : "none",
              borderRadius: "var(--border-radius-lg)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="mobile-nav-header" style={{
              display: "none",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "var(--spacing-md)",
              borderBottom: "1px solid rgba(76, 125, 77, 0.1)",
              marginBottom: "var(--spacing-md)",
              background: "linear-gradient(to right, rgba(76, 125, 77, 0.05), rgba(76, 125, 77, 0.02))",
              borderRadius: "var(--border-radius-lg) var(--border-radius-lg) 0 0"
            }}>
              <h3 style={{
                margin: 0,
                color: "var(--color-brown)",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
                textShadow: "none",
                letterSpacing: "0.5px",
                fontSize: "1.2rem"
              }}>
                <img
                  src={logo}
                  alt="Kafe 5 Aromas"
                  style={{
                    width: "30px",
                    height: "auto"
                  }}
                />
                Menu
              </h3>
              <button
                onClick={toggleMenu}
                style={{
                  background: "rgba(76, 125, 77, 0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "var(--color-green)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isHomePage && !scrolled
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(76, 125, 77, 0.2)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isHomePage && !scrolled
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(76, 125, 77, 0.1)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ×
              </button>
            </div>

            <ul className="nav-list">
              {[
                { path: "/", label: t("nav.home") },
                { path: "/about", label: t("nav.about") },
                { path: "/mission", label: t("nav.mission") },
                { path: "/values", label: t("nav.values") },
                { path: "/vision", label: t("nav.vision") },
                { path: "/history", label: t("nav.history") },
                { path: "/contact", label: t("nav.contact") },
              ].map((item, index) => (
                <li key={index} className="staggered-item" style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) ${index * 0.08}s`,
                  margin: "4px 0"
                }}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? "active animated-border" : "animated-border"}
                    style={{
                      position: "relative",
                      color: location.pathname === item.path
                        ? "var(--color-green)"
                        : "var(--color-dark-gray)",
                      fontWeight: location.pathname === item.path ? "600" : "500",
                      textShadow: "none",
                      display: "flex",
                      alignItems: "center",
                      padding: "var(--spacing-sm) var(--spacing-md)",
                      borderRadius: "30px",
                      transition: "all 0.3s ease",
                      background: location.pathname === item.path
                        ? "rgba(76, 125, 77, 0.1)"
                        : "transparent",
                      boxShadow: location.pathname === item.path
                        ? "0 4px 10px rgba(76, 125, 77, 0.1)"
                        : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== item.path) {
                        e.currentTarget.style.background = "rgba(76, 125, 77, 0.05)";
                        e.currentTarget.style.transform = "translateX(5px)";
                      } else {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== item.path) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.transform = "translateX(0)";
                      } else {
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    {/* Dot indicator for active link */}
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: location.pathname === item.path ? "var(--color-green)" : "transparent",
                        marginRight: "var(--spacing-sm)",
                        transition: "all 0.3s ease",
                        boxShadow: location.pathname === item.path ? "0 0 8px rgba(76, 125, 77, 0.5)" : "none"
                      }}
                    ></span>

                    {item.label}

                    {location.pathname === item.path && (
                      <span
                        style={{
                          position: "absolute",
                          right: "var(--spacing-sm)",
                          width: "4px",
                          height: "4px",
                          backgroundColor: "var(--color-green)",
                          borderRadius: "50%",
                          boxShadow: "0 0 8px rgba(76, 125, 77, 0.5)"
                        }}
                      ></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="language-switcher" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "var(--spacing-lg)",
              padding: "var(--spacing-md)",
              borderTop: "1px solid rgba(76, 125, 77, 0.1)",
              background: "linear-gradient(to right, rgba(76, 125, 77, 0.02), rgba(76, 125, 77, 0.05), rgba(76, 125, 77, 0.02))"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <FaGlobeAmericas
                    style={{
                      color: "var(--color-green)",
                      filter: "drop-shadow(0 2px 3px rgba(76, 125, 77, 0.2))",
                      fontSize: "1.2rem"
                    }}
                  />
                  <span style={{
                    color: "var(--color-dark-gray)",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}>
                    Language:
                  </span>
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
