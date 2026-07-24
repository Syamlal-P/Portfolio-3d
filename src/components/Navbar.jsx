import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AchievementsModal from "./AchievementsModal";


const Navbar = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <div className="fixed top-4 md:top-6 w-full flex flex-col items-center z-50 px-3 sm:px-6">

      {/* Island Container */}
      <div className="
        w-[90%] max-w-5xl 
        bg-black/80 backdrop-blur-xl 
        border border-white/10 
        rounded-full 
        px-5 md:px-8 py-3 
        flex items-center justify-between md:justify-start
        shadow-lg
        hover:scale-[1.02] md:hover:scale-105 transition duration-300
      ">

        {/* LEFT */}
        <div className="text-white font-semibold text-base md:text-lg shrink-0">
          Syamlal
        </div>

        {/* CENTER (DESKTOP ONLY) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
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
        <div className="flex items-center space-x-3 md:space-x-4 ml-auto">

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
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 text-lg md:text-base"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/syam-lal-p" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 text-lg md:text-base"
          >
            <FaLinkedin />
          </a>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 p-1 focus:outline-none text-xl"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              md:hidden w-[90%] max-w-5xl mt-2
              bg-black/90 backdrop-blur-xl 
              border border-white/10 
              rounded-2xl 
              p-5 
              flex flex-col items-center space-y-4
              shadow-2xl z-50
            "
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-yellow-400 text-base font-medium transition duration-300 py-1"
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowAchievements(true);
              }}
              className="
                text-xs px-4 py-2 
                bg-white/10 rounded-full 
                text-gray-200
                cursor-pointer
                hover:bg-white hover:text-black
                transition duration-300 mt-2
              "
            >
              🏆 Achiever
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACHIEVEMENTS MODAL */}
      {showAchievements && (
        <AchievementsModal onClose={() => setShowAchievements(false)} />
      )}

    </div>
  );
};

export default Navbar;