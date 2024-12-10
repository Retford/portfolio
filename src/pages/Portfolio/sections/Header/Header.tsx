export const Header = () => {
  return (
    <header className='flex items-center justify-center sm:justify-around sticky top-0 backdrop-blur-lg z-10 sm:container'>
      <a href='/'>
        <img
          src='/images/logo-dark-mode.png'
          alt='logo'
          className='h-10 hidden sm:block'
        />
      </a>
      <nav className='my-6 border rounded-xl border-custom-color-600 dark:border-custom-color-50 py-4 sm:py-2 px-6 style-border max-[400px]:px-2'>
        <ul className='flex gap-4 dark:text-[#C1C2D3] font-medium text-sm max-[400px]:gap-2'>
          <li>
            <a href='#experience'>Experiencia</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#technology'>Tecnologías</a>
          </li>
          <li>
            <a href='#about'>Sobre mí</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
