import { useEffect, useRef } from 'react';

function BackgroundVideo({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.65, // Default opacity value (darker)
  overlayColor = 'rgba(0, 0, 0, $opacity)', // Default color with opacity placeholder
  playbackRate = 0.5, // Default slower playback rate
  children,
  className = ''
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Attempt to play the video automatically
    if (video) {
      // Set playback rate to slow down the video
      video.playbackRate = playbackRate;

      const playPromise = video.play();

      // Handle potential play() promise rejection
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
          })
          .catch(error => {
            // Autoplay was prevented
            console.log("Autoplay prevented:", error);
            // We could add a play button here if needed
          });
      }
    }

    return () => {
      // Cleanup: pause video when component unmounts
      if (video) {
        video.pause();
      }
    };
  }, [src, playbackRate]);

  // Process the overlay color to replace $opacity with the actual opacity value
  const processedOverlayColor = overlayColor.replace('$opacity', overlayOpacity);

  return (
    <div className={`video-background ${className}`} style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translateX(-50%) translateY(-50%)',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && (
        <div className="video-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: processedOverlayColor,
          zIndex: 1
        }}></div>
      )}

      <div className="video-content" style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        width: '100%'
      }}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundVideo;
