import React from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  {
    name: "Tech Giants Inc.",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop",
    description: "Collaborated on enterprise-scale cloud solutions.",
    testimonial: "Exceptional problem-solving skills and attention to detail."
  },
  {
    name: "Innovation Labs",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop",
    description: "Developed AI-powered analytics dashboard.",
    testimonial: "Delivered complex features ahead of schedule."
  },
  {
    name: "Future Systems",
    logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop",
    description: "Built scalable e-commerce platform.",
    testimonial: "Outstanding technical expertise and communication."
  },
  {
    name: "Digital Solutions Co.",
    logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop",
    description: "Implemented secure payment systems.",
    testimonial: "Highly professional and reliable partner."
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Clients & Collaborations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[2/1] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold dark:text-white">{client.name}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{client.description}</p>
                
                <blockquote className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 italic text-gray-600 dark:text-gray-300">
                  "{client.testimonial}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}