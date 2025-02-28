export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  // githubUrl: string;
  liveUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}