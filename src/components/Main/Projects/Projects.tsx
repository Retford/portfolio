import { CardProject } from '@/components/Card/CardProject';
import { projects } from '@/components/Card/data/DataCardProject';

export const Projects = () => {
  return (
    <section className='flex gap-6 flex-col'>
      <h4 className='text-4xl font-bold' id='projects'>
        Proyectos
      </h4>
      {projects.map((project, index) => (
        <CardProject key={index} {...project} />
      ))}
    </section>
  );
};
