import React from "react";

const WorkExperience = () => {
  const workExperienceData = [
    {
      title: "Volunteer Mentor",
      organization: "Sindh Rural Support Organization (SRSO)",
      year: "2016 - 2017",
      responsibilities: [
        "Improving Adolescents Lives in Pakistan Project",
        "4 days Training of trainers (ToT) for Adolescents champions on Adolescent empowerment toolkit & peer-to-peer approach.",
        "Workshop/Visit of Adolescents on Photography Certificate - Kot Diji Khairpur Mir's, Sindh.",
      ],
    },
  ];

  return (
    <section className="mb-8 md:mb-12">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {workExperienceData.map((work, index) => (
          <div key={index} className="border-l-4 border-gray-900 pl-4">
            <h3 className="font-semibold">{work.title}</h3>
            <p className="text-gray-600">{work.organization}</p>
            <p className="text-sm text-gray-500">{work.year}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {work.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
