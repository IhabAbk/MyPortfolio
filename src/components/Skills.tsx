"use client";
import React from "react";
import { motion } from "framer-motion";

type Skill = { name: string; level: number };
type Category = { category: string; skills: Skill[] };

export default function Skills() {
  const skillCategories: Category[] = [
    {
      category: "FrontEnd",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "HTML5", level: 90 },
        { name: "CSS3, SCSS, Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "BackEnd",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 70 },
        { name: "WebSocket", level: 65 },
      ],
    },
    {
      category: "High Level Languages",
      skills: [
        { name: "Java", level: 70 },
        { name: "C++", level: 50 },
        { name: "Python", level: 65 },
      ],
    },
    {
      category: "Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Firebase", level: 70 },
        { name: "API Integration", level: 75 },
        { name: "Bootstrap", level: 70 },
        { name: "Framer Motion", level: 65 },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-gray-800 text-white py-24 px-4 md:px-8"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((cat) => (
          <FlipCard key={cat.category} category={cat} />
        ))}
      </div>
    </motion.section>
  );
}

function FlipCard({ category }: { category: Category }) {
  return (
    <div className="w-full h-[32rem] perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-gray-900 rounded-xl p-6 shadow-lg border border-white/20 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-bold">{category.category}</h3>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-gray-900 rounded-xl p-6 shadow-lg border border-white/20 flex flex-col gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl font-semibold mb-2 text-center">
            {category.category}
          </h3>

          <div className="flex-1 flex flex-col gap-3">
            {category.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm sm:text-base">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
