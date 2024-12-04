import { Project } from '@/types/project';

import { PostmanIcon } from '@/assets/icons/technologies/PostmanIcon';
import { ReactIcon } from '@/assets/icons/technologies/ReactIcon';

export const projects: Project[] = [
  {
    imageUrl: '/src/assets/images/projects/home-movie-app.png',
    title: '3D Solar System Planets to Explore',
    desc: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    icons: [
      {
        icon: (
          <PostmanIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
        ),
        name: 'Postman',
      },
      {
        icon: (
          <PostmanIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
        ),
        name: 'Postman',
      },
    ],
  },
  {
    imageUrl: '',
    title: 'xd',
    desc: '',
    icons: [
      {
        icon: (
          <ReactIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
        ),
        name: 'React',
      },
    ],
  },
];
