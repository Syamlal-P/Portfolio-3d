import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const achievements = [
  {
    title: "1st in Debugging",
    image: "/assets/cert1.jpg",
    desc: "Secured 1st place in the Debugging competition at GENESIS 2025",
    link: "https://www.linkedin.com/posts/syam-lal-p_genesis2025-debugging-coding-activity-7311574719869149184-gPzM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  },
  {
    title: "2nd place in Debugging",
    image: "/assets/cert2.jpg",
    desc: "🥈 2nd place in Debugging at TE-X-US",
    link: "https://www.linkedin.com/posts/syam-lal-p_techfest-debugging-intercollege-activity-7410168684436103168-QVns?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  },
  {
    title: "🏆 Second Prize in WEBLOOM & ERROR 404",
    image: "/assets/certi3.jpg",
    desc: "🏆 Second Prize in WEBLOOM ERROR 404 at QBIT-26",
    link: "https://www.linkedin.com/posts/syam-lal-p_qbit26-webdesign-debugging-activity-7427617669731852288-npYL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  }
,
  {
    title: "🥈 Second Place in the Web Designing",
    image: "/assets/cert4.jpg",
    desc: " secured 🥈 Second Place in the Web Designing at GENESIS 2026",
    link: "https://www.linkedin.com/posts/syam-lal-p_webdesign-techevents-studentachievements-activity-7438095936125554688-SPPw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  }
,
  {
    title: "🥈 2nd place in Web Designing",
    image: "/assets/cert5.jpg",
    desc: "Secured 2nd place in Web Designing at Spyder",
    link: "https://www.linkedin.com/posts/syam-lal-p_webdesign-techfest-achievement-ugcPost-7452978994766876672-ITYI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  }
,
  {
    title: "Hackathon Experience",
    image: "/assets/cert6.jpg",
    desc: "Built real solutions with my team under pressure",
    link: "https://www.linkedin.com/posts/syam-lal-p_hackathon-coderevolt2025-dhruvtechfest-activity-7389500997590581248-7-bc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8HczYB_WIEJBvVH-DlUu87Cnrlf1VZMww"
  }


];

const AchievementsModal = ({ onClose }) => {
  const containerRef = useRef();
const scrollRef = useRef(null);
  // 🔥 AUTO SCROLL
 const scroll = (dir) => {
  const el = scrollRef.current;
  if (!el) return;

  const cardWidth = 300; // adjust if needed

  el.scrollBy({
    left: dir === "right" ? cardWidth : -cardWidth,
    behavior: "smooth",
  });

  // 🔁 infinite loop fix (keep swipe working)
  setTimeout(() => {
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
      el.scrollLeft = 0;
    }
    if (el.scrollLeft <= 0) {
      el.scrollLeft = el.scrollWidth / 2;
    }
  }, 400);
};

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center overflow-hidden p-2 sm:p-0">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 sm:top-6 sm:right-6 z-[100]
          w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          rounded-full bg-black/60 border border-white/20
          text-white text-lg sm:text-2xl hover:scale-110 hover:bg-white hover:text-black transition
        "
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="
          absolute left-2 sm:left-6 z-50
          w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center
          rounded-full
          bg-black/60 backdrop-blur-md
          border border-white/20
          text-white text-base sm:text-xl
          hover:scale-110 hover:bg-white hover:text-black
          transition duration-300
        "
        aria-label="Scroll left"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="
          absolute right-2 sm:right-6 z-50
          w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center
          rounded-full
          bg-black/60 backdrop-blur-md
          border border-white/20
          text-white text-base sm:text-xl
          hover:scale-110 hover:bg-white hover:text-black
          transition duration-300
        "
        aria-label="Scroll right"
      >
        ›
      </button>

      {/* WRAPPER */}
      <div className="relative w-full">

        {/* LEFT FADE */}
        <div className="
          pointer-events-none
          absolute left-0 top-0 h-full w-6 sm:w-16 z-20
          bg-gradient-to-r from-black/80 to-transparent
        " />

        {/* RIGHT FADE */}
        <div className="
          pointer-events-none
          absolute right-0 top-0 h-full w-6 sm:w-16 z-20
          bg-gradient-to-l from-black/80 to-transparent
        " />

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden flex gap-4 sm:gap-8 px-4 sm:px-10 scroll-smooth no-scrollbar"
        >

          {[...achievements, ...achievements].map((item, index) => (
            <motion.div
              key={index}
              className="
                min-w-[240px] sm:min-w-[280px]
                max-w-[80vw] sm:max-w-none
                bg-[#1A1B1F]
                rounded-xl
                overflow-hidden
                shadow-lg
                flex-shrink-0
                transition duration-500
                opacity-80 sm:opacity-50 scale-95 sm:scale-90
                hover:opacity-100 hover:scale-105
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-36 sm:h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-white font-semibold text-sm">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs mt-2">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-3 inline-block text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}

        </div> {/* CLOSE SCROLL */}

      </div> {/* CLOSE WRAPPER */}

    </div>
  );
};

export default AchievementsModal;