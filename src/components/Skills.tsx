"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  
  "HTML5",
  "CSS3",
  "JavaScript",
    
  "PHP",
  "PostgreSQL",
  "Laravel",
  "MySQL",

    
  "Java",
  "C++",
  "Python",    
    
  "TypeScript",
  "Framer Motion",
  "Bootstrap",
  "Tailwind CSS",
 
  "Firebase",
  "Git",
  "WebSocket",
  ];

const positions = [
    { top: 20, left: 15 },
    { top: 20, left: 35 }, 
    { top: 20, left: 55 }, 
    { top: 20, left: 75 }, 
    { top: 30, left: 25 }, 
    { top: 30, left: 45 }, 
    { top: 30, left: 65 }, 
    { top: 40, left: 15 }, 
    { top: 40, left: 35 }, 
    { top: 40, left: 55 },
    { top: 40, left: 75 }, 
    { top: 50, left: 25 }, 
    { top: 50, left: 45 }, 
    { top: 50, left: 65 }, 
    { top: 60, left: 15 }, 
    { top: 60, left: 35 }, 
    { top: 60, left: 55 }, 
    { top: 60, left: 75 }, 
    { top: 70, left: 25 },
    { top: 70, left: 45 },
    { top: 70, left: 65 }, 
    
];

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen bg-gray-800 text-white py-24 px-8 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative z-10">
        Skills
      </motion.h2>

      {/* Floating Skills */}
      {skills.map((skill, i) => (
        <motion.div
          key={i}
      className="
  absolute
  px-5 py-3
  bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500
  rounded-full
  text-white
  font-semibold
  text-sm md:text-base
  shadow-lg shadow-indigo-800/50
  backdrop-blur-sm
  border border-white/20
  hover:scale-110 hover:shadow-xl hover:shadow-indigo-700/70
  transition-all duration-500 ease-in-out
"

          style={{
            top: `${positions[i].top}%`,
            left: `${positions[i].left}%`,
          }}
          animate={{
            y: [positions[i].top - 2, positions[i].top + 2, positions[i].top - 2],
            x: [positions[i].left - 2, positions[i].left + 2, positions[i].left - 2],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {skill}
        </motion.div>
      ))}
    </motion.section>
  );
}
