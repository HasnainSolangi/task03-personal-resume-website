import React from "react";

const Projects = () => {
  const projectsData = [
    "CLI Calculator",
    "CLI Number Guessing Game",
    "CLI ATM",
    "CLI To-Do List",
    "CLI Currency Converter",
    "CLI Word Counter",
    "CLI Student Management System",
    "CLI Adventure Game",
    "CLI Quiz Application",
    "CLI Countdown Timer",
    "CLI Library",
    "CLI MyBank",
  ];

  return (
    <section className="mb-8 md:mb-12">
  <h2 className="text-2xl font-bold mb-4">Projects</h2>
  <div className="relative">
    <div
      className="flex gap-6 pb-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
      role="list"
    >
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[280px] bg-white hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 rounded-md"
          role="listitem"
        >
          <div className="p-6">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-semibold text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-center font-medium text-gray-800">
                {project}
              </h3>
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
