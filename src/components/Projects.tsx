import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Luna Bot',
      description:
        'Luna Bot is an innovative, intelligent assistant robot designed to effortlessly simplify and automate daily tasks. Built with advanced AI-driven technology, it optimizes workflows, allowing users to focus on more strategic goals rather than being burdened by repetitive activities. Luna Bot integrates seamlessly with enterprise systems, enhancing decision-making through cutting-edge machine learning algorithms.',
      features: [
        'Automates workflow processes',
        'Uses AI to enhance decision-making',
        'Integrates with existing enterprise systems',
      ],
      technologies: ['python', 'LLM', 'LangChain', 'Yolo'],
      imageUrl: 'assets/projects/luna.webp', 
      link: '#',
    },
    {
      title: 'Eco Trim',
      description:
        'Eco Trim is focused on delivering innovative and budget-friendly solutions for autonomous lawn mowers. By integrating smart technology and AI, Eco Trim aims to revolutionize lawn care, offering an eco-friendly and efficient way to maintain lawns with minimal human intervention. The project leverages cutting-edge technology to provide a seamless, user-friendly experience.',
      features: [
        'Autonomous Lawn Maintenance',
        'Smart Navigation and Mapping',
        'Energy Efficiency',
      ],
      technologies: ['Python', 'OpenCv', 'Yolo', 'Firebase', 'React Native'],
      imageUrl: 'assets/projects/mover.webp',
      link: '#',
    },
    {
      title: 'Brake link',
      description:
        'Brake Link is an innovative project focused on developing an IoT-integrated cutoff breaker for enhanced control and real-time monitoring of electrical systems. Designed to improve safety and efficiency, Brake Link offers users remote access to manage their power systems, providing real-time alerts and diagnostics for any issues.',
      features: [
        'Remote access and control',
        'Enhanced safety features',
        'Real-time monitoring and diagnostics',
      ],
      technologies: ['Flutter', 'IOT', 'Firebase'],
      imageUrl: 'assets/projects/dp1.png',
      link: '#',
    },
  ];

  return (
    <section className="relative bg-mybg padding-x py-16">
      <div className="absolute inset-0 bg-black myopacity z-10"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold pt-16 text-white mb-4">Our Projects</h2>
          <p className="text-lg text-white">
          Explore the groundbreaking projects our team has developed, each one addressing real-world challenges with cutting-edge technology. From intelligent automation to IoT solutions, we are dedicated to building practical, scalable, and forward-thinking products that push the boundaries of innovation.
            </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-6">{project.description}</p>
                  
                  {/* Key Features */}
                  <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;