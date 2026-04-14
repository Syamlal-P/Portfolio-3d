import { motion } from "framer-motion";
import { Code, Brain, Globe } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Web Application Development",
    desc: "Building full-stack web applications with clean UI, smooth UX, and scalable backend systems."
  },
  {
    icon: <Brain size={28} />,
    title: "AI & ML Solutions",
    desc: "Designing intelligent systems using machine learning to solve real-world problems with data-driven approaches."
  },
  {
    icon: <Code size={28} />,
    title: "Creative Development",
    desc: "Transforming ideas into interactive digital experiences with modern frontend technologies and creative design."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0F0F10] text-white py-24 px-6 transition-colors duration-500">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold font-display">
          Services
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        className="
  bg-[#1A1B1F] rounded-xl p-6
  border border-[#2A2B2F]
  transform transition-all duration-300 ease-out
  hover:-translate-y-4 hover:scale-105
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
  hover:border-white/40
hover:bg-[#202125]
  group
"
          >

            {/* ICON */}
            <div className="mb-4 text-white opacity-80 flex justify-center transition duration-300 group-hover:scale-110">
  {service.icon}
</div>

<h3 className="text-lg font-semibold mb-2 text-center transition duration-300 group-hover:text-white">
  {service.title}
</h3>

<p className="text-gray-400 text-sm leading-relaxed text-center transition duration-300 group-hover:text-gray-300">
  {service.desc}
</p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Services;