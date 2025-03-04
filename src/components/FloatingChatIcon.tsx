import React, { useState, useRef, useEffect } from 'react';

const FloatingChatIcon: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 500); // Hide after 5 seconds
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isPlaying && !showPopup) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1000); // Hide popup after 4 seconds
      }
    };

    const handleAudioEnded = () => {
      setIsPlaying(false); // Revert button to play state when audio ends
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying, showPopup]);

  return (
    <div>
      {/* Floating Chat Button */}
      <div className="fixed bottom-5 z-10 right-5">
        <button
          onClick={handleButtonClick}
          className="
            p-4 bg-mybg text-white rounded-full 
            shadow-2xl transform hover:scale-105 transition-transform duration-300 
            focus:outline-none focus:ring-4 focus:ring-blue-300
          "
          aria-label={isPlaying ? 'Stop' : 'Play'}
        >
          {/* Toggle between Play and Stop Icon */}
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.756A1 1 0 007 8.083v7.834a1 1 0 001.234.951l6.518-3.756a1 1 0 000-1.7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/luna.wav" />

      {/* Popup Message with Glassmorphic and Animated Effect */}
      {showPopup && (
        <div
          className={`
            fixed bottom-24 z-10 right-12 p-4 rounded-lg 
            backdrop-blur-lg bg-white/30 border border-gray-200 shadow-lg
            transition-opacity duration-500 ease-in-out
            animate-bounce-slow opacity-100 translate-y-0
            max-w-xs
          `}
        >
          {/* Speech Bubble Tail */}
          <div className="absolute bottom-[-10px] right-4 w-5 h-5 bg-white/30 border border-gray-200 backdrop-blur-lg transform rotate-45"></div>

          <p className="text-white font-semibold text-md flex items-center">
            <span className="mr-2">👋</span>
            <span className='text-white'>Hey, I’m Luna. Want to listen to some details about Us?</span>
          </p>    </div>
      )}
    </div>
  );
};

export default FloatingChatIcon;
