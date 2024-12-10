// import { FacebookIcon } from '@/assets/icons/socialNetworks/FacebookIcon';
import { Project } from '@/types/project';

import { Link } from '@nextui-org/link';
import { Tooltip } from '@nextui-org/tooltip';

export const Cards = ({
  imageUrl,
  title,
  description,
  linkProject,
  icons,
}: Project) => {
  return (
    <section className='lg:max-w-96 lg:max-h-96 bg-transparent rounded-xl text-black py-[15px] px-[14px] style-border sm:max-w-96 sm:max-h-96 md:max-h-[23rem] md:max-w-[22rem]'>
      <article className='flex flex-col gap-5'>
        <figure className='rounded-xl max-h-[200px] overflow-hidden aspect-[35/20]'>
          <img src={imageUrl} alt={title} className='object-cover' />
        </figure>

        <div className='flex flex-col gap-[14px]'>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold text-white text-xl line-clamp-1'>
              {title}
            </h4>
            <p className='text-sm text-[#BEC1DD] line-clamp-2'>{description}</p>
          </div>
          <div className='flex justify-between'>
            <article className='flex gap-1 sm:gap-2'>
              {icons.map((icon, index) => (
                <Tooltip
                  key={index}
                  showArrow
                  placement='bottom'
                  content={icon.name}
                  classNames={{
                    base: ['before:bg-custom-color-700 dark:before:bg-white'],
                    content: ['py-2 px-4 shadow-xl', 'text-black'],
                  }}
                >
                  {icon.icon}
                </Tooltip>
              ))}
            </article>
            <Link
              isExternal
              href={linkProject}
              showAnchorIcon
              // anchorIcon={<FacebookIcon />}
              className='text-sm text-white style-border px-4 rounded-xl'
            >
              Ver en directo
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
