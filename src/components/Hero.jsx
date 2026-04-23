import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const images = [
  "/assets/hero.png",
  "/assets/hero2.png", // add second image
];




// Background text movement (subtle)


const [flipped, setFlipped] = useState(false);
  return (
    <section
  id="home"
   className="
    min-h-screen py-20 flex items-center justify-center 
    relative overflow-hidden
    bg-gradient-to-b from-[#0F0F10] to-[#1A1B1F]
  "
>

      {/* BACKGROUND TEXT */}
      <motion.div
  
  className="absolute top-16 w-full flex justify-between px-20"
>

  {/* LEFT TEXT */}
  <h1 className="
	ml-20 md:ml-40
    text-[80px] md:text-[120px]
    font-bold text-white/15
    select-none
  ">
       Hi, I'm
  </h1>

  {/* RIGHT TEXT */}
  <h1 className="
pr-10 md:pr-24
    text-[80px] md:text-[120px]
    font-bold text-white/15
    select-none
  ">
    Syamlal
  </h1>

</motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >

        {/* IMAGE */}
    <div
  className="relative w-60 md:w-80 mx-auto mt-28 z-20 cursor-pointer"
  onClick={() => setFlipped(!flipped)}
>
  {/* FRONT IMAGE */}
  <img
    src={images[0]}
    className={`
      absolute top-0 left-0 w-full
      transition-all duration-700 ease-in-out
      backface-hidden
      ${flipped ? "opacity-0 rotate-y-180 scale-95" : "opacity-100 scale-100"}
    `}
  />

  {/* BACK IMAGE */}
  <img
    src={images[1]}
    className={`
      w-full
      transition-all duration-700 ease-in-out
      backface-hidden
      ${flipped ? "opacity-100 scale-100" : "opacity-0 scale-105"}
    `}
  />
</div>

        {/* MAIN TEXT */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Creative Developer
        </h2>

        <p className="text-gray-400 mt-3 max-w-md mx-auto">
  I build simple, practical solutions to real-world problems using code and creativity.
</p>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-4">

  {/* CONTACT */}
  <a
    href="#contact"
    className="
      px-6 py-2 rounded-lg
      border border-white/20
      text-white
      backdrop-blur-md
      hover:bg-white hover:text-black
      transition duration-300
    "
  >
    Contact Me
  </a>

  {/* ABOUT */}
  <a
    href="#about"
    className="
      px-6 py-2 rounded-lg
      border border-white/20
      text-white
      backdrop-blur-md
      hover:bg-white hover:text-black
      transition duration-300
    "
  >
    Who Am I
  </a>

</div>

      </motion.div>
    </section>
  );
};

export default Hero;