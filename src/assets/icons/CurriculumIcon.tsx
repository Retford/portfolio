import { SVGProps } from 'react';

export function CurriculumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M18 20.289L21.288 17l-.688-.688l-2.1 2.1v-4.887h-1v4.887l-2.1-2.1l-.688.688zM14.5 23.5v-1h7v1zm-10-4v-17H13L18.5 8v3.14h-1V8.5h-5v-5h-7v15h6.616v1zm1-1v-15z'
      ></path>
    </svg>
  );
}
