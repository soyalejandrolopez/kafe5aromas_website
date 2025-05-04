import { useEffect, useState } from 'react';
import logo from '../assets/images/logofinal.png';

function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Preparando tu experiencia...');

  useEffect(() => {
    // Array of loading messages
    const loadingMessages = [
      'Preparing your experience.',
      'Roasting the beans.',
      'Brewing the perfect cup.', 
      'Connecting with our community.', 
      'Crafting your perfect blend.', 
      'Savoring the aroma.', 
      'Enjoying the flavors.', 
      'Creating memories.', 
      'Sharing the love.', 
      'Thank you for choosing Kafe 5 Aromas.'
    ];

    // Progress timer
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    // Message timer
    const messageTimer = setInterval(() => {
      const messageIndex = Math.floor((progress / 100) * loadingMessages.length);
      setLoadingText(loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]);
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, [progress]);

  return (
    <div className="loading-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      {/* Coffee bean pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'96\' viewBox=\'0 0 60 96\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%235D2A0C\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 10a6 6 0 0 1 12 0v12a6 6 0 0 1-12 0V10zm24 78a6 6 0 0 1-6-6V58a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6zm0-72a6 6 0 0 1-6-6V6a6 6 0 0 1 12 0v4a6 6 0 0 1-6 6zm-24 72a6 6 0 0 1-6-6V58a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6zm0-72a6 6 0 0 1-6-6V6a6 6 0 0 1 12 0v4a6 6 0 0 1-6 6zm-24 72a6 6 0 0 1-6-6V58a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6zm0-72a6 6 0 0 1-6-6V6a6 6 0 0 1 12 0v4a6 6 0 0 1-6 6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5,
        zIndex: -1
      }}></div>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(76, 125, 77, 0.05) 0%, rgba(76, 125, 77, 0) 70%)',
        animation: 'pulse 8s infinite ease-in-out'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(93, 42, 12, 0.05) 0%, rgba(93, 42, 12, 0) 70%)',
        animation: 'pulse 8s infinite ease-in-out 1s'
      }}></div>

      {/* Coffee cup container */}
      <div className="coffee-cup-container" style={{
        position: 'relative',
        width: '150px',
        height: '150px',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Animated coffee cup */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'pulse 2s infinite ease-in-out'
        }}>
          <img
            src={logo}
            alt="Kafe 5 Aromas Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))'
            }}
          />

          {/* Coffee steam animation */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '10px',
            height: '12px',
            backgroundColor: 'rgba(93, 42, 12, 0.4)',
            borderRadius: '50%',
            filter: 'blur(5px)',
            opacity: 0.7,
            animation: 'steam 2s infinite',
          }}></div>

          <div style={{
            position: 'absolute',
            top: '-25px',
            left: 'calc(50% + 12px)',
            width: '8px',
            height: '10px',
            backgroundColor: 'rgba(93, 42, 12, 0.4)',
            borderRadius: '50%',
            filter: 'blur(5px)',
            opacity: 0.7,
            animation: 'steam 2s infinite 0.3s',
          }}></div>

          <div style={{
            position: 'absolute',
            top: '-22px',
            left: 'calc(50% - 12px)',
            width: '9px',
            height: '11px',
            backgroundColor: 'rgba(93, 42, 12, 0.4)',
            borderRadius: '50%',
            filter: 'blur(5px)',
            opacity: 0.7,
            animation: 'steam 2s infinite 0.6s',
          }}></div>
        </div>

        {/* Circular progress indicator */}
        <svg
          style={{
            position: 'absolute',
            top: -10,
            left: -10,
            width: 'calc(100% + 20px)',
            height: 'calc(100% + 20px)',
            transform: 'rotate(-90deg)'
          }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(76, 125, 77, 0.1)"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.3s ease'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4C7D4D" />
              <stop offset="100%" stopColor="#5D2A0C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Loading text with animation */}
      <div className="loading-text" style={{
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#5D2A0C',
        marginBottom: '25px',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '1px',
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease-in-out'
      }}>
        Kafe 5 Aromas
      </div>

      {/* Loading message */}
      <div style={{
        fontSize: '16px',
        color: '#5D2A0C',
        marginBottom: '30px',
        opacity: 0.8,
        fontStyle: 'italic',
        animation: 'fadeIn 0.5s ease-in-out',
        minHeight: '24px',
        textAlign: 'center'
      }}>
        {loadingText}
      </div>

      {/* Progress bar */}
      <div className="loading-progress" style={{
        width: '280px',
        height: '8px',
        backgroundColor: 'rgba(93, 42, 12, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(to right, #4C7D4D, #5D2A0C)',
          borderRadius: '4px',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 8px rgba(76, 125, 77, 0.5)'
        }}></div>
      </div>

      {/* Progress percentage */}
      <div className="loading-percentage" style={{
        marginTop: '15px',
        fontSize: '16px',
        color: '#5D2A0C',
        fontWeight: '500'
      }}>
        {progress}%
      </div>
    </div>
  );
}

export default Loading;
