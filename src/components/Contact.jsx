import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState, useRef } from "react";
const Contact = () => {
const [showEmail, setShowEmail] = useState(false);
const [copied, setCopied] = useState(false);
const [showPhone, setShowPhone] = useState(false);
const [copiedPhone, setCopiedPhone] = useState(false);
const timerRef = useRef(null);
const emailTimerRef = useRef(null);
const handleCopy = () => {
  navigator.clipboard.writeText("syamlal2003p@gmail.com");
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
const handleCopyPhone = () => {
  navigator.clipboard.writeText("+918129429086");
  setCopiedPhone(true);

  setTimeout(() => {
    setCopiedPhone(false);
  }, 2000);
};
  return (
    <section id="contact" className="bg-[#E5E5E5] py-24 px-6">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-black font-display">
          Contact
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>

      {/* CONTENT */}
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

  {/* LEFT SIDE - TEXT */}
  <div className="text-center md:text-left">

    <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
      I solve real-world problems through simple, effective solutions.
      <br /><br />
      I’m looking for opportunities jobs, freelance work, or collaborations—where I can contribute and grow.
      <br /><br />
      If you’re building something meaningful, let’s talk.
    </p>

  </div>

  {/* RIGHT SIDE - CONTACT */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

    {/* EMAIL */}
    <div className="
      bg-white rounded-xl p-6
      border border-gray-200
      transition duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">
      <div className="flex justify-center mb-3 text-black">
        <Mail size={22} />
      </div>

      <h3 className="text-sm font-semibold text-black mb-1 text-center">
        Email
      </h3>

      <p className="text-gray-600 text-sm text-center">

  {!showEmail ? (
    <button
       onClick={() => {
        setShowEmail(true);

        // clear old timer
        if (emailTimerRef.current) {
          clearTimeout(emailTimerRef.current);
        }

        // new 10 sec timer
        emailTimerRef.current = setTimeout(() => {
          setShowEmail(false);
          setCopied(false);
        }, 10000);
      }}
      className="underline hover:text-black transition"
    >
      Show Email
    </button>
  ) : (
    <div className="flex flex-col items-center gap-2">

     <span className="break-all text-center">
  syamlal2003p@gmail.com
</span>

      <div className="flex gap-3">

        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-black hover:text-white transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <a
          href="mailto:syamlal2003p@gmail.com"
          className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-black hover:text-white transition"
        >
          Email ↗
        </a>

      </div>

    </div>
  )}

</p>
    </div>

    {/* PHONE */}
    <div className="
      bg-white rounded-xl p-6
      border border-gray-200
      transition duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">
      <div className="flex justify-center mb-3 text-black">
        <Phone size={22} />
      </div>

      <h3 className="text-sm font-semibold text-black mb-1 text-center">
        Phone
      </h3>

      <p className="text-gray-600 text-sm text-center">

  {!showPhone ? (
    <button
      onClick={() => {
  setShowPhone(true);

  // clear old timer (important)
  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

  // set new timer (10 sec)
  timerRef.current = setTimeout(() => {
    setShowPhone(false);
    setCopiedPhone(false);
  }, 10000);
}}
      className="underline hover:text-black transition"
    >
      Reveal Phone
    </button>
  ) : (
    <div className="flex flex-col items-center gap-2">

      {/* PHONE NUMBER */}
      <span className="break-all text-center">
        +91 81294 29086
      </span>

      {/* BUTTONS */}
      <div className="flex gap-3">

        {/* COPY */}
        <button
          onClick={handleCopyPhone}
          className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-black hover:text-white transition"
        >
          {copiedPhone ? "Copied!" : "Copy"}
        </button>

        {/* CALL */}
        <a
          href="tel:+918129429086"
          className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-black hover:text-white transition"
        >
          Call
        </a>

      </div>

    </div>
  )}

</p>
    </div>



{/* LINKEDIN */}
<div className="
  bg-white rounded-xl p-6
  border border-gray-200
  transition duration-300
  hover:-translate-y-2 hover:shadow-xl
">
  <div className="flex justify-center mb-3 text-black">
    <FaLinkedin size={24} />
  </div>

  <h3 className="text-md font-semibold text-black mb-1">
    LinkedIn
  </h3>

  <p className="text-gray-600 text-sm">
    <a 
      href="https://www.linkedin.com/in/syam-lal-p"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Profile
    </a>
  </p>
</div>



  </div>

</div>
    </section>
  );
};

export default Contact;