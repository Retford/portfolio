import { Banner } from './Banner';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Technology } from './Technology';
import { About } from './About';

export const Main = () => {
  return (
    <main className='px-4 py-4 flex flex-col justify-center items-start md:items-center gap-16 sm:container'>
      <Banner />
      <Experience />
      <Projects />
      <Technology />
      <About />
    </main>
  );
};
