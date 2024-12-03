import { Tooltip } from '@nextui-org/tooltip';

import { BitBucketIcon } from '../../../assets/icons/technologies/BitBucketIcon';
import { Css3Icon } from '../../../assets/icons/technologies/Css3Icon';
import { GitIcon } from '../../../assets/icons/technologies/GitIcon';
import { Html5Icon } from '../../../assets/icons/technologies/Html5Icon';
import { JavaScriptIcon } from '../../../assets/icons/technologies/JavaScriptIcon';
import { JiraIcon } from '../../../assets/icons/technologies/JiraIcon';
import { MySQLIcon } from '../../../assets/icons/technologies/MySQLIcon';
import { NextJsIcon } from '../../../assets/icons/technologies/NextJsIcon';
import { PostmanIcon } from '../../../assets/icons/technologies/PostmanIcon';
import { ReactIcon } from '../../../assets/icons/technologies/ReactIcon';
import { StoryBookIcon } from '../../../assets/icons/technologies/StoryBookIcon';
import { StyledComponentsIcon } from '../../../assets/icons/technologies/StyledComponentsIcon';
import { TailwindcssIcon } from '../../../assets/icons/technologies/TailwindcssIcon';
import { TestingLibraryIcon } from '../../../assets/icons/technologies/TestingLibraryIcon';
import { TypeScriptIcon } from '../../../assets/icons/technologies/TypeScriptIcon';
import { WordPressIcon } from '../../../assets/icons/technologies/WordPressIcon';

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
    icon: <PostmanIcon className='w-6 h-6' />,
    name: 'Postman',
  },
  {
    icon: <ReactIcon className='w-6 h-6' />,
    name: 'React',
  },
  {
    icon: <StoryBookIcon className='w-6 h-6' />,
    name: 'StoryBook',
  },
  {
    icon: <StyledComponentsIcon className='w-6 h-6' />,
    name: 'Styled-Components',
  },
  {
    icon: <TailwindcssIcon className='w-6 h-6' />,
    name: 'TailwindCSS',
  },
  {
    icon: <JavaScriptIcon className='w-6 h-6' />,
    name: 'JavaScript',
  },
  {
    icon: <BitBucketIcon className='w-6 h-6' />,
    name: 'Bitbucket',
  },
  {
    icon: <Css3Icon className='w-6 h-6' />,
    name: 'CSS3',
  },
  {
    icon: <GitIcon className='w-6 h-6' />,
    name: 'Git',
  },
  {
    icon: <Html5Icon className='w-6 h-6' />,
    name: 'HTML5',
  },
  {
    icon: <JiraIcon className='w-6 h-6' />,
    name: 'Jira',
  },
  {
    icon: <WordPressIcon className='w-6 h-6' />,
    name: 'WordPress',
  },
  {
    icon: <TypeScriptIcon className='w-6 h-6' />,
    name: 'TypeScript',
  },
  {
    icon: <TestingLibraryIcon className='w-6 h-6' />,
    name: 'Testing-Library',
  },
  {
    icon: <MySQLIcon className='w-6 h-6' />,
    name: 'MySQL',
  },
  {
    icon: <NextJsIcon className='w-6 h-6' />,
    name: 'NextJS',
  },
];

export const Technology = () => {
  return (
    <section className='flex gap-6 flex-col'>
      <h4 className='text-4xl font-bold'>Tecnologías</h4>
      {technologies.map((technology, index) => (
        <Tooltip
          key={index}
          showArrow
          placement='right'
          content={technology.name}
          classNames={{
            base: ['before:bg-custom-color-700 dark:before:bg-white'],
            content: ['py-2 px-4 shadow-xl', 'text-black'],
          }}
        >
          {technology.icon}
        </Tooltip>
      ))}
    </section>
  );
};
