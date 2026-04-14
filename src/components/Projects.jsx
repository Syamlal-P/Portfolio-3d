import { useState } from "react";
const projects = [
  
  {
  title: "Food Allergen Detection",

desc: "An AI-powered system that detects potential allergens from food ingredient labels using trained model.",

image: "/src/assets/project2.png",

tech: ["TensorFlow", "CNN", "Flask", "Computer Vision", "Python"],

details: "This project focuses on helping users identify harmful allergens in packaged foods by analyzing ingredient labels. The system uses a convolutional neural network (CNN) to process uploaded images of ingredient lists and extract relevant information. It then identifies common allergens such as nuts, dairy, gluten, and soy, providing users with quick insights to make safer dietary choices.",

features: [
  "Upload images of food ingredient labels",
  "Image processing using CNN-based model",
  "Detects common allergens (nuts, dairy, gluten, etc.)",
  "Fast and efficient prediction system",
  "Simple and user-friendly Flask-based interface",
  "Helps users make safer food decisions"

  ]
},
  {
    title: "AgroLens",

desc: "An AI-powered plant disease detection system that uses deep learning to identify diseases in paddy leaves and provide actionable remedies for farmers.",

image: "/src/assets/project3.png",

tech: ["CNN", "ResNet", "Flask", "Python", "TensorFlow"],

details: "AgroLens is a smart agriculture solution designed to assist farmers in early detection of paddy leaf diseases. The system uses a ResNet-based convolutional neural network trained on plant disease datasets to classify leaf conditions from uploaded images. Along with predictions, it provides detailed disease information and recommended treatments, helping users take immediate action.",

features: [
  "Upload paddy leaf images for analysis",
  "Deep learning-based disease classification (ResNet CNN)",
  "Displays disease name with confidence score",
  "Provides treatment suggestions and external resource links",
  "Optimized for low-spec devices for wider accessibility",
  "Simple and user-friendly web interface (Flask-based)"
]
   
  },
  {
    title: "FitLock (Workout Unlock App)",

desc: "A web-based fitness accountability app that restricts access to Instagram Web until the user completes a physical activity verified through computer vision.",

image: "/src/assets/project4.png",

tech: ["React", "Computer Vision", "JavaScript", "Web APIs"],

details: "FitLock is a productivity-focused web application that encourages healthy habits by linking social media access with physical activity. The system uses computer vision to detect and verify simple exercises like squats or jumping jacks through the user's webcam. Once the required activity is completed, access to Instagram Web is unlocked, helping users reduce screen addiction and stay active.",

features: [
  "Real-time exercise detection using webcam (Computer Vision)",
  "Locks and unlocks Instagram Web based on activity completion",
  "Tracks basic movements like plank,push-ups and hand-raises",
  "Interactive UI built with React",
  "Lightweight and runs directly in the browser",
  "Promotes healthy screen-time habits"
]
    
  },
{
 title: "Emoji Mind Reading Trick",

desc: "An interactive web-based illusion that predicts a user’s chosen emoji using a mathematical pattern hidden within a dynamic matrix.",

image: "/src/assets/project5.png",

tech: ["HTML", "CSS", "JavaScript"],

github: "https://github.com/Syamlal-P/emoji-mind-trick",

demo: "https://mathstrick.vercel.app/",

details: "This project is a browser-based implementation of a classic mathematical illusion designed to create the effect of 'mind reading'. Users are guided through a number selection process, after which the system accurately predicts their final emoji choice. The trick leverages deterministic patterns in number manipulation and matrix mapping to ensure consistent outcomes while maintaining an engaging user experience.",

features: [
  "Interactive step-by-step user flow",
  "Matrix-based number-to-emoji mapping",
  "Deterministic logic disguised as randomness",
  "Smooth UI transitions using CSS animations",
  "Fully client-side implementation (no backend required)",
  "Lightweight and fast-loading web app"
]
},
{
    title: "Phishing Website Detection System",

desc: "A machine learning-based system that identifies phishing websites by analyzing URL and webpage features.",

image: "/src/assets/project1.png",

tech: ["Python", "Machine Learning", "Flask", "Scikit-learn"],

details: "This project is designed to detect malicious and phishing websites using supervised machine learning techniques. The system extracts key features from URLs and web pages—such as domain age, URL length, presence of special characters, and HTTPS usage—and feeds them into a trained classification model. The model predicts whether a website is legitimate or phishing, helping users avoid potential cyber threats in real-time.",

features: [
  "URL-based feature extraction",
  "Machine learning classification model for phishing detection",
  "Real-time prediction through a Flask web interface",
  "User-friendly input system for checking website safety",
  
  "Helps improve cybersecurity awareness"
],
      }
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="projects" className="bg-[#ECECEC] py-24 px-6">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-black font-display">
          Projects
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((proj, index) => (
         <div
  key={index}
  onClick={() => setSelectedIndex(index)}
  className="
    cursor-pointer
    bg-white rounded-xl shadow-lg overflow-hidden
    transition duration-300
    hover:-translate-y-2 hover:shadow-xl
  "
>

            {/* IMAGE */}
            <img
              src={proj.image}
              className="w-full h-40 object-cover"
              alt={proj.title}
            />

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-lg font-semibold text-black">
                {proj.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {proj.desc}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
  key={i}
  className="
    text-xs px-3 py-1 rounded-full
    bg-black text-white
  "
>
  {t}
</span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">

  {/* GITHUB (only if exists) */}
  {proj.github && (
    <a
      href={proj.github}
	onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-sm px-4 py-2 rounded-full
        border border-black text-black
        transition duration-300
        hover:bg-black hover:text-white
      "
    >
      GitHub
    </a>
  )}

  {/* LIVE DEMO */}
  {proj.demo && (
    <a
      href={proj.demo}
	onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-sm px-4 py-2 rounded-full
        border border-black text-black
        transition duration-300
        hover:bg-black hover:text-white
      "
    >
      Live Demo
    </a>
  )}

</div>

            </div>
          </div>
        ))}

      </div>
{selectedIndex !== null && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

    {/* LEFT ARROW */}
    {selectedIndex > 0 && (
     <button
  onClick={() => setSelectedIndex(selectedIndex - 1)}
  className="
    absolute left-6
    w-12 h-12 flex items-center justify-center
    rounded-full
    bg-white/10 backdrop-blur-md
    border border-white/20
    text-white text-xl
    transition duration-300
    hover:scale-110 hover:bg-white hover:text-black
    shadow-lg
  "
>
  ‹
</button>
    )}

    {/* RIGHT ARROW */}
    {selectedIndex < projects.length - 1 && (
      <button
  onClick={() => setSelectedIndex(selectedIndex + 1)}
  className="
    absolute right-6
    w-12 h-12 flex items-center justify-center
    rounded-full
    bg-white/10 backdrop-blur-md
    border border-white/20
    text-white text-xl
    transition duration-300
    hover:scale-110 hover:bg-white hover:text-black
    shadow-lg
  "
>
  ›
</button>
    )}


{/* ✅ CLOSE BUTTON (ALWAYS VISIBLE) */}
  <button
    onClick={() => setSelectedIndex(null)}
    className="
      fixed top-6 right-6 z-[999]
      w-10 h-10 flex items-center justify-center
      rounded-full
      bg-black/40 backdrop-blur-md
      border border-white/20
      text-white text-xl
      hover:scale-110 hover:bg-white hover:text-black
      transition duration-300
    "
  >
    ✕
  </button>


    {/* MODAL CARD */}
    <div className="
      bg-[#1A1B1F] text-white
      w-[90%] max-w-2xl
      p-6 rounded-xl relative
      shadow-2xl
max-h-[80vh] overflow-y-auto
scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent
    ">

      {/* CLOSE */}
      

      {/* IMAGE */}
      <img
        src={projects[selectedIndex].image}
      className="w-full h-48 object-cover object-[center_30%] rounded-lg mb-4"
      />

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-3">
  {projects[selectedIndex].title}
</h2>

{/* OVERVIEW */}
<h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
  Overview
</h4>

<p className="text-gray-400 text-sm mb-4">
  {projects[selectedIndex].desc}
</p>
{/* DETAILS */}
{projects[selectedIndex].details && (
  <>
    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
      Details
    </h4>

    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
      {projects[selectedIndex].details}
    </p>
  </>
)}

{/* FEATURES */}
{projects[selectedIndex].features && (
  <>
    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
      Features
    </h4>

    <ul className="text-gray-400 text-sm mb-4 space-y-1">
      {projects[selectedIndex].features.map((f, i) => (
        <li key={i}>• {f}</li>
      ))}
    </ul>
  </>
)}      {/* TECH */}
      <div className="flex flex-wrap gap-2 mb-4">
        {projects[selectedIndex].tech.map((t, i) => (
          <span key={i} className="bg-black text-white text-xs px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">

        {projects[selectedIndex].github && (
          <a
            href={projects[selectedIndex].github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="
              text-sm px-4 py-2 rounded-full
              border border-white text-white
              hover:bg-white hover:text-black transition
            "
          >
            GitHub
          </a>
        )}

        {projects[selectedIndex].demo && (
          <a
            href={projects[selectedIndex].demo}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="
              text-sm px-4 py-2 rounded-full
              border border-white text-white
              hover:bg-white hover:text-black transition
            "
          >
            Live Demo
          </a>
        )}

      </div>

    </div>
  </div>
)}
    </section>
  );
};

export default Projects;