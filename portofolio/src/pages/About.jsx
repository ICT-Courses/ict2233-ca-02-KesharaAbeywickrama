import React from 'react';
import aboutImg from '../assets/about.jpg';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 flex justify-center items-center px-4 py-16">
      {/* Animated floating circles as decorative background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-72 h-72 bg-blue-700 rounded-full opacity-20 top-10 left-20 animate-bounce-slow"
          animate={{ y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div 
          className="absolute w-56 h-56 bg-indigo-800 rounded-full opacity-20 bottom-20 right-10 animate-bounce-slow"
          animate={{ y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity }} />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl flex flex-col md:flex-row items-center gap-12 text-white"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Image with hover 3D effect */}
        <motion.div
          className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-700 cursor-pointer"
          variants={item}
          whileHover={{ scale: 1.07, rotate: 3, boxShadow: '0 20px 50px rgba(0,0,0,0.7)' }}
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div className="flex-1 space-y-6" variants={item}>
          {/* About Me Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 cursor-pointer"
            variants={item}
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.h1>

          {/* Introduction */}
          <motion.p
            className="text-lg leading-relaxed bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-sm"
            variants={item}
          >
            I am an IT undergraduate passionate about software development, IoT, and web technologies.
            I have hands-on experience in C#, WPF, React.js, Node.js, and database management.
            I enjoy creating projects that solve real-world problems and exploring new technologies.
          </motion.p>

          {/* Skills Box */}
          <motion.div
            className="p-4 rounded-xl shadow-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 cursor-pointer"
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              {['React.js, Node.js, Express.js', 'C#, WPF, .NET', 'Database Management (SQL, Firestore)', 'HTML, CSS, JS'].map((skill, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  whileHover={{ scale: 1.05, color: '#0ff' }}
                  className="cursor-pointer"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects Box */}
          <motion.div
            className="p-4 rounded-xl shadow-xl bg-gradient-to-r from-indigo-700 via-blue-700 to-blue-800 cursor-pointer"
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside space-y-1">
              {[
                'Healthcare Management System (C# + WPF)',
                'Rooms and Halls Reservation System (React + Firebase)',
                'Bakery Website (React + Bootstrap)',
                'Portfolio Website (React + TailwindCSS + Framer Motion)'
              ].map((project, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  whileHover={{ scale: 1.05, color: '#0ff' }}
                  className="cursor-pointer"
                >
                  {project}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
