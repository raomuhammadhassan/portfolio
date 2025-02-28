import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "Bachelor In Software Engineering",
    school: "The Superior University",
    year: "2022-2026",
    description: "Currently pursuing a Bachelor's degree in Software Engineering. Studying a wide range of subjects including software development, data structures, algorithms, and software testing. Gaining hands-on experience in building web applications, mobile apps, and software systems."},
  {
    id: 2,
    degree: "Intermediate In Computer Science",
    school:"Superior College For Boys Hasilpur",
    year: "2020-2022",
    description: "Completed Intermediate in Computer Science with a strong emphasis on programming, database management, and system design. Gained expertise in problem-solving, logic building, and fundamental computing principles."
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <div key={edu.id} className="mb-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold dark:text-white">{edu.degree}</h3>
              </div>
              <div className="ml-8">
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">{edu.school}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}