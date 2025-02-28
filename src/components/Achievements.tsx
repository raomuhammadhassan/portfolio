import React from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy />,
    title: "Best Web Application",
    organization: "Tech Innovation Awards 2023",
    description: "Recognized for developing an innovative healthcare management system."
  },
  {
    icon: <Award />,
    title: "Outstanding Developer",
    organization: "Developer Excellence Awards",
    description: "Awarded for contributions to open-source projects and community development."
  },
  {
    icon: <Star />,
    title: "Top Contributor",
    organization: "GitHub",
    description: "Ranked among top 1% contributors in the React.js community."
  },
  {
    icon: <Medal />,
    title: "Innovation Excellence",
    organization: "Digital Summit 2022",
    description: "First place in the annual hackathon for innovative solutions."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Achievements & Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                  {achievement.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{achievement.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{achievement.organization}</p>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}