import React from 'react';
import { Code2, Rocket, Users, Coffee } from 'lucide-react';

const stats = [
  { icon: <Code2 />, value: "5+", label: "Years of Experience" },
  { icon: <Rocket />, value: "50+", label: "Projects Completed" },
  { icon: <Users />, value: "30+", label: "Happy Clients" },
  { icon: <Coffee />, value: "∞", label: "Coffee Cups" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl font-bold dark:text-white">
                Crafting Digital Experiences with Passion & Purpose
              </h2>

              <div className="space-y-5 mt-6 text-gray-600 dark:text-gray-300">
                <p>
                  I’m a passionate Full-Stack Developer with expertise in Laravel, Vue.js, React.js, MySQL, and Tailwind CSS. With a strong foundation in web development and UI/UX design.
                </p>
                <p>
                  With years of experience in the industry, I have successfully developed and deployed custom web solutions, e-commerce platforms, and admin dashboards for businesses of all sizes. My approach combines clean code, optimized performance, and intuitive design to create solutions that are both functional and visually appealing.
                </p>
                <p>
                  <b>My Expertise Includes:</b> <br />
                  <b>✅ Backend Development:</b> Laravel, PHP, MySQL, API integrations<br />
                  <b>✅ Frontend Development:</b> Vue.js, React.js, Tailwind CSS, Bootstrap<br />
                  <b>✅ E-commerce & Admin Panels</b> for seamless business operations<br />
                  <b>✅ Performance Optimization</b> to handle high traffic efficiently</p>
          

            </div>

            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                download="Rao_Hassan_Resume.pdf"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all flex items-center gap-2"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transform hover:scale-105 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}