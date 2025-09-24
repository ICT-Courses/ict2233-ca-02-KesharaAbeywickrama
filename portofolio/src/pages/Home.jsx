import profileImg from '../assets/profile.jpg';
import bgHome from '../assets/bghome.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={bgHome}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}

      <motion.div
        className="max-w-3xl mx-auto text-white flex flex-col items-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-400 ring-offset-4 ring-offset-black mb-6 cursor-pointer"
          variants={item}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={profileImg}
            alt="Keshara Abeywickrama"
            className="object-cover w-full h-full"
          />
        </motion.div>

   
        <motion.h1
          className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-600 bg-clip-text text-transparent leading-tight cursor-pointer"
          title="Keshara Abeywickrama"
          variants={item}
          whileHover={{ scale: 1.05 }}
        >
          Keshara Abeywickrama
        </motion.h1>

        <motion.p
          className="text-2xl font-semibold mb-8 tracking-wide"
          variants={item}
        >
          IT Undergraduate
        </motion.p>

        {/* Welcome Text */}

        <motion.p
          className="mb-10 text-lg text-center max-w-lg text-gray-200"
          variants={item}
        >
          Welcome to my personal portfolio website, where passion meets
          technology! Explore my latest projects, discover my skills, and
          let’s connect to build something amazing together.
        </motion.p>

        {/* Buttons */}

        <motion.div className="flex gap-6" variants={item}>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:brightness-110 transition transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
