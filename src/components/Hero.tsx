"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
           <div className="mt-8">
        <motion.img whileHover={{ scale: 1.1, rotate: 5 }} style={{ originX: 0.5, originY: 0.5 }}
          src="/Profile.png"
          alt="Ihab Abou Khzam"
          className="mb-5 w-40 md:w-56 rounded-full border-4 border-blue-500 object-contain aspect-square max-h-56 object-top p-2 bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

        />
      </div>
      {/* ===== HERO TEXT ===== */}
      <motion.h1 whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}

      >
        Hi, I’m {/* EDIT: Put your name here */} Ihab Abou Khzam
      </motion.h1>

      <motion.p whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}
        className="text-xl md:text-2xl mb-6 max-w-3xl text-center text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

      >
        {/* EDIT: Add your short description here */}
        I’m a Full-Stack Developer building scalable, high-performance web applications. I focus on creating seamless user experiences while delivering clean and maintainable solutions.
      </motion.p>



 

      {/* ===== SCROLL-DOWN INDICATOR ===== */}
      <motion.div
        className="absolute bottom-10 flex justify-center w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
      >
        {/* Simple bouncing line, you can replace with an arrow icon if you want */}
        <div className="border-b-2 border-white w-8 animate-bounce"></div>
      </motion.div>
    </motion.section>
  );
}
