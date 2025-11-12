import { Code, Brush, Server, Database, LucideIcon } from 'lucide-react';

export const projects = [
  {
    title: 'Creative Hub',
    description: 'A platform for artists to showcase their work and connect with a community of creators. Built with Next.js and a modern tech stack.',
    image: 'project-1',
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Data Visualizer',
    description: 'An interactive dashboard for visualizing complex datasets. Features real-time data updates and customizable charts.',
    image: 'project-2',
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'E-Commerce Storefront',
    description: 'A fully responsive and performant e-commerce site with a custom backend, payment gateway integration, and admin panel.',
    image: 'project-3',
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool to help teams organize tasks, track progress, and collaborate effectively. Includes drag-and-drop functionality.',
    image: 'project-4',
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Tailwind CSS', icon: Brush },
  { name: 'Figma', icon: Brush },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Prisma', icon: Database },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
