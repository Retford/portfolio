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

export const Technology = () => {
  return (
    <section className='flex gap-6 flex-col'>
      <h4 className='text-4xl font-bold'>Tecnologías</h4>
      <JavaScriptIcon className='w-6 h-6' />
      <ReactIcon className='w-6 h-6' />
      <TailwindcssIcon className='w-6 h-6' />
      <NextJsIcon className='w-6 h-6' />
      <Html5Icon className='w-6 h-6' />
      <Css3Icon className='w-6 h-6' />
      <WordPressIcon className='w-6 h-6' />
      <MySQLIcon className='w-6 h-6' />
      <StoryBookIcon className='w-6 h-6' />
      <TypeScriptIcon className='w-6 h-6' />
      <GitIcon className='w-6 h-6' />
      <StyledComponentsIcon className='w-6 h-6' />
      <TestingLibraryIcon className='w-6 h-6' />
      <BitBucketIcon className='w-6 h-6' />
      <JiraIcon className='w-6 h-6' />
      <PostmanIcon className='w-6 h-6' />
    </section>
  );
};
