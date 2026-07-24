import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <section id="about" className="bg-[#F5F5F5] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black font-display text-center">
          About Me
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="perspective">
            <div
              className="relative w-48 h-64 sm:w-56 sm:h-72 cursor-pointer transition-transform duration-700"
              onClick={() => setFlipped(!flipped)}
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transformStyle: "preserve-3d"
              }}
            >

              {/* FRONT IMAGE */}
              <div
                className="absolute w-full h-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="/assets/about2.jpg"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                  alt="front"
                />
              </div>

              {/* BACK IMAGE */}
              <div
                className="absolute w-full h-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden"
                }}
              >
                <img
                  src="/assets/about.jpg"
                  className="w-full h-full object-cover object-[center_20%] rounded-xl shadow-md"
                  alt="back"
                />
              </div>

            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-700 font-poppins text-sm sm:text-base leading-relaxed">
            Hi, I’m Syamlal — a Computer Science graduate and passionate developer who enjoys solving real-world problems through technology.
            <br /><br />
            I’m naturally curious, and most of my ideas come from everyday experiences — especially during long walks and conversations. 
            I tend to observe situations, break them down, and think about how they can be improved or solved using systems, logic, or machine learning.
            <br /><br />
            I focus on building meaningful and creative solutions, combining frontend development with intelligent problem-solving to create impactful digital experiences.
            <br /><br />
            I am Open to opportunities across tech and beyond—ready to learn, adapt, and deliver.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;