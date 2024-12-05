import { Technology } from './technology';

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  linkProject: string;
  icons: Technology[];
}
