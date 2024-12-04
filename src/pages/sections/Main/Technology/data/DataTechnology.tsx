import { Technology } from '@/pages/interfaces/interfaces';

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

export const technologies: Technology[] = [
  {
    icon: <PostmanIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'Postman',
  },
  {
    icon: <ReactIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'React',
  },
  {
    icon: (
      <StoryBookIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'StoryBook',
  },
  {
    icon: (
      <StyledComponentsIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'Styled-Components',
  },
  {
    icon: (
      <TailwindcssIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'TailwindCSS',
  },
  {
    icon: (
      <JavaScriptIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'JavaScript',
  },
  {
    icon: (
      <BitBucketIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'Bitbucket',
  },
  {
    icon: <Css3Icon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'CSS3',
  },
  {
    icon: <GitIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'Git',
  },
  {
    icon: <Html5Icon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'HTML5',
  },
  {
    icon: <JiraIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'Jira',
  },
  {
    icon: (
      <WordPressIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'WordPress',
  },
  {
    icon: (
      <TypeScriptIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'TypeScript',
  },
  {
    icon: (
      <TestingLibraryIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
    ),
    name: 'Testing-Library',
  },
  {
    icon: <MySQLIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'MySQL',
  },
  {
    icon: <NextJsIcon className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />,
    name: 'NextJS',
  },
];
