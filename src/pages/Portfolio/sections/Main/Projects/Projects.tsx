import { projects } from '@/data/ProjectsData';

import { Cards } from '@/components/Cards';
import { ProjectsIcon } from '@/assets/icons/main/ProjectsIcon';

export const Projects = () => {
  return (
    <section className='flex gap-14 flex-col scroll-m-24 w-full' id='projects'>
      <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-4 items-center'>
        <ProjectsIcon /> Proyectos
      </h4>
      <section className='flex gap-4 flex-wrap justify-center items-center'>
        {projects.map((project, index) => (
          <Cards key={index} {...project} />
        ))}
      </section>
    </section>
  );
};
