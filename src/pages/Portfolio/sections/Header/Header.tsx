import { useWindow } from '@/hooks/useWindow';

export const Header = () => {
  const { windowWidth, windowScroll } = useWindow();

  const isExperienceActive =
    (windowWidth <= 440 && windowScroll > 400 && windowScroll < 1600) ||
    (windowWidth >= 441 &&
      windowWidth <= 1023 &&
      windowScroll > 250 &&
      windowScroll < 1000) ||
    (windowWidth >= 1024 &&
      windowWidth <= 1280 &&
      windowScroll > 500 &&
      windowScroll < 1350) ||
    (windowWidth >= 1281 && windowScroll > 550 && windowScroll < 1260);

  const isProjectActive =
    (windowWidth <= 440 && windowScroll > 1600 && windowScroll < 4900) ||
    (windowWidth >= 441 &&
      windowWidth <= 1023 &&
      windowScroll > 1000 &&
      windowScroll < 2700) ||
    (windowWidth >= 1024 &&
      windowWidth <= 1280 &&
      windowScroll > 1350 &&
      windowScroll < 2650) ||
    (windowWidth >= 1281 && windowScroll > 1260 && windowScroll < 2650);

  const isTechnologyActive =
    (windowWidth <= 440 && windowScroll > 4900 && windowScroll < 5750) ||
    (windowWidth >= 441 &&
      windowWidth <= 1023 &&
      windowScroll > 2700 &&
      windowScroll < 3330) ||
    (windowWidth >= 1024 &&
      windowWidth <= 1280 &&
      windowScroll > 2650 &&
      windowScroll < 2900) ||
    (windowWidth >= 1281 && windowScroll > 2650 && windowScroll < 3050);

  const isAboutActive =
    (windowWidth <= 440 && windowScroll > 5750 && windowScroll < 6500) ||
    (windowWidth >= 441 &&
      windowWidth <= 1023 &&
      windowScroll > 3330 &&
      windowScroll < 6500) ||
    (windowWidth >= 1024 &&
      windowWidth <= 1280 &&
      windowScroll > 2900 &&
      windowScroll < 6500) ||
    (windowWidth >= 1281 && windowScroll > 3050 && windowScroll < 6500);

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
          windowScroll > 0
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
