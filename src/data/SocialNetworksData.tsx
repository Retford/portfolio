import { SocialNetwork } from '@/types/socialNetwork';

import { FacebookIcon } from '@/assets/icons/socialNetworks/FacebookIcon';
import { GithubIcon } from '@/assets/icons/socialNetworks/GithubIcon';
import { InstagramIcon } from '@/assets/icons/socialNetworks/InstagramIcon';
import { LinkedinIcon } from '@/assets/icons/socialNetworks/LinkedinIcon';
import { TwitterIcon } from '@/assets/icons/socialNetworks/TwitterIcon';

export const socialNetworks: SocialNetwork[] = [
  {
    icon: <LinkedinIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.linkedin.com/in/retford',
    name: 'LinkedIn',
  },
  {
    icon: <GithubIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://github.com/Retford',
    name: 'Github',
  },
  {
    icon: <TwitterIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://twitter.com/retfordjb',
    name: 'Twitter',
  },
  {
    icon: <InstagramIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.instagram.com/retford_obriamjb/',
    name: 'Instagram',
  },
  {
    icon: <FacebookIcon className='w-6 h-6 sm:w-8 sm:h-8' />,
    url: 'https://www.facebook.com/retfordjb/',
    name: 'Facebook',
  },
];
