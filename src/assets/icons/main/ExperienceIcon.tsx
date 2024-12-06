import { SVGProps } from 'react';

export function ExperienceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M12 19a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M4 5h16v11H4m16 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2H0a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2h-4z'
        fill='currentColor'
      ></path>
    </svg>
  );
}