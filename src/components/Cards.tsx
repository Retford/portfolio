import { useWindowSize } from '@/hooks/useWindowSize';
import { Project } from '@/types/project';

export const Cards = ({ title, icons }: Project) => {
  const windowSize = useWindowSize();
  const sizeCardMobile = windowSize - 32;

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
