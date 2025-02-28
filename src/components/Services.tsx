import React from 'react';
import { Code, Globe, Server, Smartphone, Palette, Database } from 'lucide-react';

const services = [
  {
    icon: <Code />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    features: ["React/Next.js", "Laravel", "Javascript", "Responsive Design"]
  },
  {
    icon: <Server />,
    title: "Backend Development",
    description: "Scalable and secure server-side solutions for your applications.",
    features: ["Node.js", "laravel", "RESTful APIs", "MySql"]
  },
  {
    icon: <Database />,
    title: "Database Design",
    description: "Efficient database architecture and optimization services.",
    features: ["MySql", "MongoDB", "PostgreSQL", "Database Management"]
  },
  {
    icon: <Smartphone />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that work seamlessly.",
    features: ["React Native", "Progressive Web Apps", "Mobile-First Design"]
  },
  {
    icon: <Palette />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience.",
    features: ["Figma", "Prototyping", "Azure", "User Testing"]
  },
  {
    icon: <Globe />,
    title: "SEO & Digital Media",
    description: "Optimized digital strategies to improve visibility and engagement.",
    features: ["SEO Audits", "Keyword Research", "Social Media Marketing", "Google Analytics"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Services Offered</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive solutions tailored to your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}