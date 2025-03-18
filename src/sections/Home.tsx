import React from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import RegisterCard from '../components/RegisterCard';
import UpcomingActivities from '../components/UpcomingActivities';
import ResearchProjects from '../components/ResearchProjects';
import AboutUs from '../components/AboutUs';
import About from '../components/About';
import LeadershipTeam from '../components/LeadershipTeam';
import Footer from '../components/Footer';
import FloatingChatIcon from '../components/FloatingChatIcon';
import OurProjects from './OurProjects';






const Home: React.FC = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <About/>
    <RegisterCard/>
    <AboutUs/>
    <LeadershipTeam/>
    <UpcomingActivities/>
    <ResearchProjects/>
    <FloatingChatIcon />
     <Footer/>
    </>
  );
};

export default Home;
