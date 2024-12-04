import { Tooltip } from '@nextui-org/tooltip';

import { useSyncExternalStore } from 'react';
import { technologies } from './data/DataTechnology';

const subscribe: (callback: () => void) => () => void = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => window.innerWidth - 70;

export const Technology = () => {
  const widthSectionTechnologies = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <section className='flex gap-16 flex-col items-center' id='technology'>
      <h4 className='text-4xl font-bold'>Tecnologías</h4>
      <section
        className='flex gap-5 overflow-x-scroll overflow-y-hidden whitespace-nowrap justify-start sm:justify-center sm:max-w-[600px] lg:max-w-[900px] sm:flex-wrap pb-5 scroll__Styles'
        style={{ width: `${widthSectionTechnologies}px` }}
      >
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
