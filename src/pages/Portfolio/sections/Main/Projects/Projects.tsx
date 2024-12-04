import { projects } from '@/data/ProjectsData';

import { Cards } from '@/components/Cards';

export const Projects = () => {
  return (
    <section className='flex gap-6 flex-col scroll-m-24' id='projects'>
      <h4 className='text-4xl font-bold'>Proyectos</h4>
      {projects.map((project, index) => (
        <Cards key={index} {...project} />
      ))}
    </section>
  );
};
