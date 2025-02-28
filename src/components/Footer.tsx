import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white">Rao Muhammad Hassan</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer crafting exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/raomuhammadhassan" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rao-m-hassan/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:raohassan2244@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Services', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX Design',
                'Cloud Solutions',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Lahore, Pakistan</li>
              <li>raohassan2244@gmail.com</li>
              <li>+92 (309) 021-0162</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Rao Muhammad Hassan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}