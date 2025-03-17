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
import { BootstrapIcon } from '@/assets/icons/technologies/BootstrapIcon';
import { SequelizeIcon } from '@/assets/icons/technologies/SequelizeIcon';
import { ExpressIcon } from '@/assets/icons/technologies/ExpressIcon';

export const projects: Project[] = [
  {
    imageUrl: '/images/projects/home-teslo-app.png',
    title: 'Teslo - eCommerce',
    description:
      'Es un e-commerce desarrollado con Next.js, TypeScript y TailwindCSS, inspirado en una tienda de ropa y accesorios. Implementa una arquitectura optimizada con Zustand para la gestión del estado y consumo de APIs para la administración de productos y pedidos. Cuenta con autenticación de usuarios con NextAuth, manejo de carrito de compras y una experiencia responsiva para distintos dispositivos. Credenciales para probar, usuario: test@gmail.com password: 123456',
    projectLink: 'https://teslo.retford.dev/',
    codeLink: 'https://github.com/Retford/ecommerce',
    icons: [
      {
        icon: (
          <NextJsIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'NextJS',
      },
      {
        icon: (
          <TypeScriptIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TypeScript',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
      {
        icon: (
          <PrismaIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Prisma',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-note-app.webp',
    title: 'Note App',
    description:
      'Aplicación web diseñada para gestionar notas de forma eficiente. Incluye un sistema de autenticación mediante JWT con inicio de sesión por correo electrónico y contraseña. El frontend está desarrollado con React y TailwindCSS, mientras que el backend utiliza Node.js, Express, Sequelize y MySQL para una gestión estructurada y segura de los datos. Este proyecto destaca por su arquitectura escalable, un diseño responsivo y funcionalidades enfocadas en la experiencia del usuario. Credenciales para probar user: test@gmail.com password: 123456',
    projectLink: 'https://note.retford.dev',
    codeLink: 'https://github.com/Retford/noteapp-frontend',
    icons: [
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
      {
        icon: (
          <ExpressIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Express',
      },
      {
        icon: (
          <SequelizeIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Sequelize',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-calendar-app.webp',
    title: 'Calendar App',
    description:
      'Aplicación web para gestionar eventos de manera intuitiva. Los usuarios pueden registrarse y crear, editar o eliminar eventos en un calendario personal, con control de permisos que impide a otros usuarios modificar eventos ajenos. Desarrollada con React, Vite y desplegada en Vercel, es completamente responsiva y ofrece una experiencia fluida en dispositivos móviles y de escritorio. user: test@gmail.com, password: 123456',
    projectLink: 'https://calendar.retford.dev/',
    codeLink: 'https://github.com/Retford/calendar',
    icons: [
      {
        icon: <ViteIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <BootstrapIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Bootstrap',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-books-app.webp',
    title: 'Books App',
    description:
      'Es una aplicación web desarrollada con React que utiliza Context API para la gestión eficiente de estados globales. El sitio permite explorar una lista de libros, acceder a detalles individuales y realizar acciones como marcar favoritos. Este proyecto resalta el uso de tecnologías modernas para optimizar el flujo de datos entre componentes en una interfaz minimalista y responsiva.',
    projectLink: 'https://books-context.vercel.app/',
    codeLink: 'https://github.com/Retford/books-context',
    icons: [
      {
        icon: <ViteIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-journal-app.webp',
    title: 'Journal App',
    description:
      'Es una aplicación web para crear y gestionar entradas de diario con una interfaz simple y responsiva, desarrollada en React. Ideal para organizar pensamientos o tareas diarias.',
    projectLink: 'https://journal-app-navy-nine.vercel.app/',
    codeLink: 'https://github.com/Retford/journal-app',
    icons: [
      {
        icon: <ViteIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <FirebaseIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Firebase',
      },
      {
        icon: (
          <TestingLibraryIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Testing-Library',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-movie-app.webp',
    title: 'Movie App',
    description:
      'Es una aplicación web desarrollada con React que utiliza la API de TMDB para explorar películas y programas de televisión. Permite buscar títulos populares, ver detalles y descubrir tendencias en una interfaz moderna y responsiva.',
    projectLink: 'https://movie-app-mu-nine.vercel.app/',
    codeLink: 'https://github.com/Retford/movie-app',
    icons: [
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <NextJsIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'NextJS',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-heroes-app.webp',
    title: 'Heroes App',
    description:
      'Es una aplicación web creada con React que permite explorar personajes de Marvel mediante la API oficial. Incluye funcionalidades como búsqueda, detalles de héroes y una experiencia fluida en dispositivos móviles.',
    projectLink: 'https://heroes-five-blue.vercel.app/',
    codeLink: 'https://github.com/Retford/heroes-spa',
    icons: [
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: <ViteIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />,
        name: 'Vite',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
      {
        icon: (
          <TestingLibraryIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'Testing-Library',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-car-app.webp',
    title: 'Car App',
    description:
      'Un sitio web moderno de búsqueda y exploración de autos, diseñado como un showroom virtual. Permite a los usuarios filtrar, buscar y conocer detalles específicos sobre vehículos utilizando datos obtenidos de APIs externas.',
    projectLink: 'https://next-car-mu.vercel.app/',
    codeLink: 'https://github.com/Retford/next-project-car',
    icons: [
      {
        icon: (
          <ReactIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'React',
      },
      {
        icon: (
          <TypeScriptIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TypeScript',
      },
      {
        icon: (
          <NextJsIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'NextJS',
      },
      {
        icon: (
          <TailwindcssIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'TailwindCSS',
      },
    ],
  },
  {
    imageUrl: '/images/projects/home-pokemon-app.webp',
    title: 'Pokemon App',
    description:
      'Es una aplicación web interactiva desarrollada en HTML, CSS y JavaScript. Permite explorar una lista completa de Pokémon con sus detalles, estadísticas y habilidades. Los usuarios pueden buscar y filtrar Pokémon, lo que ofrece una experiencia dinámica para descubrir información sobre cada uno de ellos. Ideal para fanáticos de Pokémon y como ejemplo de un proyecto práctico que utiliza APIs para obtener datos en tiempo real.',
    projectLink: 'https://retford.github.io/Pokedex/',
    codeLink: 'https://github.com/Retford/Pokedex',
    icons: [
      {
        icon: (
          <Html5Icon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'HTML5',
      },
      {
        icon: <Css3Icon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />,
        name: 'CSS3',
      },
      {
        icon: (
          <JavaScriptIcon className='w-8 h-8 lg:w-9 lg:h-9 hover:rounded-full' />
        ),
        name: 'JavaScript',
      },
    ],
  },
];
