import React, { useState, useEffect } from 'react';

// Utility function to format time
const formatTime = (time: number) => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  
  return { days, hours, minutes};
};

const RegisterCard: React.FC = React.memo(() => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const registrationDate = new Date('2024-10-01T00:00:00').getTime(); // Set your registration opening date here

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = registrationDate - now;
      setTimeLeft(difference);
    };

    calculateTimeLeft(); // Initial call

    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [registrationDate]);

  const { days, hours, minutes } = formatTime(timeLeft);

  return (
    <div className="relative px-4 py-8 md:px-8 md:py-12 bg-mybg flex items-center justify-center">
      <div className="absolute inset-0 bg-black myopacity"></div>
      
      
      {/* Glassmorphic Card */}
      <div id='join' className="p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-lg md:max-w-xl bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg rounded-2xl">
      
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Registration Opening Soon!
        </h2>
        <div className="mx-auto rounded-xl w-20 sm:w-24 mt-4 mb-6 h-1 bg-white"></div>
        <div className="text-center text-2xl sm:text-3xl font-semibold text-white">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-black/50 p-4 rounded-lg">
              <span className="block text-3xl sm:text-4xl font-bold">{days}</span>
              <span className="block text-sm sm:text-lg">Days</span>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <span className="block text-3xl sm:text-4xl font-bold">{hours}</span>
              <span className="block text-sm sm:text-lg">Hours</span>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <span className="block text-3xl sm:text-4xl font-bold">{minutes}</span>
              <span className="block text-sm sm:text-lg">Minutes</span>
            </div>
            {/* <div className="bg-black/50 p-4 rounded-lg">
              <span className="block text-3xl sm:text-4xl font-bold">{seconds}</span>
              <span className="block text-sm sm:text-lg">Seconds</span>
            </div> */}
          </div>
          <p className="text-lg sm:text-xl text-white mt-4">
            Get ready for registration!
          </p>
        </div>
      </div>
    </div>
  );
});

export default RegisterCard;
