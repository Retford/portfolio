import { FacebookIcon } from '../assets/icons/socialNetworks/FacebookIcon';
import { GithubIcon } from '../assets/icons/socialNetworks/GithubIcon';
import { InstagramIcon } from '../assets/icons/socialNetworks/InstagramIcon';
import { LinkedinIcon } from '../assets/icons/socialNetworks/LinkedinIcon';
import { TwitterIcon } from '../assets/icons/socialNetworks/TwitterIcon';

const socialNetworks = [
  {
    icon: <LinkedinIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.linkedin.com/in/retford',
  },
  {
    icon: <GithubIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://github.com/Retford',
  },
  {
    icon: <TwitterIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://twitter.com/',
  },
  {
    icon: <InstagramIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.instagram.com/',
  },
  {
    icon: <FacebookIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.facebook.com/',
  },
];

export const SocialNetworks = () => {
  return (
    <div className='flex justify-center items-center gap-8'>
      {socialNetworks.map((socialNetwork, index) => (
        <a
          key={index}
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
      ))}
    </div>
  );
};
