import { projects } from '@/data/Projects';

import { Card } from '@/components/Card';

export const Projects = () => {
  return (
    <section className='flex gap-6 flex-col scroll-m-24' id='projects'>
      <h4 className='text-4xl font-bold'>Proyectos</h4>
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </section>
  );
};
