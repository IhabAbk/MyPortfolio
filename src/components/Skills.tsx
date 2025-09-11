"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "FrontEnd",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      category: "BackEnd",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Laravel", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "WebSocket", level: 65 },
      ],
    },
    {
      category: "OOP & Programming",
      skills: [
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "Python", level: 80 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      category: "Others",
      skills: [{ name: "Git", level: 85 }],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-gray-800 text-white py-24 px-4 md:px-8"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
              {cat.category}
            </h3>
            <div className="flex flex-col gap-4">
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between mb-1 text-sm sm:text-base">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
