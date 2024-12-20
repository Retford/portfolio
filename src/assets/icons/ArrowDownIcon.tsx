import { SVGProps } from 'react';

export function ArrowCoolDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1rem'
      height='1rem'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15zM11 9V6h2v3zm0-5V2h2v2z'
      ></path>
    </svg>
  );
}
