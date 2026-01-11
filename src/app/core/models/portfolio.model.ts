/**
 * Portfolio Project Model
 */
export interface Project {
  id: string;
  title: string;
  name?: string; // alias for title
  description: string;
  technologies: string[];
  githubLink: string;
  github?: string; // alias for githubLink
  liveLink?: string;
  live?: string; // alias for liveLink
  imageUrl?: string;
}

/**
 * Skill Model
 */
export interface Skill {
  category: string;
  items: string[];
}
