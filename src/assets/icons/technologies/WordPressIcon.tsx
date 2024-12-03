import { SVGProps, forwardRef } from 'react';

export const WordPressIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      ref={ref}
      {...props}
    >
      <g fill='none'>
        <rect width='256' height='256' fill='#0073AA' rx='60'></rect>
        <path
          fill='#fff'
          d='M42.214 127.994c0 33.955 19.733 63.299 48.347 77.205L49.641 93.083a85.5 85.5 0 0 0-7.427 34.911m143.694-4.329c0-10.601-3.808-17.943-7.074-23.658c-4.349-7.066-8.425-13.05-8.425-20.116c0-7.886 5.981-15.226 14.405-15.226c.381 0 .741.047 1.112.068c-15.262-13.982-35.595-22.519-57.929-22.519c-29.968 0-56.335 15.376-71.673 38.666c2.012.06 3.909.103 5.52.103c8.973 0 22.862-1.09 22.862-1.09c4.624-.272 5.17 6.52.55 7.067c0 0-4.647.547-9.818.818l31.238 92.918l18.773-56.303l-13.365-36.618c-4.619-.271-8.995-.818-8.995-.818c-4.623-.271-4.081-7.339.542-7.066c0 0 14.166 1.088 22.595 1.088c8.972 0 22.862-1.088 22.862-1.088c4.628-.273 5.171 6.519.55 7.066c0 0-4.657.547-9.818.818l31.001 92.214l8.556-28.592c3.709-11.866 6.531-20.388 6.531-27.732'
        ></path>
        <path
          fill='#fff'
          d='m129.503 135.498l-25.738 74.79a85.8 85.8 0 0 0 24.233 3.495a85.7 85.7 0 0 0 28.486-4.863a7.5 7.5 0 0 1-.61-1.182zm73.766-48.66a66 66 0 0 1 .578 8.82c0 8.705-1.626 18.491-6.523 30.727l-26.203 75.759c25.503-14.872 42.657-42.501 42.657-74.148c.001-14.915-3.808-28.94-10.509-41.158'
        ></path>
        <path
          fill='#fff'
          d='M127.998 28C72.86 28 28 72.857 28 127.994c0 55.144 44.86 99.999 99.998 99.999c55.135 0 100.002-44.855 100.002-99.999C227.998 72.857 183.133 28 127.998 28m0 195.41c-52.61 0-95.413-42.804-95.413-95.416c0-52.609 42.802-95.409 95.413-95.409c52.607 0 95.407 42.8 95.407 95.409c0 52.612-42.8 95.416-95.407 95.416'
        ></path>
      </g>
    </svg>
  )
);