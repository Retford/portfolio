export const Header = () => {
  return (
    <header className='flex items-center justify-around sticky top-0 backdrop-blur-lg'>
      <img
        src='/src/assets/images/logo-dark-mode.png'
        alt='logo'
        className='h-10 hidden sm:block'
      />
      <nav className='my-6 border-[1px] rounded-xl border-custom-color-600 dark:border-custom-color-50 py-4 sm:py-2 px-6'>
        <ul className='flex gap-4 dark:text-[#C1C2D3] font-medium text-sm'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Experiencia</a>
          </li>
          <li>
            <a href='#'>Tecnologías</a>
          </li>
          <li>
            <a href='#'>Proyectos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
