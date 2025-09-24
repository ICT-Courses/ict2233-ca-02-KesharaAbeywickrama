import React from "react";
import ProjectCard from "../components/ProjectCard"; 
import { motion } from "framer-motion";

{/* projects */}

const projects = [
  {
    title: "Healthcare Management System",
    description: "A C# + WPF desktop app for managing patients, doctors, and appointments.",
    imageUrl: "src/assets/project1.jpg",
    repoLink: "https://github.com/ICT-Courses/application-development-ca1-KesharaAbeywickrama",
    liveDemo: null,
  },
  {
    title: "Rooms and Halls Reservation System",
    description: "A React + Firebase system for reserving rooms and halls in institutions.",
    imageUrl: "src/assets/project2.jpg",
    repoLink: "https://github.com/pehesara112455/softstack",
    
  },
  {
    title: "Bakery Website",
    description: "A React + Bootstrap website with product listings and order features.",
    imageUrl: "src/assets/project3.jpg",
    repoLink: "https://github.com/ICT-Courses/application-development-ca1-KesharaAbeywickrama",
    
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, TailwindCSS, and Framer Motion.",
    imageUrl: "src/assets/project4.jpg",
    repoLink: "https://github.com/ICT-Courses/ict2233-ca-01-KesharaAbeywickrama",
    
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <ProjectCard
              title={proj.title}
              description={proj.description}
              imageUrl={proj.imageUrl}
              repoLink={proj.repoLink}
              liveDemo={proj.liveDemo}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
