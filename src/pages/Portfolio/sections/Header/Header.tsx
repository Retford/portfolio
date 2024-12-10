export const Header = () => {
  return (
    <header className='flex items-center justify-around sticky top-0 backdrop-blur-lg z-10 sm:container'>
      <img
        src='/images/logo-dark-mode.png'
        alt='logo'
        className='h-10 hidden sm:block'
      />
      <nav className='my-6 border rounded-xl border-custom-color-600 dark:border-custom-color-50 py-4 sm:py-2 px-6 style-border'>
        <ul className='flex gap-4 dark:text-[#C1C2D3] font-medium text-sm'>
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
