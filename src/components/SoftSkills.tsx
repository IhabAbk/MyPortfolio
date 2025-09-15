"use client";
import { motion } from "framer-motion";

export default function SoftSkills() {
  const softSkills = [
     { name: "Communication", level: 80 },
    { name: "English Language", level: 75 },
    { name: "Team Collaboration", level: 80 },
    { name: "Motivation", level: 85 },
    { name: "Problem Solving", level: 85 },
    { name: "Time Management", level: 75 },
  ];
  return (
    <motion.section
      id="soft-skills"
      className="min-h-screen bg-gray-800 text-white py-24 px-4 md:px-8"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Soft Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-items-center">
        {softSkills.map((skill, i) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const progress = (skill.level / 100) * circumference;

          return (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/20 flex flex-col items-center w-56"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative w-32 h-32 mb-6">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{ strokeDashoffset: circumference - progress }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.2 }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Percentage in center */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {skill.level}%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
