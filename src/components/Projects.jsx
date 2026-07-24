import { useState } from "react";
const projects = [

  {
    title: "Food Allergen Detection",

    desc: "An AI-powered system that detects potential allergens from food ingredient labels using trained model.",

    image: "/assets/project2.png",

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

    image: "/assets/project3.png",

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

    image: "/assets/project4.png",

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

    image: "/assets/project5.png",

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

    image: "/assets/project1.png",

    tech: ["Python", "Machine Learning", "Flask", "Scikit-learn"],

    details: "This project is designed to detect malicious and phishing websites using supervised machine learning techniques. The system extracts key features from URLs and web pages—such as domain age, URL length, presence of special characters, and HTTPS usage—and feeds them into a trained classification model. The model predicts whether a website is legitimate or phishing, helping users avoid potential cyber threats in real-time.",

    features: [
      "URL-based feature extraction",
      "Machine learning classification model for phishing detection",
      "Real-time prediction through a Flask web interface",
      "User-friendly input system for checking website safety",

      "Helps improve cybersecurity awareness"
    ],
  },
  {
    "title": "CloakID – Adversarial Image Immunization System",

    "desc": "A privacy-first adversarial defense system that embeds imperceptible noise into personal images – silently disrupting how AI models perceive and manipulate them, so your identity stays yours.",

    "image": "/assets/project6.png",

    "tech": [
      "Python",
      "PyTorch",
      "Diffusers",
      "Transformers",
      "Streamlit",
      "Gradio",
      "Hugging Face",
      "Deep Learning",
      "Adversarial ML",
      "VAE",
      "CLIP"
    ],

    "details": "CloakID is a dual-layer adversarial image immunization system that protects personal photos from unauthorized AI manipulation. The project consists of two core modules: Module 1 generates an imperceptible adversarial perturbation (using PGD + EOT optimization) that is added to the original image, making it resistant to diffusion-based editing attacks while remaining visually identical to the naked eye. Module 2 verifies the shield's effectiveness by running actual InstructPix2Pix attacks on both the original and protected images, then computing comprehensive metrics including SSIM, LPIPS, CLIP similarity, sharpness, and a composite Protection Score. The system features a premium editorial luxury UI with a matte black background, champagne beige accents, oversized typography, film grain texture, and a white gallery frame – designed to feel like a high-end digital agency. Built for researchers, privacy advocates, and AI safety professionals, CloakID demonstrates state-of-the-art adversarial defense against generative AI threats.",

    "features": [
      "Dual-layer adversarial immunization using VAE + CLIP loss functions",
      "PGD (Projected Gradient Descent) optimization with EOT (Expectation over Transformations)",
      "Imperceptible perturbation – SSIM > 0.95, visually identical to original",
      "Robust against InstructPix2Pix diffusion-based editing attacks",
      "Comprehensive verification module with 6 key metrics: SSIM, LPIPS, Sharpness, PSNR, CLIP similarity, Composite Protection Score",
      "Two deployment options: protection and verification",
      "Premium editorial luxury UI – matte black, champagne beige, oversized Bebas Neue typography",
      "White gallery frame with film grain texture for premium feel",
      "Glassmorphism hero object with 3D chrome aesthetic",
      "Asymmetrical editorial magazine layout with Swiss-inspired grid system",
      "Real-time protection with progress tracking",
      "Download protected images and export verification reports",
      "Ngrok integration for instant public deployment",
      "Optimized for Kaggle notebooks with GPU acceleration",
      "Hugging Face model caching for fast reloading",
      "Production-ready with clean, maintainable codebase"
    ]
  },

  {
    title: "Mehendi by Suha",

    desc: "A premium luxury portfolio website for a professional mehendi artist, showcasing bridal, festive, Arabic, and custom henna designs through an elegant, mobile-first user experience.",

    image: "/assets/project7.png",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "GSAP",
      "UI/UX Design"
    ],

    demo: "https://mehendibysuha.vercel.app/",

    details: "Mehendi by Suha is a modern portfolio website crafted for a professional mehendi artist with a strong focus on luxury aesthetics, responsive design, and user engagement. The website features a beautifully organized gallery of bridal, Arabic, festive, party, and custom mehendi designs, inspired by premium wedding brands and enhanced with smooth animations. Designed with a mobile-first approach, it provides seamless navigation, optimized performance, and direct communication through Call, WhatsApp, and Instagram integrations, allowing clients to easily explore the artist's work and make inquiries.",

    features: [
      "Luxury bridal-inspired UI with elegant typography and creamy aesthetic",
      "Fully responsive mobile-first design",
      "Interactive gallery showcasing real mehendi artwork",
      "Categorized collections including Bridal, Arabic, Festive, Party, Minimal, and Custom Designs",
      "Smooth scrolling and subtle animations for a premium browsing experience",
      "Direct Call, WhatsApp, and Instagram integration for instant client communication",
      "Optimized image loading with responsive layouts",
      "SEO-friendly structure with clean and organized codebase",
      "Fast-loading static website with modern frontend practices"
    ]
  }
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="projects" className="bg-[#ECECEC] py-16 md:py-24 px-4 sm:px-6">

      {/* HEADING */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black font-display">
          Projects
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

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
              className="w-full h-44 sm:h-40 object-cover"
              alt={proj.title}
            />

            {/* CONTENT */}
            <div className="p-4 sm:p-5">

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

              <div className="mt-4 flex flex-wrap gap-3">

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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">

          {/* LEFT ARROW */}
          {selectedIndex > 0 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex - 1)}
              className="
                absolute left-2 sm:left-6
                w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center
                rounded-full
                bg-black/60 backdrop-blur-md
                border border-white/20
                text-white text-base sm:text-xl
                transition duration-300
                hover:scale-110 hover:bg-white hover:text-black
                shadow-lg z-50
              "
              aria-label="Previous project"
            >
              ‹
            </button>
          )}

          {/* RIGHT ARROW */}
          {selectedIndex < projects.length - 1 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex + 1)}
              className="
                absolute right-2 sm:right-6
                w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center
                rounded-full
                bg-black/60 backdrop-blur-md
                border border-white/20
                text-white text-base sm:text-xl
                transition duration-300
                hover:scale-110 hover:bg-white hover:text-black
                shadow-lg z-50
              "
              aria-label="Next project"
            >
              ›
            </button>
          )}


          {/* ✅ CLOSE BUTTON (ALWAYS VISIBLE) */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="
              fixed top-4 right-4 sm:top-6 sm:right-6 z-[999]
              w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
              rounded-full
              bg-black/60 backdrop-blur-md
              border border-white/20
              text-white text-lg sm:text-xl
              hover:scale-110 hover:bg-white hover:text-black
              transition duration-300
            "
            aria-label="Close modal"
          >
            ✕
          </button>


          {/* MODAL CARD */}
          <div className="
            bg-[#1A1B1F] text-white
            w-[92%] sm:w-[90%] max-w-2xl
            p-4 sm:p-6 rounded-xl relative
            shadow-2xl
            max-h-[85vh] overflow-y-auto
            scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent
          ">

            {/* IMAGE */}
            <img
              src={projects[selectedIndex].image}
              alt={projects[selectedIndex].title}
              className="w-full h-40 sm:h-48 object-cover object-[center_30%] rounded-lg mb-4"
            />

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              {projects[selectedIndex].title}
            </h2>

            {/* OVERVIEW */}
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Overview
            </h4>

            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              {projects[selectedIndex].desc}
            </p>
            {/* DETAILS */}
            {projects[selectedIndex].details && (
              <>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Details
                </h4>

                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
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

                <ul className="text-gray-400 text-xs sm:text-sm mb-4 space-y-1">
                  {projects[selectedIndex].features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </>
            )}

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[selectedIndex].tech.map((t, i) => (
                <span key={i} className="bg-black text-white text-xs px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3">

              {projects[selectedIndex].github && (
                <a
                  href={projects[selectedIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    text-xs sm:text-sm px-4 py-2 rounded-full
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
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    text-xs sm:text-sm px-4 py-2 rounded-full
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