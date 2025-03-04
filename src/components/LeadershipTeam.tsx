import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
}

const leadershipTeam: TeamMember[] = [
  {
    id: "1",
    name: "Engr Hassan Sultan",
    role: "Supervisor",
    imageUrl: "/assets/imgs/hassan.png",
    facebookUrl: "#",
    instagramUrl: "#",
    linkedinUrl: "#",
    whatsappUrl: "#"
  },
  {
    id: "2",
    name: "Umair Bin Ahmad",
    role: "Co-Supervisor",
    imageUrl: "/assets/imgs/umair.png",
    facebookUrl: "#",
    instagramUrl: "#",
    linkedinUrl: "#",
    whatsappUrl: "#"
  },
  {
    id: "3",
    name: "Karimullah",
    role: "President",
    imageUrl: "/assets/imgs/p.png",
    facebookUrl: "#",
    instagramUrl: "#",
    linkedinUrl: "#",
    whatsappUrl: "#"
  }

];

const LeadershipTeam: React.FC = React.memo(() => {
  return (
    <section className="padding-x bg-mybg py-20 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black myopacity"></div>

      {/* Team Members */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-extrabold text-white text-center">
          Meet Our Leadership Team
        </h2>
        <div className="mx-auto rounded-xl w-24 mt-4 mb-12 h-1 bg-white"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {leadershipTeam.map((member) => (
            <div
              key={member.id}
              className="relative group bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg"
            >
              {/* Team Member Image */}
              <div className="h-72 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={member.imageUrl}
                  alt={member.name}
                />
              </div>

              {/* Name and Role */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
                {/* Social Icons */}
                <div className="flex space-x-4 mb-4">
                  <a
                    href={member.facebookUrl}
                    className="text-gray-200 hover:text-white transition ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  </a>
                  <a
                    href={member.instagramUrl}
                    className="text-gray-200 hover:text-white transition ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    href={member.linkedinUrl}
                    className="text-gray-200 hover:text-white transition ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={member.whatsappUrl}
                  className="inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none transition ease-in-out duration-300"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default LeadershipTeam;