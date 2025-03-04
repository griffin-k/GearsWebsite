import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './sections/Home';
import OurProjects from './sections/OurProjects';

const App: React.FC = () => {
  return (
    <Router>
      <div >
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<OurProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
