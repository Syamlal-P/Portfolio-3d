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
    <div className="bg-[#F5F5F5] py-14 flex justify-center">

      {/* CONTAINER SAME WIDTH AS NAVBAR */}
      <div className="max-w-5xl mx-auto overflow-hidden relative">

        {/* MARQUEE */}
        <div className="marquee flex items-center h-16">

         {[...icons, ...icons].map((Icon, index) => (
  <div
    key={index}
   className="
  mx-10 py-2 text-3xl text-gray-600
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