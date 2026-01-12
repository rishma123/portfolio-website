import { Skill, Project } from '../models/portfolio.model';

/**
 * Portfolio Configuration
 * Contains personal details, skills, and projects
 */

export const PERSONAL_INFO = {
  name: 'Rishma Merkaje Nanaiah',
  title: 'Frontend Developer (Angular)',
  bio: 'I am a frontend developer specializing in Angular and modern UI architecture. I enjoy building clean, scalable, and user-friendly interfaces with a strong focus on state management, reusable components, and maintainable code. I am particularly interested in solving real-world problems through thoughtful UI design.',
  email: 'rishmadinny3@gmail.com',
  github: 'https://github.com/rishma123',
  linkedin: 'https://www.linkedin.com/in/rishma97/',
  location: 'Germany'
};

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS/SCSS']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Angular (v18+)', 'Signals', 'Reactive Forms', 'Standalone Components']
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'SCSS', 'CSS Grid', 'Flexbox']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'REST APIs', 'GraphQL', 'Vitest', 'Playwright', 'VS Code']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Meal & Habit Tracker',
    description: 'A modern Angular 17 application that helps users track meals and daily habits with pattern recognition. Features include meal logging, calorie tracking, habit monitoring, and intelligent insights. Built with Angular Signals and responsive design using in-memory state management.',
    technologies: ['Angular 17', 'TypeScript', 'Signals', 'SCSS', 'Jasmine', 'Karma'],
    githubLink: 'https://github.com/rishma123/smart-meal-tracker',
    liveLink: 'https://smart-meal-tracker.netlify.app'
  },
  {
    id: '2',
    title: 'Job Application Tracker',
    description: 'A comprehensive Angular 17 job tracking application with CRUD operations, dashboard statistics, and interview management. Features include job search filtering, data persistence via localStorage, responsive design, and complete state management using modern Angular patterns.',
    technologies: ['Angular 17', 'TypeScript', 'Signals', 'SCSS', 'localStorage', 'Jasmine', 'Karma'],
    githubLink: 'https://github.com/rishma123/job-application-tracker',
    liveLink: 'https://job-application-tracker-portal.netlify.app'
  }
];

export const EXPERIENCE = [
  {
    title: 'Frontend Developer (Working Student)',
    company: 'EnBW',
    duration: '2024 - 2026',
    description: 'Working on Angular-based UI components with modern frontend patterns, including Signals and design-system-style components.'
  }
];
