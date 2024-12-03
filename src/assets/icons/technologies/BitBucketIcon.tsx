import { forwardRef, SVGProps } from 'react';

export const BitBucketIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 256 256'
        ref={ref}
        {...props}
      >
        <g fill='none'>
          <g clipPath='url(#skillIconsBitbucketDark1)'>
            <path
              fill='#242938'
              d='M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60'
            ></path>
            <path
              fill='#2684FF'
              d='M46.292 52.03a5.7 5.7 0 0 0-2.357.48c-.74.328-1.4.81-1.93 1.415a5.4 5.4 0 0 0-1.14 2.082a5.4 5.4 0 0 0-.138 2.36l23.624 140.758a7.4 7.4 0 0 0 2.551 4.422a7.66 7.66 0 0 0 4.85 1.778h113.332a5.64 5.64 0 0 0 3.651-1.28a5.44 5.44 0 0 0 1.914-3.309l23.624-142.342a5.4 5.4 0 0 0-.138-2.36a5.4 5.4 0 0 0-1.141-2.081a5.6 5.6 0 0 0-1.929-1.414a5.7 5.7 0 0 0-2.358-.481zm99.475 101.731h-36.173L99.8 103.537h54.732z'
            ></path>
            <path
              fill='url(#skillIconsBitbucketDark0)'
              d='M206.616 103.467h-52.185l-8.758 50.184h-36.144l-42.677 49.72a7.62 7.62 0 0 0 4.865 1.801h113.27a5.63 5.63 0 0 0 3.648-1.279a5.43 5.43 0 0 0 1.912-3.306z'
            ></path>
          </g>
          <defs>
            <linearGradient
              id='skillIconsBitbucketDark0'
              x1='39228.9'
              x2='23538.7'
              y1='3347.5'
              y2='23660.6'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='.18' stopColor='#0052CC'></stop>
              <stop offset='1' stopColor='#2684FF'></stop>
            </linearGradient>
            <clipPath id='skillIconsBitbucketDark1'>
              <path fill='#fff' d='M0 0h256v256H0z'></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    );
  }
);
