import { Technology } from './technology';

export interface Project {
  imageUrl: string;
  title: string;
  desc: string;
  icons: Technology[];
}
