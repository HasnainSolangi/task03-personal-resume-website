"use client";
import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import AboutMe from "./components/MainContent/AboutMe";
import Skills from "./components/MainContent/Skills";
import Education from "./components/MainContent/Education";
import WorkExperience from "./components/MainContent/WorkExperience";
import LicensesAndCertifications from "./components/MainContent/LicensesAndCertifications";
import Projects from "./components/MainContent/Projects";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile View */}
      <div className="md:hidden">
        <SideBar />
        <main className="p-4">
          <AboutMe />
          <Skills />
          <Education />
          <WorkExperience />
          <LicensesAndCertifications />
          <Projects />
        </main>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex">
        {/* Fixed Sidebar - Increased width to 320px */}
        <div className="fixed top-0 left-0 h-screen w-[320px] overflow-y-auto">
          <SideBar />
        </div>

        {/* Main Content - Adjusted margin and max-width */}
        <main className="ml-[320px] flex-1 p-8 min-h-screen overflow-y-auto">
          <div className="max-w-5xl">
            <AboutMe />
            <Skills />
            <Education />
            <WorkExperience />
            <LicensesAndCertifications />
            <Projects />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;