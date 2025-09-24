import React from "react";
import aboutImg from "../assets/about.jpg"; // your photo
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      {/* photo */}
      <motion.div
        className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-8 shadow-lg"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        <img
          src={aboutImg}
          alt="Keshara Abeywickrama"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h2
        className="text-4xl font-bold mb-6 text-cyan-400"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        About Me
      </motion.h2>

      {/* intro */}
      <motion.p
        className="text-lg leading-relaxed bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-sm mb-10"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        Hello! I'm{" "}
        <span className="font-semibold text-cyan-300">Keshara Abeywickrama</span>
        , a passionate IT undergraduate with a strong interest in{" "}
        <span className="font-semibold">software development</span>, the{" "}
        <span className="font-semibold">Internet of Things (IoT)</span>, and
        modern <span className="font-semibold">web technologies</span>. I thrive
        on solving real-world problems through creative coding, designing
        intuitive user interfaces, and building projects that bring ideas to
        life.
        <br />
        <br />
        Over the past few years, I’ve gained hands-on experience with{" "}
        <span className="font-semibold">
          C#, WPF, React.js, Node.js, and databases
        </span>
        , and I continue to explore new frameworks and tools to sharpen my
        skills. I believe technology should not just function - it should
        inspire, connect, and make life easier.
      </motion.p>

      {/* skills Section */}
      <motion.div
        className="mb-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Skills</h3>
        <ul className="list-disc list-inside space-y-2">
          {[
            "Full-Stack Web Development (React.js, Node.js, Express.js, Firebase)",
            "Desktop Applications (C#, WPF, .NET)",
            "Database Design & Management (SQL, Firestore, MySQL)",
            "UI/UX Prototyping & Frontend Styling (TailwindCSS, Bootstrap, Figma)",
          ].map((skill, i) => (
            <motion.li
              key={i}
              variants={listItem}
              whileHover={{ scale: 1.05, color: "#0ff" }}
              className="cursor-pointer"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* projects Section */}
      <motion.div
        className="mb-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Projects</h3>
        <ul className="list-disc list-inside space-y-2">
          {[
            "Healthcare Management System (C# + WPF) – streamlined patient & doctor records",
            "Rooms & Halls Reservation System (React + Firebase) – real-time booking system",
            "Bakery Website (React + Bootstrap) – modern UI with product showcases",
            "Portfolio Website (React + TailwindCSS + Framer Motion) – personal branding space",
          ].map((project, i) => (
            <motion.li
              key={i}
              variants={listItem}
              whileHover={{ scale: 1.05, color: "#0ff" }}
              className="cursor-pointer"
            >
              {project}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* education  */}
      <motion.div
        className="mb-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Education</h3>
        <div className="relative border-l-2 border-cyan-400 pl-6 space-y-8">
          <motion.div variants={item}>
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyan-400 rounded-full"></div>
            <h4 className="text-lg font-bold">BSc (Hons) in Information Technology</h4>
            <p className="text-sm text-gray-400">
              University of Sri Jayawardenapura – 2025 to Present
            </p>
            <p className="mt-2">
              Selected into the second year after completing BA in Arts. Gaining strong foundations in software engineering, databases, networks, and application development.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyan-400 rounded-full"></div>
            <h4 className="text-lg font-bold">Bachelor in Arts</h4>
            <p className="text-sm text-gray-400">2024 – 2025</p>
            <p className="mt-2">
              Completed first year of Bachelor in Arts before transferring to BSc (Hons) IT program.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyan-400 rounded-full"></div>
            <h4 className="text-lg font-bold">Viharamahadevi Balika Vidyalaya, Kiribathgoda</h4>
            <p className="text-sm text-gray-400">2009 – 2023</p>
            <p className="mt-2">
              Completed GCE O/L in 2019 and GCE A/L in 2022-2023, studying French, ICT, Logic, and Scientific Method.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
