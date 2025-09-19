"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function Contact() {
  const items = [
    {
      key: "email",
      href: "mailto:Ihababk@gmail.com",
      label: "Email",
      icon: Mail,
      classes:
        "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-800/40",
    },
    {
      key: "linkedin",
      href: "https://www.linkedin.com/in/ihab-abou-khzam-7bb85436a/",
      label: "LinkedIn",
      icon: Linkedin,
      classes:
        "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-800/40",
    },
    {
      key: "github",
      href: "https://github.com/IhabAbk",
      label: "GitHub",
      icon: Github,
      classes:
        "bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg shadow-black/50",
    },
    {
      key: "phone",
      href: "tel:+96171420209",
      label: "+961 71 420 209",
      icon: Phone,
      classes:
        "bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-emerald-800/40",
    },
  ];

  const IconWrap = ({ Icon }: { Icon: LucideIcon }) => <Icon size={20} />;

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white py-24 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="mb-12 text-center text-gray-300 max-w-md sm:max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        Let’s connect! Reach out by email, phone, or through my social profiles.
      </motion.p>

      {/* Responsive buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-xl">
        {items.map((item, i) => (
          <motion.a
            key={item.key}
            href={item.href}
            target={
              item.key === "linkedin" || item.key === "github" ? "_blank" : undefined
            }
            rel={
              item.key === "linkedin" || item.key === "github"
                ? "noopener noreferrer"
                : undefined
            }
            className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-xl ${item.classes} 
                        transition transform will-change-transform focus:outline-none focus:ring-2 focus:ring-white/40 w-full sm:w-auto text-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 * i }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconWrap Icon={item.icon} />
            {item.label}
          </motion.a>
        ))}

        {/* WhatsApp Button */}
        <motion.button
          aria-label="Chat on WhatsApp"
          onClick={() => window.open("https://wa.me/96171420209", "_blank")}
          className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-emerald-800/40 transition transform will-change-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40 w-full sm:w-auto justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 * items.length }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone size={20} />
          Chat on WhatsApp
        </motion.button>
      </div>
    </motion.section>
  );
}
