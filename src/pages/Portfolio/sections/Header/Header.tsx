import { useWindowSize } from '@/hooks/useWindowSize';
import { useSyncExternalStore } from 'react';

const subscribe: (callback: () => void) => () => void = (callback) => {
  window.addEventListener('scroll', callback);
  return () => window.removeEventListener('scroll', callback);
};

const getSnapshot = () => window.scrollY;

export const Header = () => {
  const value = useSyncExternalStore(subscribe, getSnapshot);
  console.log(value);

  const windowSize = useWindowSize();
  console.log('xd', windowSize);

  const isExperienceActive =
    (windowSize <= 440 && value > 400 && value < 1865) ||
    (windowSize >= 441 && windowSize <= 1023 && value > 250 && value < 1000) ||
    (windowSize >= 1024 && windowSize <= 1280 && value > 500 && value < 1350) ||
    (windowSize >= 1281 && value > 550 && value < 1260);

  const isProjectActive =
    (windowSize <= 440 && value > 1865 && value < 4900) ||
    (windowSize >= 441 && windowSize <= 1023 && value > 1000 && value < 2700) ||
    (windowSize >= 1024 &&
      windowSize <= 1280 &&
      value > 1350 &&
      value < 2650) ||
    (windowSize >= 1281 && value > 1260 && value < 2650);

  const isTechnologyActive =
    (windowSize <= 440 && value > 4900 && value < 5750) ||
    (windowSize >= 441 && windowSize <= 1023 && value > 2700 && value < 3330) ||
    (windowSize >= 1024 &&
      windowSize <= 1280 &&
      value > 2650 &&
      value < 2900) ||
    (windowSize >= 1281 && value > 2650 && value < 3050);

  const isAboutActive =
    (windowSize <= 440 && value > 5750 && value < 6000) ||
    (windowSize >= 441 && windowSize <= 1023 && value > 3330 && value < 6000) ||
    (windowSize >= 1024 &&
      windowSize <= 1280 &&
      value > 2900 &&
      value < 6000) ||
    (windowSize >= 1281 && value > 3050 && value < 6000);

  return (
    <header
      className={`flex items-center justify-center sm:justify-around sticky top-0 backdrop-blur-lg z-10 sm:container`}
    >
      <a href='/' className='bg-custom-color-950 rounded-xl'>
        <img
          src='/images/logo-dark-mode.png'
          alt='logo'
          className='h-10 hidden sm:block'
        />
      </a>
      <nav
        className={`my-6 rounded-xl border-custom-color-600 py-4 sm:py-2 px-6  max-[400px]:px-2 ${
          value > 0
            ? 'border-none bg-custom-color-950 text-white'
            : 'border dark:border-custom-color-50 dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow'
        }`}
      >
        <ul className='flex gap-4 dark:text-[#C1C2D3] font-medium text-sm max-[400px]:gap-2'>
          <li
            className={`${
              isExperienceActive
                ? 'relative before:animate-growLeftToRight before:content-[""] before:left-0 before:-bottom-1 before:origin-left before:w-[78px] before:h-[1px] before:bg-white before:absolute after:animate-growRightToLeft after:content-[""] after:right-0 after:-top-1 after:origin-right after:w-[78px] after:h-[1px] after:bg-white after:absolute'
                : ''
            }`}
          >
            <a href='#experience'>Experiencia</a>
          </li>

          <li
            className={`${
              isProjectActive
                ? 'relative before:animate-growLeftToRight before:content-[""] before:left-0 before:-bottom-1 before:origin-left before:w-[67px] before:h-[1px] before:bg-white before:absolute after:animate-growRightToLeft after:content-[""] after:right-0 after:-top-1 after:origin-right after:w-[67px] after:h-[1px] after:bg-white after:absolute'
                : ''
            }`}
          >
            <a href='#projects'>Proyectos</a>
          </li>
          <li
            className={`${
              isTechnologyActive
                ? 'relative before:animate-growLeftToRight before:content-[""] before:left-0 before:-bottom-1 before:origin-left before:w-[80.5px] before:h-[1px] before:bg-white before:absolute after:animate-growRightToLeft after:content-[""] after:right-0 after:-top-1 after:origin-right after:w-[80.5px] after:h-[1px] after:bg-white after:absolute'
                : ''
            }`}
          >
            <a href='#technology'>Tecnologías</a>
          </li>
          <li
            className={`${
              isAboutActive
                ? 'relative before:animate-growLeftToRight before:content-[""] before:left-0 before:-bottom-1 before:origin-left before:w-[59.2px] before:h-[1px] before:bg-white before:absolute after:animate-growRightToLeft after:content-[""] after:right-0 after:-top-1 after:origin-right after:w-[59.2px] after:h-[1px] after:bg-white after:absolute'
                : ''
            }`}
          >
            <a href='#about'>Sobre mí</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
