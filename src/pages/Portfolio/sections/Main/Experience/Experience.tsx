import { experiences } from '@/data/ExperienceData';

import { ExperienceIcon } from '@/assets/icons/main/ExperienceIcon';

import { TimeLine } from '@/components/TimeLine';

export const Experience = () => {
  return (
    <section className='flex flex-col scroll-m-24' id='experience'>
      <h4 className='text-4xl font-bold flex gap-4 items-center pb-14'>
        <ExperienceIcon /> Experiencia Laboral
      </h4>
      {experiences.map((experience, index) => (
        <TimeLine key={index} {...experience} />
      ))}
    </section>
  );
};
