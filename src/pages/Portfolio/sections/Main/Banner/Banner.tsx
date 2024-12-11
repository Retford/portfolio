import { CurriculumIcon } from '@/assets/icons/CurriculumIcon';
import { ArrowCoolDown } from '@/assets/icons/ArrowDownIcon';

import { socialNetworks } from '@/data/SocialNetworksData';

import { SocialNetworks } from '@/components/SocialNetworks';

export const Banner = () => {
  return (
    <section className='justify-between items-center text-center flex gap-8 max-sm:gap-24 flex-col max-[400px]:gap-32 lg:gap-12 custom-height'>
      <div className='flex flex-col gap-4 max-[400px]:pt-24 max-[400px]:gap-8 max-sm:pt-20 lg:gap-16 lg:pt-56'>
        <div className='gap-8 flex flex-col'>
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
          href='/CV/CVRetford-ES.pdf'
          target='_blank'
          className='border border-custom-color-600 dark:border-custom-color-50 p-4 rounded-xl flex items-center justify-center gap-4 dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow'
        >
          Ver CV
          <CurriculumIcon className='animate-bounce w-5 h-5' />
        </a>
        <a
          href='#projects'
          className='border border-custom-color-600 dark:border-custom-color-50 p-4 rounded-xl flex items-center justify-center gap-4 dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow'
        >
          Ver mis proyectos
          <ArrowCoolDown className='animate-bounce w-5 h-5' />
        </a>
      </div>
    </section>
  );
};
