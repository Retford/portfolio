import { SVGProps } from 'react';

export function AboutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 14 14'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2'></path>
        <circle cx='7' cy='4.5' r='2'></circle>
        <path d='M10.16 10.5a3.5 3.5 0 0 0-6.32 0'></path>
      </g>
    </svg>
  );
}
