import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

const UpcomingActivities: React.FC = () => {
  const activities = [
    { name: 'Lego Workshop 8.O', completed: true },
    { name: 'IOT Workshop 8.O', completed: true },
    { name: 'Robotek 2025 Competition', completed: false },
    { name: 'Project Showcase', completed: false },
  ];

  return (
    <div className="min-h-screen padding-x bg-mybg flex items-center justify-center p-8 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black myopacity"></div>

      {/* Glassmorphic Full-Screen Card */}
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-lg p-10 w-full max-w-4xl relative">
        <h2 className="text-3xl font-bold text-white text-center">
          Upcoming Activities
        </h2>
        <div className="mx-auto rounded-xl w-24 mt-4 mb-6 h-1 bg-white"></div>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white/10 p-4 rounded-lg shadow-md"
            >
              <span className="text-lg text-white">{activity.name}</span>
              <FontAwesomeIcon
                icon={activity.completed ? faCheckCircle : faCircle}
                aria-label={activity.completed ? 'Completed' : 'Not Completed'}
                className={`text-3xl ${
                  activity.completed ? 'text-green-400' : 'text-gray-400'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingActivities;
