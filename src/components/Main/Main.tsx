import { ArrowCoolDown } from '../../assets/icons/ArrowDownIcon';
import { CurriculumIcon } from '../../assets/icons/CurriculumIcon';
import { SocialNetworks } from '../SocialNetworks';
import { About } from './About';
import { Experience } from './Experience';
import { Technology } from './Technology';

export const Main = () => {
  return (
    <main className='p-4 flex flex-col justify-center items-center gap-16'>
      <section className='justify-center items-center text-center flex gap-12 flex-col h-96'>
        <div className='gap-5 flex flex-col'>
          <h4 className='dark:text-[#E4ECFF] text-xs'>
            Hola 👋, soy Retford O&#39;briam
          </h4>
          <h2 className='text-5xl font-bold'>React Frontend Developer</h2>
        </div>
        <SocialNetworks />
        <div className='flex gap-4 text-sm font-medium'>
          <button
            className='border-[1px] border-custom-color-600 dark:border-custom-color-50 p-4 rounded-md flex items-center justify-center gap-4'
            style={{
              boxShadow: 'inset 0 0 8px 0.82px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.25))',
              backgroundImage: 'radial-gradient(#000, #00000000)',
            }}
          >
            Ver mi CV
            <CurriculumIcon className='animate-bounce w-5 h-5' />
          </button>
          <button
            className='border-[1px] border-custom-color-600 dark:border-custom-color-50 p-4 rounded-md flex items-center justify-center gap-4'
            style={{
              boxShadow: 'inset 0 0 8px 0.82px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.25))',
              backgroundImage: 'radial-gradient(#000, #00000000)',
            }}
          >
            Ver mis proyectos
            <ArrowCoolDown className='animate-bounce w-5 h-5' />
          </button>
        </div>
      </section>
      <About />
      <Experience />
      <Technology />
    </main>
  );
};
