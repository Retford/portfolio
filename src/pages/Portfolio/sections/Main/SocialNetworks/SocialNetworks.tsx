import { Tooltip } from '@nextui-org/tooltip';

import { socialNetworks } from '@/data/SocialNetworks';

export const SocialNetworks = () => {
  return (
    <div className='flex justify-center items-center gap-8'>
      {socialNetworks.map((socialNetwork, index) => (
        <Tooltip
          key={index}
          showArrow
          placement='bottom'
          content={socialNetwork.name}
          classNames={{
            base: ['before:bg-custom-color-700 dark:before:bg-white'],
            content: ['py-2 px-4 shadow-xl', 'text-black'],
          }}
        >
          <a
            href={socialNetwork.url}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 border-[1px] border-solid border-white rounded-lg'
            style={{
              boxShadow: 'inset 0 0 8px 0.82px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.25))',
              backgroundImage: 'radial-gradient(#000, #00000000)',
            }}
          >
            {socialNetwork.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
};
