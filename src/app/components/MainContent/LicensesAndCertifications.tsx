import React from "react";

const LicensesAndCertifications = () => {
  const certificationsData = [
    {
      title: "Generative AI",
      issuer: "Google Cloud Skills Boost",
      year: "2024",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM-COURSERA",
      year: "2024",
    },
    {
      title: "SEO, Graphic Design, Digital Literacy, Creative Writing",
      issuer: "DigiSkills.pk",
      year: "2023",
    },
  ];

  return (
    <section className="mb-8 md:mb-12">
  <h2 className="text-2xl font-bold mb-4">Licenses & Certifications</h2>
  <div className="space-y-6">
    {certificationsData.map((cert, index) => (
      <div key={index} className="border-l-4 border-gray-900 pl-4">
        <h3 className="font-semibold">{cert.title}</h3>
        <p className="text-gray-600">{cert.issuer}</p>
        <p className="text-sm text-gray-500">{cert.year}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default LicensesAndCertifications;
