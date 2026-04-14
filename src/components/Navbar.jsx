import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import AchievementsModal from "./AchievementsModal";


const Navbar = () => {
const [showAchievements, setShowAchievements] = useState(false);
  return (
  <div className="fixed top-6 w-full flex justify-center z-50">

    {/* Island Container */}
    <div className="
      w-[90%] max-w-5xl 
      bg-black/80 backdrop-blur-xl 
      border border-white/10 
      rounded-full 
      px-8 py-3 
      flex items-center 
      shadow-lg
      hover:scale-105 transition duration-300
    ">

      {/* LEFT */}
      <div className="text-white font-semibold text-lg">
        Syamlal
      </div>

      {/* CENTER */}
      <div className="flex flex-1 justify-center">
        <div className="flex space-x-8 text-sm font-medium">
          {["Home","About","Projects","Services","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4 ml-auto">

        <span
          onClick={() => setShowAchievements(true)}
          className="
            hidden md:block 
            text-xs px-3 py-1 
            bg-white/10 rounded-full 
            text-gray-300
            cursor-pointer
            hover:bg-white hover:text-black
            transition duration-300
          "
        >
          🏆 Achiever
        </span>

        <a 
          href="https://github.com/Syamlal-P" 
          target="_blank"
          className="text-white hover:text-yellow-400"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/syam-lal-p" 
          target="_blank"
          className="text-white hover:text-yellow-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* ✅ MOVE IT HERE */}
    {showAchievements && (
      <AchievementsModal onClose={() => setShowAchievements(false)} />
    )}

  </div>
);
};

export default Navbar;