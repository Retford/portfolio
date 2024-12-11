import { AboutIcon } from '@/assets/icons/main/AboutIcon';

export const About = () => {
  return (
    <section className='flex gap-14 flex-col scroll-m-24 mb-6' id='about'>
      <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-4 items-center'>
        <AboutIcon /> Sobre mí
      </h4>
      <article className='flex items-center justify-center gap-8 flex-col sm:flex-row'>
        <img
          src='/images/profile/profile.webp'
          alt='profile'
          className='rounded-xl p-4 dark:bg-transparent shadow-inset-white shadow-custom-color-800 dark:shadow-inset-white dark:filter dark:drop-shadow max-w-80 max-h-full object-cover sm:order-1'
        />
        <div className='text-pretty flex flex-col gap-4 text-start text-sm lg:text-base xl:text-lg dark:text-[#BEC1DD]'>
          <p>
            Soy bachiller en Ingeniería de Sistemas y <strong className='dark:text-white'>desarrollador frontend</strong> especializado en crear interfaces web modernas, responsivas y funcionales. Mi experiencia incluye tecnologías como <strong className='dark:text-white'>
              TailwindCSS, HTML, CSS y JavaScript,</strong> además del uso de <strong className='dark:text-white'> WordPress y
              React, NextJS, WooCommerce</strong> para soluciones digitales de contenido y comercio.
          </p>
          <p>
            He trabajado en la optimización de sitios web, el desarrollo de
            componentes reutilizables y la gestión de servidores <strong className='dark:text-white'>LAMP/LEMP</strong>,
            abordando desafíos técnicos con eficacia y creatividad. Estas
            experiencias han fortalecido mi capacidad para aprender rápidamente
            y aplicar soluciones prácticas en proyectos reales.
          </p>
          <p>
            Estoy apasionado por la innovación en el desarrollo web y motivado
            por contribuir a proyectos desafiantes que generen valor. Siempre
            busco mejorar mis habilidades y colaborar en equipos que compartan
            mi compromiso con la excelencia tecnológica.
          </p>
        </div>
      </article>
    </section>
  );
};
