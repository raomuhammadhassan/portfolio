import React, { useState, useEffect } from 'react';
import myImage from "../assets/porfolio.png";
import { Github, Linkedin, Mail, ArrowDown, ChevronDown } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
  
     <section 
     id="home" 
     className="relative min-h-screen flex items-center pt-20 overflow-hidden"
     style={{
       backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(145, 107, 255, 0.1) 0%, rgba(0, 0, 0, 0) 80%)'
     }}
   >
     <div className="absolute inset-0 overflow-hidden">
       {Array.from({ length: 20 }).map((_, i) => (
         <div
           key={i}
           className="absolute rounded-full bg-purple-500/10 dark:bg-purple-500/5"
           style={{
             width: `${Math.random() * 300 + 50}px`,
             height: `${Math.random() * 300 + 50}px`,
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDuration: `${Math.random() * 20 + 10}s`,
             animationDelay: `${Math.random() * 5}s`,
             transform: `scale(${Math.random() * 0.5 + 0.5})`,
             opacity: Math.random() * 0.5 + 0.1,
           }}
         />
       ))}
     </div>
     
     <div className="container mx-auto px-4 z-10">
       <div className="flex flex-col lg:flex-row items-center gap-12">
         <div className="flex-1 space-y-8 text-center lg:text-left">
           <div 
             className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium"
             style={{
               transform: `translateX(${mousePosition.x * 20 - 10}px) translateY(${mousePosition.y * 20 - 10}px)`,
               transition: 'transform 0.2s ease-out'
             }}
           >
             👋 Hello, I'm a Full Stack Developer
           </div>
           
           <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-500 dark:text-gray-400 font-bold leading-tight">
             Crafting <span className="relative">
               <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">digital</span>
               <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 transform -rotate-1"></span>
             </span> experiences
           </h1>
           
           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
             I'm a full-stack developer specializing in building exceptional digital experiences. 
             Currently, I'm focused on creating accessible, human-centered products.
           </p>
           
           <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
             <a 
               href="#projects" 
               className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:translate-y-[-2px] transition-all"
             >
               View My Work
             </a>
             <a 
               href="#contact" 
               className="px-8 py-4 rounded-full border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transform hover:translate-y-[-2px] transition-all"
             >
               Contact Me
             </a>
           </div>
           
           <div className="flex gap-6 justify-center lg:justify-start pt-4">
             <a 
               href="https://github.com/raomuhammadhassan" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all"
             >
               <Github className="w-6 h-6" />
             </a>
             <a 
               href="https://www.linkedin.com/in/rao-m-hassan/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all"
             >
               <Linkedin className="w-6 h-6" />
             </a>
             <a 
               href="mailto:raohassan2244@gmail.com"
               className="p-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all"
             >
               <Mail className="w-6 h-6" />
             </a>
           </div>
         </div>
         
         <div className="flex-1 relative">
           <div 
             className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
             style={{
               transform: `translateX(${mousePosition.x * -30 + 15}px) translateY(${mousePosition.y * -30 + 15}px)`,
               transition: 'transform 0.2s ease-out'
             }}
           >
             {/* 3D Card Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl transform rotate-6 scale-105 opacity-70 blur-sm" />
             
             <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
               {/* Profile Image */}
               <img 
                 src=  {myImage} 
                 alt="Developer" 
                 className="w-full h-full "
               />
               
               {/* Overlay with gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
               
               {/* Content overlay */}
               <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                 <h3 className="text-2xl font-bold">Rao Muhammad Hassan</h3>
                 <p className="text-gray-300">Full Stack Developer</p>
                 
                 <div className="mt-4 flex flex-wrap gap-2">
                   {['Laravel', 'Node.js', 'Next Js'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
             
             {/* Decorative elements */}
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70 blur-md" />
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-500 rounded-full opacity-70 blur-md" />
           </div>
         </div>
       </div>
     </div>
     
     <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
       <a 
         href="#project" 
         className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
       >
         {/* <span className="text-sm font-medium mb-2">Scroll Down</span>
         <ChevronDown className="w-6 h-6" /> */}
       </a>
     </div>
   </section>
   
  );
}
