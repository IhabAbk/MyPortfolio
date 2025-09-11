"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== Section Title ===== */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* ===== Professional Summary ===== */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-center mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I am a Full-Stack Developer passionate about crafting high-quality web applications that deliver great user experiences. I combine creativity and technical skills to solve complex problems, focusing on clean, maintainable code and scalable solutions.
      </motion.p>

      {/* ===== Highlight Features / Stats ===== */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold mb-2">2+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold mb-2">20+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold mb-2">5+</h3>
          <p>Clients Worked With</p>
        </div>
      </motion.div>

      {/* ===== Optional Personal Note ===== */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-center mt-8 text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I enjoy collaborating with teams, learning new technologies, and continuously improving my skills to build modern, efficient, and user-focused applications.
      </motion.p>
    </motion.section>
  );
}
