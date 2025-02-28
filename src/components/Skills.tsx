import React from 'react';
import { Code2, Server, Database, Palette } from 'lucide-react';

const skills = {
  frontend: ["React", "Next.js", "Bootstrap", "TailwindCSS"],
  backend: ["Node.js", "Express", "Laravel", "PHP"],
  database: ["MySql", "MongoDB", "PostgreSQL", "Database Management"],
  design: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory icon={<Code2 />} title="Frontend" skills={skills.frontend} />
          <SkillCategory icon={<Server />} title="Backend" skills={skills.backend} />
          <SkillCategory icon={<Database />} title="Database" skills={skills.database} />
          <SkillCategory icon={<Palette />} title="Design" skills={skills.design} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2">
          {icon}
        </div>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}