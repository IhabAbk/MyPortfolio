"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Copy, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react"; // ✅ Import proper type

export default function Contact() {
  const [copied, setCopied] = useState(false);

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

  // ✅ Correct TypeScript type
  const IconWrap = ({ Icon }: { Icon: LucideIcon }) => <Icon size={20} />;

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white py-24 px-8"
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
        className="mb-12 text-center text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        Let’s connect! Reach out by email, phone, or through my social profiles.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, i) => (
          <motion.a
            key={item.key}
            href={item.href}
            target={item.key === "linkedin" || item.key === "github" ? "_blank" : undefined}
            rel={item.key === "linkedin" || item.key === "github" ? "noopener noreferrer" : undefined}
            className={`group flex items-center gap-2 px-6 py-3 rounded-xl ${item.classes} 
                        transition will-change-transform focus:outline-none focus:ring-2 focus:ring-white/40`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 * i }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrap Icon={item.icon} />
            {item.label}
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-md" />
          </motion.a>
        ))}

        <motion.button
          aria-label="Copy phone number"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText("+96171420209");
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            } catch {}
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 
                     shadow-lg shadow-emerald-800/40 transition will-change-transform
                     hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 * items.length }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? "Copied!" : "Copy Number"}
        </motion.button>
      </div>
    </motion.section>
  );
}
