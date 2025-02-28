import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    "id": 1,
    "name": "John Doe",
    "role": "CEO",
    "company": "TechSphere",
    "content": "Working with Rao Muhammad Hassan was an absolute pleasure! Their expertise in Laravel and Vue.js brought our project to life with a seamless and modern design. Highly recommended!",
    "avatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&h=200"
  },
  {
    "id": 2,
    "name": "Sarah Ahmed",
    "role": "Founder",
    "company": "DigitalVista",
    "content": "Rao Muhammad Hassan is a true professional who understands client needs and delivers high-quality solutions. Their ability to manage complex projects and provide creative solutions helped our business scale efficiently.",
    "avatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&h=200"
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "role": "Marketing Director",
    "company": "GrowthPlus",
    "content": "Their knowledge of SEO and lead generation has been a game-changer for our company. Within weeks, we saw a significant increase in traffic and conversions.",
    "avatar": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&h=200"
  },
  {
    "id": 4,
    "name": "Emily Carter",
    "role": "Co-Founder",
    "company": "TrendyWear",
    "content": "We hired Rao Muhammad Hassan to build an e-commerce platform for our brand, and the results were outstanding. The admin panel, payment gateway integration, and UI/UX design were top-notch.",
    "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&h=200"
  },
  {
    "id": 5,
    "name": "David Miller",
    "role": "CTO",
    "company": "FinTech Solutions",
    "content": "Not only is Rao Muhammad Hassan a highly skilled developer, but they also provide excellent support. Their Laravel and MySQL expertise made our application fast and efficient.",
    "avatar": "https://images.unsplash.com/photo-1531561855568-3036cd4f03ba?auto=format&fit=crop&w=200&h=200"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Testimonials</h2>
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-12"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}