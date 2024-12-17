import React from "react";
import Contact from "./Contact";
import Languages from "./Languages";
import Image from "next/image";
const SideBar: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white md:h-screen w-full overflow-y-auto flex-shrink-0">
      <div className="p-8 flex flex-col items-center">
        {" "}
        {/* Increased padding */}
        {/* Profile Section */}
        <div className="text-center mb-8 max-w-[200px]">
          {" "}
          {/* Increased bottom margin */}
          <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full shadow-lg">
            <Image
           src="/profile1.png"
           alt="Profile Picture"
           className="w-full object-cover"
           width={160}
           height={160} 
         />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Hasnain Ahmed</h1>
            <p className="text-gray-400 text-base">Full Stack Developer</p>
          </div>
        </div>
        <div className="w-full">
          <Contact />
          <Languages />
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
