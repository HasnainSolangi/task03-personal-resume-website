import React from "react";

interface Language {
  name: string;
  proficiency: number; // 1-5 scale
}

const Languages: React.FC = () => {
  const languages: Language[] = [
    { name: "English", proficiency: 4 },
    { name: "Urdu", proficiency: 5 },
    { name: "Sindhi", proficiency: 5 },
  ];

  const renderProficiencyDots = (level: number) => {
    return (
      <div className="flex gap-1 ml-auto">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < level ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="text-left mt-6">
      <h2 className="text-xl font-semibold mb-3">Languages</h2>
      <ul className="space-y-2">
        {languages.map((lang) => (
          <li key={lang.name} className="flex items-center justify-between w-48">
            <span className="min-w-20">{lang.name}</span>
            {renderProficiencyDots(lang.proficiency)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;