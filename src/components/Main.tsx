import { ArrowCoolDown } from '../assets/icons/ArrowCoolDown';

export const Main = () => {
  return (
    <main className='p-4'>
      <section className='justify-center items-center text-center flex gap-16 flex-col h-96'>
        <div className='gap-5 flex flex-col'>
          <h4 className='dark:text-[#E4ECFF] text-xs'>
            Hola 👋, soy Retford O&#39;briam
          </h4>
          <h2 className='text-5xl font-bold'>React Frontend Developer</h2>
        </div>
        <button className='border-[1px] border-custom-color-600 dark:border-custom-color-50 p-5 rounded-md font-medium text-base flex items-center justify-center gap-4 w-4/5 sm:w-auto'>
          Ver mis proyectos
          <ArrowCoolDown className='animate-bounce' />
        </button>
      </section>
    </main>
  );
};
