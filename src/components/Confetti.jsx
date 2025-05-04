import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

function Confetti() {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Hide confetti after 6 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    showConfetti && (
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.1}
        colors={['#4C7D4D', '#5D2A0C', '#C0C0C0', '#8B4513', '#F5DEB3']}
        confettiSource={{
          x: windowDimension.width / 2,
          y: 0,
          w: 0,
          h: 0,
        }}
      />
    )
  );
}

export default Confetti;
