import { Project } from '@/types/project';

import { ReactIcon } from '@/assets/icons/technologies/ReactIcon';
import { NextJsIcon } from '@/assets/icons/technologies/NextJsIcon';
import { TailwindcssIcon } from '@/assets/icons/technologies/TailwindcssIcon';

export const projects: Project[] = [
  {
    imageUrl: '/src/assets/images/projects/home-movie-app.png',
    title: '3D Solar System Planets to Explore',
    desc: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://movie-app-mu-nine.vercel.app/',
    icons: [
      {
        icon: <NextJsIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'NextJS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '',
    title: 'xd',
    desc: '',
    linkProject: 'https://movie-app-mu-nine.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
    ],
  },
];
