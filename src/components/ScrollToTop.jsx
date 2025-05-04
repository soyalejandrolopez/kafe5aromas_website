import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 'var(--z-tooltip)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-green)',
            color: 'var(--color-white)',
            border: 'none',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            opacity: 0.8
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.opacity = '0.8';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
