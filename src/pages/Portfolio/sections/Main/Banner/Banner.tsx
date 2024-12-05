import { CurriculumIcon } from '@/assets/icons/CurriculumIcon';
import { ArrowCoolDown } from '@/assets/icons/ArrowDownIcon';

import { socialNetworks } from '@/data/SocialNetworksData';

import { SocialNetworks } from '@/components/SocialNetworks';

export const Banner = () => {
  return (
    <section
      className='justify-between items-center text-center flex gap-12 flex-col'
      style={{ height: 'calc(100vh - 166px)' }}
    >
      <div className='flex flex-col gap-16 pt-56'>
        <div className='gap-5 flex flex-col'>
          <h4 className='dark:text-[#E4ECFF] text-xs'>
            Hola 👋, soy Retford O&#39;briam
          </h4>
          <h2 className='text-5xl font-bold'>React Frontend Developer</h2>
        </div>
        <div className='flex justify-center items-center gap-8'>
          {socialNetworks.map((socialNetwork, index) => (
            <SocialNetworks key={index} {...socialNetwork} />
          ))}
        </div>
      </div>

      <div className='flex gap-4 text-sm font-medium'>
        <a
          href='/src/assets/CV/CVRetford-ES.pdf'
          target='_blank'
          className='border border-custom-color-600 dark:border-custom-color-50 p-4 rounded-xl flex items-center justify-center gap-4 style-border'
        >
          Ver CV
          <CurriculumIcon className='animate-bounce w-5 h-5' />
        </a>
        <a
          href='#projects'
          className='border border-custom-color-600 dark:border-custom-color-50 p-4 rounded-xl flex items-center justify-center gap-4 style-border'
        >
          Ver mis proyectos
          <ArrowCoolDown className='animate-bounce w-5 h-5' />
        </a>
      </div>
    </section>
  );
};
