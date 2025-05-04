import { useEffect, useState } from 'react';
import logo from '../assets/images/logofinal.png';

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loading-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div className="logo-container" style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        marginBottom: '30px',
        animation: 'pulse 2s infinite ease-in-out'
      }}>
        <img
          src={logo}
          alt="Kafe 5 Aromas Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
          }}
        />

        {/* Coffee steam animation */}
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '8px',
          height: '10px',
          backgroundColor: '#C0C0C0',
          borderRadius: '50%',
          filter: 'blur(5px)',
          opacity: progress > 30 ? 0.7 : 0,
          animation: 'steam 2s infinite',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '-20px',
          left: 'calc(50% + 10px)',
          width: '6px',
          height: '8px',
          backgroundColor: '#C0C0C0',
          borderRadius: '50%',
          filter: 'blur(5px)',
          opacity: progress > 50 ? 0.7 : 0,
          animation: 'steam 2s infinite 0.3s',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '-18px',
          left: 'calc(50% - 10px)',
          width: '7px',
          height: '9px',
          backgroundColor: '#C0C0C0',
          borderRadius: '50%',
          filter: 'blur(5px)',
          opacity: progress > 40 ? 0.7 : 0,
          animation: 'steam 2s infinite 0.6s',
        }}></div>
      </div>

      <div className="loading-text" style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#5D2A0C',
        marginBottom: '15px',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '1px'
      }}>
        Kafe 5 Aromas
      </div>

      <div className="loading-progress" style={{
        width: '240px',
        height: '6px',
        backgroundColor: 'rgba(93, 42, 12, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(to right, #4C7D4D, #5D2A0C)',
          borderRadius: '3px',
          transition: 'width 0.3s ease',
        }}></div>
      </div>

      <div className="loading-percentage" style={{
        marginTop: '12px',
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
