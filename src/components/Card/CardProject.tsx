import { useSyncExternalStore } from 'react';

import { Project } from '@/interfaces/interfaces';

const subscribe: (callback: () => void) => () => void = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => window.innerWidth - 32;

export const CardProject = ({ title, icons }: Project) => {
  const sizeCardMobile = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <section
      className='lg:max-w-96 lg:max-h-96 bg-white rounded-xl text-black'
      style={{ width: `${sizeCardMobile}px`, height: `${sizeCardMobile}px` }}
    >
      <p>{title}</p>
      {icons.map((icon, index) => (
        <article key={index}>{icon.icon}</article>
      ))}
    </section>
  );
};
