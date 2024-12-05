import { Tooltip } from '@nextui-org/tooltip';

import { SocialNetwork } from '@/types/socialNetwork';

export const SocialNetworks = ({ name, url, icon }: SocialNetwork) => {
  return (
    <Tooltip
      showArrow
      placement='bottom'
      content={name}
      classNames={{
        base: ['before:bg-custom-color-700 dark:before:bg-white'],
        content: ['py-2 px-4 shadow-xl', 'text-black'],
      }}
    >
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='p-2 border border-solid border-white rounded-lg style__border'
      >
        {icon}
      </a>
    </Tooltip>
  );
};
