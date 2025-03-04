import React from 'react';
import TypingEffect from 'react-typing-effect';



const Hero: React.FC = React.memo(() => {
  return (
    <section id='home' className="relative padding-x w-full h-screen overflow-hidden bg-gradient-to-b from-transparent via-black to-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black myopacity "></div> 
 

      {/* Content */}
      <div className="relative flex items-center justify-start h-full text-left text-white px-12">
        
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
            <TypingEffect
              text={['Welcome to GEARS', 'Where Innovation Meets Automation.', 'Exploring New Horizons with Robotics']}
              speed={100}
              eraseSpeed={50}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              displayTextRenderer={(text) => <>{text}</>}
            />
          </h1>
          <p className="text-md md:text-xl mb-8">
            Discover our projects and initiatives that are shaping the future of robotics.
          </p>
          <a
          href='#join'
           type="button" className="text-white bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:bg-gradient-to-bl hover:from-cyan-500 hover:to-blue-500 hover:border-transparent hover:shadow-xl">Join Us</a>

        </div>
      </div>
    </section>
  );
});

export default Hero;
