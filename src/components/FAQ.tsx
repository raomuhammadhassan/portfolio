import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Node.js, TypeScript, and various cloud platforms. I stay updated with the latest trends and best practices in software development."
  },
  {
    question: "How do you handle project communication?",
    answer: "I maintain clear and consistent communication through regular updates, progress reports, and scheduled meetings. I use project management tools to ensure transparency and effective collaboration."
  },
  {
    question: "What is your development process?",
    answer: "My development process follows an agile methodology, starting with thorough requirements gathering, followed by iterative development cycles, regular testing, and continuous deployment."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer post-project support and maintenance services to ensure your application continues to run smoothly and stays up-to-date with the latest security patches and improvements."
  },
  {
    question: "How do you ensure code quality and security?",
    answer: "I implement comprehensive testing strategies, follow security best practices, and use static code analysis tools. All code goes through thorough review processes before deployment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold dark:text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}