import { Tooltip } from '@nextui-org/tooltip';

import { technologies } from '@/data/TechnologiesData';
import { GithubIcon } from '@/assets/icons/socialNetworks/GithubIcon';
import { TechnologiesIcon } from '@/assets/icons/main/TechnologiesIcon';

export const Technology = () => {
  return (
    <section
      className='flex gap-14 flex-col items-start scroll-m-24 w-full'
      id='technology'
    >
      <h4 className='text-4xl font-bold flex gap-4 items-center'>
        <TechnologiesIcon /> Tecnologías
      </h4>
      <section className='flex flex-col gap-6 w-full lg:w-1/2 text-sm'>
        <h6 className='flex items-center lg:text-lg'>
          Información de <span className='font-bold pl-1'>Github</span>
          <GithubIcon className='w-8 h-8 ml-4' />
        </h6>
        <img
          src='https://github-readme-stats.vercel.app/api/top-langs/?username=Retford&layout=donut&theme=dark&hide_title=true'
          alt='tecnologías más usadas'
        />
      </section>

      <section className='flex gap-5 justify-center lg:max-w-full flex-wrap pb-5 style-scroll'>
        {technologies.map((technology, index) => (
          <Tooltip
            key={index}
            showArrow
            placement='bottom'
            content={technology.name}
            classNames={{
              base: ['before:bg-custom-color-700 dark:before:bg-white'],
              content: ['py-2 px-4 shadow-xl', 'text-black'],
            }}
          >
            <article>{technology.icon}</article>
          </Tooltip>
        ))}
      </section>
    </section>
  );
};
