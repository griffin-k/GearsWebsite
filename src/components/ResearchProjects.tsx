import React from 'react';

const projects = [
  {
    title: 'Eco Trim',
    description: 'Aims to deliver innovative, budget-friendly solutions for autonomous lawn mowers.',
    imageUrl: '/assets/projects/mover.webp', 
    author: 'Karimullah', 
  },
  {
    title: 'Brake Link',
    description: 'Targeting the development of an IoT-integrated cutoff breaker for better control and monitoring.',
    imageUrl: '/assets/projects/dp1.png', 
    author: 'Muhammad Ahmed', 
  },
  {
    title: 'Luna Bot',
    description: 'Working on a cutting-edge, intelligent assistant robot to simplify and automate routine tasks seamlessly.',
    imageUrl: '/assets/projects/luna.webp',
    author: 'Karimullah',  
  },
];

const ResearchProjects: React.FC = () => {
  return (
    <section  id='projects' className="  padding-x bg-mybg relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black myopacity"></div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Recent Projects
        </h2>
        <div className="mx-auto rounded-xl w-24 mt-4 mb-6 h-1 bg-white"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full h-60">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white mb-4">
                  {project.description}
                </p>
                <p className="text-white mb-4">
                  <strong>Project Lead:</strong> {project.author}
                </p>
                <a 
                  href='/projects'
                  type="button"
                  className="text-white bg-white bg-opacity-20 backdrop-blur-lg border border-white w-full border-opacity-30 shadow-lg rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:bg-gradient-to-bl hover:from-cyan-500 hover:to-blue-500 hover:border-transparent hover:shadow-xl"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;
