import { Tooltip } from '@nextui-org/tooltip';

import { BitBucketIcon } from '@/assets/icons/technologies/BitBucketIcon';
import { Css3Icon } from '@/assets/icons/technologies/Css3Icon';
import { GitIcon } from '@/assets/icons/technologies/GitIcon';
import { Html5Icon } from '@/assets/icons/technologies/Html5Icon';
import { JavaScriptIcon } from '@/assets/icons/technologies/JavaScriptIcon';
import { JiraIcon } from '@/assets/icons/technologies/JiraIcon';
import { MySQLIcon } from '@/assets/icons/technologies/MySQLIcon';
import { NextJsIcon } from '@/assets/icons/technologies/NextJsIcon';
import { PostmanIcon } from '@/assets/icons/technologies/PostmanIcon';
import { ReactIcon } from '@/assets/icons/technologies/ReactIcon';
import { StoryBookIcon } from '@/assets/icons/technologies/StoryBookIcon';
import { StyledComponentsIcon } from '@/assets/icons/technologies/StyledComponentsIcon';
import { TailwindcssIcon } from '@/assets/icons/technologies/TailwindcssIcon';
import { TestingLibraryIcon } from '@/assets/icons/technologies/TestingLibraryIcon';
import { TypeScriptIcon } from '@/assets/icons/technologies/TypeScriptIcon';
import { WordPressIcon } from '@/assets/icons/technologies/WordPressIcon';
import { useSyncExternalStore } from 'react';

interface Technology {
  icon: JSX.Element;
  name:
    | 'Postman'
    | 'React'
    | 'StoryBook'
    | 'Styled-Components'
    | 'TailwindCSS'
    | 'JavaScript'
    | 'Bitbucket'
    | 'CSS3'
    | 'Git'
    | 'HTML5'
    | 'Jira'
    | 'WordPress'
    | 'TypeScript'
    | 'Testing-Library'
    | 'MySQL'
    | 'NextJS';
}

const technologies: Technology[] = [
  {
    icon: <PostmanIcon className='w-14 h-14' />,
    name: 'Postman',
  },
  {
    icon: <ReactIcon className='w-14 h-14' />,
    name: 'React',
  },
  {
    icon: <StoryBookIcon className='w-14 h-14' />,
    name: 'StoryBook',
  },
  {
    icon: <StyledComponentsIcon className='w-14 h-14' />,
    name: 'Styled-Components',
  },
  {
    icon: <TailwindcssIcon className='w-14 h-14' />,
    name: 'TailwindCSS',
  },
  {
    icon: <JavaScriptIcon className='w-14 h-14' />,
    name: 'JavaScript',
  },
  {
    icon: <BitBucketIcon className='w-14 h-14' />,
    name: 'Bitbucket',
  },
  {
    icon: <Css3Icon className='w-14 h-14' />,
    name: 'CSS3',
  },
  {
    icon: <GitIcon className='w-14 h-14' />,
    name: 'Git',
  },
  {
    icon: <Html5Icon className='w-14 h-14' />,
    name: 'HTML5',
  },
  {
    icon: <JiraIcon className='w-14 h-14' />,
    name: 'Jira',
  },
  {
    icon: <WordPressIcon className='w-14 h-14' />,
    name: 'WordPress',
  },
  {
    icon: <TypeScriptIcon className='w-14 h-14' />,
    name: 'TypeScript',
  },
  {
    icon: <TestingLibraryIcon className='w-14 h-14' />,
    name: 'Testing-Library',
  },
  {
    icon: <MySQLIcon className='w-14 h-14' />,
    name: 'MySQL',
  },
  {
    icon: <NextJsIcon className='w-14 h-14' />,
    name: 'NextJS',
  },
];

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
        className='flex gap-5 overflow-x-scroll overflow-y-hidden whitespace-nowrap justify-start sm:justify-center sm:max-w-[600px] sm:flex-wrap pb-5 scroll__Styles'
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
