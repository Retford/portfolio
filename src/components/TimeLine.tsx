import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Experience } from '@/types/experience';

export const TimeLine = ({
  role,
  company,
  modality,
  duration,
  activities,
}: Experience) => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <li className='mb-10 ms-4'>
        <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
          {role}
        </h3>
        <h3 className='text-base font-medium text-gray-900 dark:text-custom-color-400'>
          {company} · {modality}
        </h3>
        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {duration}
        </time>
        <article className='mb-4 text-sm mt-2 font-normal text-gray-500 dark:text-gray-400'>
          {activities.map((act, index) => (
            <article key={index} className='flex gap-2 md:items-center'>
              <article>
                <ArrowRightIcon className='w-6 h-6' />
              </article>
              {act.activity}
            </article>
          ))}
        </article>
      </li>
    </ol>
  );
};
