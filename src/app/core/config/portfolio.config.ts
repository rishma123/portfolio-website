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
    description: 'A frontend-only Angular application that helps users track meals and daily habits while identifying patterns such as frequent snacking or low-protein days. The app uses derived state and configuration-driven rules to provide meaningful, non-judgmental UI feedback.',
    technologies: ['Angular', 'TypeScript', 'Signals', 'Tailwind CSS', 'Fetch API', 'Vitest', 'Playwright'],
    githubLink: 'https://github.com/rishma123/smart-meal-tracker',
    liveLink: 'https://rishma-meal-tracker.netlify.app'
  },
  {
    id: '2',
    title: 'Job Application Tracker',
    description: 'A frontend application that helps users manage and track job applications, including applied, interview, rejected, and offer stages. Includes filtering, search, and derived statistics to visualize job search progress.',
    technologies: ['Angular', 'TypeScript', 'Signals', 'REST API', 'GraphQL', 'Tailwind CSS', 'Vitest', 'Playwright'],
    githubLink: 'https://github.com/rishma123/job-application-tracker',
    liveLink: 'https://rishma-job-tracker.netlify.app'
  }
];

export const EXPERIENCE = [
  {
    title: 'Frontend Developer (Working Student)',
    company: 'EnBW',
    duration: '2024 - Present',
    description: 'Working on Angular-based UI components with modern frontend patterns, including Signals and design-system-style components.'
  }
];
