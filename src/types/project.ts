import { Technology } from './technology';

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  icons: Technology[];
}
