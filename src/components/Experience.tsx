import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Founder & Full Stack Developer",
    company: "Evonix Studio",
    location: "Lahore - Pakistan",
    period: "October 2024 - Present",
    description: "Spearheaded the development of scalable web applications, optimized system performance, and guided the technical strategy for innovative solutions.",
    achievements: [
    "Enhanced system efficiency, reducing load times by 50% through code and database optimization",
    "Architected and deployed a modular, scalable system to support high-traffic applications",
    "Managed and mentored a team of developers, fostering skill growth and project success"
  ]
  },
  {
    id: 2,
    role: "Laravel Developer",
    company: "Falconic Tech",
    location: "Lahore - Pakistan",
    period: "Feburary 2024 - October 2024",
    description: "Developed and optimized Laravel-based web applications, ensuring high performance and scalability. Collaborated with cross-functional teams to deliver robust backend solutions and improve system efficiency.",
    achievements: [
      "Optimized backend performance, reducing API response time by 45%",
      "Designed and integrated RESTful APIs, enhancing system interoperability",
      "Implemented role-based access control (RBAC) for secure user management",
      "Collaborated with frontend teams to create seamless UI/UX experiences"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Info-Sync",
    location: "Lahore - Pakistan",
    period: "2023 - 2024",
    description: "Developed responsive and visually engaging web applications, ensuring seamless user experiences across devices. Collaborated with designers and backend teams to deliver high-quality frontend solutions.",
    achievements: [
    "Designed and developed 10+ fully responsive client websites using modern frontend technologies",
    "Implemented a scalable design system, improving UI consistency and development efficiency",
    "Optimized frontend performance, reducing load times and decreasing bug reports by 30%"
  ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative pl-20 pb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800"></div>
                
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <h3 className="text-xl font-bold dark:text-white">{exp.role}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex gap-4 text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}