"use client";
// src/app/components/MainContent/Skills.tsx
import React, { useState } from "react";

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<"soft" | "hard" | null>(null);

  const skills = {
    soft: [
      "👂🏼 Active Listening",
      "💬 Effective Communication",
      "👥 Collaboration",
      "⽓ Teamwork",
      "💡 Creative Problem Solving",
      "⌛️ Time Management",
    ],
    hard: [
      "🐍 Python",
      "ʦ TypeScript",
      "🇳 Nextjs",
      "💻 HTML - CSS - JavaScript",
    ],
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-col sm:flex-row mb-4">
        <button
          onClick={() => setActiveSkill("soft")}
          className={`flex-1 py-2 text-center border-b sm:border-b-0 sm:border-r border-gray-800 ${
            activeSkill === "soft" ? "bg-yellow-500 text-black" : "bg-black text-yellow-500"
          }`}
        >
          SOFT SKILLS
        </button>
        <button
          onClick={() => setActiveSkill("hard")}
          className={`flex-1 py-2 text-center sm:border-r border-gray-800 ${
            activeSkill === "hard" ? "bg-yellow-500 text-black" : "bg-black text-yellow-500"
          }`}
        >
          HARD SKILLS
        </button>
      </div>
      {activeSkill && (
        <div className="flex flex-wrap gap-4">
          {skills[activeSkill].map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow w-full sm:w-auto"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
