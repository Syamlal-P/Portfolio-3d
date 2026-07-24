import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
 FaCuttlefish,
  FaPython
} from "react-icons/fa";

import {
  SiFlask,
  SiTensorflow,
  
} from "react-icons/si";

const icons = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  
  SiFlask,
  FaPython,
  SiTensorflow,
  FaCuttlefish
];

const SkillsMarquee = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 md:py-14 flex justify-center overflow-hidden px-4">

      {/* CONTAINER SAME WIDTH AS NAVBAR */}
      <div className="w-full max-w-5xl mx-auto overflow-hidden relative">

        {/* MARQUEE */}
        <div className="marquee flex items-center h-14 md:h-16">

          {[...icons, ...icons, ...icons].map((Icon, index) => (
            <div
              key={index}
              className="
                mx-5 sm:mx-8 md:mx-10 py-2 text-2xl sm:text-3xl text-gray-600
                transition duration-300
                hover:scale-110 hover:text-black hover:-translate-y-1
              "
            >
              <Icon />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default SkillsMarquee;