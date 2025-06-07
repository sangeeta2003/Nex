import React from 'react';

const VideoBackground = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        className='w-screen aspect-video'
        src="https://www.youtube.com/embed/ofUOATVjKF0?si=8PTlKE164VC4es6G&autoplay=1&mute=1&loop=1&playlist=ofUOATVjKF0"

        title="YouTube video player"
        frameBorder="0"
       
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
