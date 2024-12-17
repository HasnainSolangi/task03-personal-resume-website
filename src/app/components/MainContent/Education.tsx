import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "M.A Economics",
      institution: "Shah Abdul Latif University Khairpur Mir's (SALU)",
      year: "2018 - 2020",
    },
    {
      degree: "Bachelor of Arts",
      institution: "Shah Abdul Latif University Khairpur Mir's (SALU)",
      year: "2016 - 2017",
    },
    {
      degree: "CIT Major in OAT",
      institution: "IBA-IET Khairpur Mirs's",
      year: "2016",
      details: "OAT - Word, Excel, Powerpoint & Graphic Design",
    },
    {
      degree: "Diploma in Elementary & Secondary Grade Drawing",
      institution:
        "District Education Officer (Academic, Training & Quality Assurance) Khairpur Mir's",
      year: "A1+",
    },
  ];

  return (
<section className="mb-8 md:mb-12">
  <h2 className="text-2xl font-bold mb-4">Education</h2>
  <div className="space-y-6">
    {educationData.map((edu, index) => (
      <div key={index} className="border-l-4 border-gray-900 pl-4">
        <h3 className="font-semibold">{edu.degree}</h3>
        <p className="text-gray-600">{edu.institution}</p>
        <p className="text-sm text-gray-500">{edu.year}</p>
        {edu.details && <p className="text-sm text-gray-500">{edu.details}</p>}
      </div>
    ))}
  </div>
</section>
  );
};

export default Education;
