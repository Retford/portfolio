import { Project } from '@/types/project';

import { ReactIcon } from '@/assets/icons/technologies/ReactIcon';
import { NextJsIcon } from '@/assets/icons/technologies/NextJsIcon';
import { TailwindcssIcon } from '@/assets/icons/technologies/TailwindcssIcon';
import { ViteIcon } from '@/assets/icons/technologies/ViteIcon';
import { TestingLibraryIcon } from '@/assets/icons/technologies/TestingLibraryIcon';
import { FirebaseIcon } from '@/assets/icons/technologies/FirebaseIcon';
import { TypeScriptIcon } from '@/assets/icons/technologies/TypeScriptIcon';
import { JavaScriptIcon } from '@/assets/icons/technologies/JavaScriptIcon';
import { Html5Icon } from '@/assets/icons/technologies/Html5Icon';
import { Css3Icon } from '@/assets/icons/technologies/Css3Icon';
import { PrismaIcon } from '@/assets/icons/technologies/PrismaIcon';

export const projects: Project[] = [
  {
    imageUrl: '/images/projects/home-books-app.png',
    title: 'Books App',
    description:
      'Es una aplicación web desarrollada con React que utiliza Context API para la gestión eficiente de estados globales. El sitio permite explorar una lista de libros, acceder a detalles individuales y realizar acciones como marcar favoritos. Este proyecto resalta el uso de tecnologías modernas para optimizar el flujo de datos entre componentes en una interfaz minimalista y responsiva.',
    linkProject: 'https://books-context.vercel.app/',
    icons: [
      {
        icon: <ViteIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-journal-app.png',
    title: 'Journal App',
    description:
      'Es una aplicación web para crear y gestionar entradas de diario con una interfaz simple y responsiva, desarrollada en React. Ideal para organizar pensamientos o tareas diarias.',
    linkProject: 'https://journal-app-navy-nine.vercel.app/',
    icons: [
      {
        icon: <ViteIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <FirebaseIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Firebase',
      },
      {
        icon: <TestingLibraryIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Testing-Library',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-movie-app.png',
    title: 'Movie App',
    description:
      'Es una aplicación web desarrollada con React que utiliza la API de TMDB para explorar películas y programas de televisión. Permite buscar títulos populares, ver detalles y descubrir tendencias en una interfaz moderna y responsiva.',
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
    imageUrl: '/images/projects/home-heroes-app.png',
    title: 'Heroes App',
    description:
      'Es una aplicación web creada con React que permite explorar personajes de Marvel mediante la API oficial. Incluye funcionalidades como búsqueda, detalles de héroes y una experiencia fluida en dispositivos móviles.',
    linkProject: 'https://heroes-five-blue.vercel.app/',
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
        icon: <TailwindcssIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TailwindCSS',
      },
      {
        icon: <TestingLibraryIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Testing-Library',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-car-app.png',
    title: 'Car App',
    description:
      'Un sitio web moderno de búsqueda y exploración de autos, diseñado como un showroom virtual. Permite a los usuarios filtrar, buscar y conocer detalles específicos sobre vehículos utilizando datos obtenidos de APIs externas.',
    linkProject: 'https://next-car-mu.vercel.app/',
    icons: [
      {
        icon: <ReactIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'React',
      },
      {
        icon: <TypeScriptIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'TypeScript',
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
    imageUrl: '/images/projects/home-pokemon-app.png',
    title: 'Pokemon App',
    description:
      'Es una aplicación web interactiva desarrollada en HTML, CSS y JavaScript. Permite explorar una lista completa de Pokémon con sus detalles, estadísticas y habilidades. Los usuarios pueden buscar y filtrar Pokémon, lo que ofrece una experiencia dinámica para descubrir información sobre cada uno de ellos. Ideal para fanáticos de Pokémon y como ejemplo de un proyecto práctico que utiliza APIs para obtener datos en tiempo real.',
    linkProject: 'https://retford.github.io/Pokedex/',
    icons: [
      {
        icon: <Html5Icon className='w-9 h-9 hover:rounded-full' />,
        name: 'HTML5',
      },
      {
        icon: <Css3Icon className='w-9 h-9 hover:rounded-full' />,
        name: 'CSS3',
      },
      {
        icon: <JavaScriptIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'JavaScript',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-alura-geek-app.png',
    title: 'Alura Geek App',
    description:
      'Es una tienda en línea interactiva construida con HTML, CSS y JavaScript, que simula un e-commerce especializado en productos geek y de cultura pop. Los usuarios pueden navegar por una variedad de artículos, como figuras, ropa y accesorios, con una experiencia de compra dinámica que incluye filtros y una estructura bien organizada. El sitio fue diseñado para ser visualmente atractivo, con un enfoque en una interfaz amigable y fácil de navegar.',
    linkProject: 'https://retford.github.io/AluraGeek/',
    icons: [
      {
        icon: <Html5Icon className='w-9 h-9 hover:rounded-full' />,
        name: 'HTML5',
      },
      {
        icon: <Css3Icon className='w-9 h-9 hover:rounded-full' />,
        name: 'CSS3',
      },
      {
        icon: <JavaScriptIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'JavaScript',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-task-crud-app.png',
    title: 'Task App - CRUD',
    description:
      'Es una aplicación web desarrollada con Next.js y Prisma que permite gestionar datos de una base de datos a través de un sistema CRUD (Crear, Leer, Actualizar y Eliminar). El proyecto ofrece una interfaz limpia y sencilla para manejar entradas, ideal para aprender cómo integrar bases de datos con aplicaciones modernas en Next.js utilizando Prisma como ORM.',
    linkProject: 'https://crud-next-prisma-retford.vercel.app/',
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
      {
        icon: <PrismaIcon className='w-9 h-9 hover:rounded-full' />,
        name: 'Prisma',
      },
    ],
  },
];
