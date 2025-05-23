import React from 'react';
import AqibImage from "../assets/aqib.png";
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "SoftSpectra Tech",
    description: "A powerful and scalable web solution built using Laravel, Bootstrap, and MySQL, enhanced with various plugins to optimize functionality. Designed for performance, security, and seamless user experience.",
    image: "https://softspectratech.com/storage/soft-spectra-tech-5.png",
    technologies: ["Laravel", "Bootstrap", "Swiper", "Slick", "MySql", "JQuery"],
    // githubUrl: "https://github.com",
    liveUrl: "https://softspectratech.com/"
  },
  {
    id: 2,
    title: "Xtreme Path Finder",
    description: "A robust and scalable web solution developed with  Bootstrap, and MySQL, integrated with  plugins to enhance functionality. Engineered for high performance, security, and a seamless user experience.",
    image: "https://travelbookingengine.co.uk/uploads/global/logo.png",
    technologies: ["Html/CSS", "PHP", "BootStrap", "Jquery", "MySql", "Swiper"],
    // githubUrl: "https://github.com",
    liveUrl: "https://travelbookingengine.co.uk/"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Aqib Chaudhary is a multifaceted professional from Pakistan with expertise in Cyber Ethical Hacking, Mobile Development, Flutter Development, Web Design, and online earning strategies",
    image: AqibImage,
    technologies: ["Laravel", "Botstrap", "MySql", "JQuery", "APIs","AOS"],
    // githubUrl: "https://github.com",
    liveUrl: "https://aqibchaudhary.com"
  },
  {
    id: 4,
    title: "Hub Pacific Limited",
    description: "Hub Pacific Limited is a Hong Kong-based general trading company focused on supplying electronic components and related products with reliability, and customer satisfaction by ensuring timely delivery.",
    image: "https://hubpacific.com/storage/210/67b386125b4a8_logo-transparent.png",
    technologies: ["Laravel", "Botstrap", "MySql", "JQuery", "APIs"],
    // githubUrl: "https://github.com",
    liveUrl: "https://hubpacific.com"
  },
  {
    id: 5,
    title: "PIAST",
    description: "The Pakistan Institute of Arts Sciences and Technologies emphasizes academic excellence, a commitment to service, mutual respect, and the development of disciplined citizens",
    image: "https://stagging.piast.edu.pk/storage/logo/piast-logo-png-copy-1.png",
    technologies: ["Laravel", "Botstrap", "MySql", "JQuery", "APIs"],
    // githubUrl: "https://github.com",
    liveUrl: "https://stagging.piast.edu.pk"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-28 py-5 px-5 dark:bg-white" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {/* <a href={project.githubUrl} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a> */}
                  <a href={project.liveUrl} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}