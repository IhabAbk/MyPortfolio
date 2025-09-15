"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing my skills, projects, and experience as a Software Developer.",
      tech: ["Next.js", "React" , "TypeScript" ,"Tailwind CSS" , "Framer Motion"],
    },
    {
      title: "Smart Parking System",
      description:
        "A smart parking solution that optimizes parking space usage and provides real-time availability updates.",
      tech: ["Html5", "CSS3", "JavaScript" ,"Php" , "MySQL" , "C++" , "Bootstrap" , "API Integration" ],
    },
    {
      title: "Delivery App",
      description:
        "A delivery mobile application that allows users to order products from local Businesses.",
      tech: ["ReactNative", "Bootstrap", "Node.js", "React.js", "PostgreSQL", "Node.js", "WebSocket","Firebase","API Integration"],
    },
     {
      title: "Barber Booking System",
      description:
        "A web-based application that allows users to book appointments with barbers.",
      tech: ["React.js", "JavaScript", "Php", "MySQL", "Tailwind CSS", "API Integration" ],
    },
     {
      title: "Bar Menu Ordering System",
      description:
        "A web-based application that allows users to order food and drinks from a bar's menu.",
      tech: ["Html5", "JavaScript", "Php", "MySQL", "SCSS", "Bootstrap", ],
    },
    {
      title: "Much more projects...",
      description:
        "A collection of various web-based applications showcasing different functionalities and technologies.",
      tech: ["I have used various technologies and frameworks to create these applications. ", ],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            onClick={() => setSelectedProject(i)}
          >
            <h3 className="text-2xl font-bold mb-3 text-center">{proj.title}</h3>
            <p className="text-gray-300 text-center mb-4">{proj.description}</p>
         
          </motion.div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white p-8 rounded-xl max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-500 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
