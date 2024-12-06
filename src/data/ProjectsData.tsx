import { Project } from '@/types/project';

import { ReactIcon } from '@/assets/icons/technologies/ReactIcon';
import { NextJsIcon } from '@/assets/icons/technologies/NextJsIcon';
import { TailwindcssIcon } from '@/assets/icons/technologies/TailwindcssIcon';
import { ViteIcon } from '@/assets/icons/technologies/ViteIcon';

export const projects: Project[] = [
  {
    imageUrl: '/src/assets/images/projects/home-books-app.png',
    title: 'Books App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://books-context.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <ViteIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: <NextJsIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'NextJS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-journal-app.png',
    title: 'Journal App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://journal-app-navy-nine.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <NextJsIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'NextJS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-movie-app.png',
    title: 'Movie App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://movie-app-mu-nine.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <NextJsIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'NextJS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-heroes-app.png',
    title: 'Heroes App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://heroes-five-blue.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <NextJsIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'NextJS',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-car-app.png',
    title: 'Card App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://next-car-mu.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-pokemon-app.png',
    title: 'Pokemon App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://retford.github.io/Pokedex/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-alura-geek-app.png',
    title: 'Alura Geek App',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://retford.github.io/AluraGeek/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
    ],
  },
  {
    imageUrl: '/src/assets/images/projects/home-task-crud-app.png',
    title: 'Task App - CRUD',
    description:
      'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    linkProject: 'https://crud-next-prisma-retford.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
    ],
  },
];
