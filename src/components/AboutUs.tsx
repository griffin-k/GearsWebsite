import React from 'react';

const AboutUs: React.FC = React.memo(() => {
  const milestones = [
    { year: "2016", title: "Founded", description: "GEARS was founded by a group of enthusiastic engineers and robotics lovers, aiming to build a strong team." },
    { year: "2017", title: "National Competition Success", description: "Participated in the National Engineering and Robotics Contest and secured four positions in three categories." },
    { year: "2018", title: "R&D and Indigenous Category", description: "Engaged in R&D and participated in the Indigenous category of the National Engineering and Robotics Contest at NUST, winning three positions in two categories." },
    { year: "2019", title: "Intra-City and International Competitions", description: "Hosted an intra-city robotics competition and participated in an international robotics competition, winning three positions in robot football." },
    { year: "2021", title: "Multiple Achievements", description: "Participated in the National Engineering and Robotics Competition, securing five positions. Also competed at the University of Lahore, winning three positions in two categories, and at UET, winning one position in one category." },
    { year: "2022", title: "Continued Success", description: "Participated in NERC, winning three positions in three categories and the Best Engineering Design Award. Also competed at the University of Lahore, winning four positions in two categories." },
    { year: "2023", title: "Expanded Achievements", description: "Participated in NERC, winning eight positions in three categories, and also secured three positions at the University of Lahore in two categories." },
    { year: "2024", title: "Refinement and Future Goals", description: "Refining strategies and aiming to host a national-level competition while working on new products." }
  ];

  return (
    <section className="padding-x bg-mybg py-20 relative">
      <div className="absolute inset-0 bg-black myopacity"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-white text-center ">
          Our Journey
        </h2>
        <div className="mx-auto rounded-xl w-24 mt-4 mb-12 h-1 bg-white"></div>
        <div className="space-y-12">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="flex flex-col md:flex-row items-center bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg transition-transform hover:scale-105 ease-in-out duration-300"
            >
              <div className="md:w-1/4 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white">{milestone.year}</h3>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h4 className="text-xl font-semibold text-white">{milestone.title}</h4>
                <p className="mt-2 text-gray-200">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
