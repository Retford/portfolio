// import { FacebookIcon } from '@/assets/icons/socialNetworks/FacebookIcon';
import { Project } from '@/types/project';

import { Link } from '@nextui-org/link';
import { Tooltip } from '@nextui-org/tooltip';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from '@nextui-org/react';
import { GithubIcon } from '@/assets/icons/socialNetworks/GithubIcon';

export const Cards = ({
  imageUrl,
  title,
  description,
  projectLink,
  codeLink,
  icons,
}: Project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className='lg:max-w-96 lg:max-h-96 bg-transparent border border-custom-color-600 rounded-xl text-black py-[15px] px-[14px] dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow dark:bg-radial-dark sm:max-w-96 sm:max-h-96 md:max-h-[23rem] md:max-w-[22rem]'>
        <article className='flex flex-col gap-5'>
          <figure
            className='rounded-xl max-h-[200px] overflow-hidden aspect-[35/20] cursor-pointer shadow-lg dark:shadow-none shadow-custom-color-200'
            onClick={onOpen}
          >
            <img src={imageUrl} alt={title} className='object-cover' />
          </figure>

          <div className='flex flex-col gap-[14px]'>
            <div
              className='flex flex-col gap-3 cursor-pointer'
              onClick={onOpen}
            >
              <h4 className='font-bold dark:text-white text-black text-xl line-clamp-1'>
                {title}
              </h4>
              <p className='text-sm text-black dark:text-[#BEC1DD] line-clamp-2'>
                {description}
              </p>
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
                href={projectLink}
                showAnchorIcon
                className='text-sm text-black border border-custom-color-600 dark:text-white dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow dark:bg-radial-dark px-4 rounded-xl'
              >
                Ver en directo
              </Link>
            </div>
          </div>
        </article>
      </section>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop='blur'
        size='3xl'
        radius='md'
        classNames={{
          backdrop: 'dark:bg-black/90 dark:backdrop-opacity-100',
        }}
      >
        <ModalContent className='dark:!bg-transparent dark:shadow-inset-white dark:filter dark:drop-shadow'>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-black dark:text-white'>
                {title}
              </ModalHeader>
              <ModalBody>
                <section>
                  <article className='flex flex-col gap-5'>
                    <figure className='rounded-xl overflow-hidden aspect-[35/20] shadow-2xl dark:shadow-drop-shadow'>
                      <Image
                        src={imageUrl}
                        alt={title}
                        className='object-cover'
                      />
                    </figure>

                    <div className='flex flex-col gap-[14px]'>
                      <div className='flex flex-col gap-3'>
                        <p className='text-sm dark:text-[#BEC1DD] text-black max-[575px]:line-clamp-[10]'>
                          {description}
                        </p>
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
                                base: [
                                  'before:bg-custom-color-700 dark:before:bg-white',
                                ],
                                content: ['py-2 px-4 shadow-xl', 'text-black'],
                              }}
                            >
                              {icon.icon}
                            </Tooltip>
                          ))}
                        </article>
                      </div>
                    </div>
                  </article>
                </section>
              </ModalBody>
              <ModalFooter className='flex flex-col min-[575px]:flex-row'>
                <Button
                  color='default'
                  variant='ghost'
                  onPress={onClose}
                  className='dark:text-white'
                >
                  Cerrar
                </Button>
                <Button
                  as={Link}
                  href={codeLink}
                  isExternal
                  endContent={<GithubIcon className='h-6 w-6' />}
                  variant='light'
                  color='default'
                  className='dark:text-white'
                >
                  Ver código
                </Button>
                <Button
                  showAnchorIcon
                  isExternal
                  as={Link}
                  color='default'
                  href={projectLink}
                  variant='solid'
                >
                  Ver en directo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
