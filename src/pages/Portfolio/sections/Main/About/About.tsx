import { AboutIcon } from '@/assets/icons/main/AboutIcon';

export const About = () => {
  return (
    <section className='flex gap-14 flex-col scroll-m-24' id='about'>
      <h4 className='text-4xl font-bold flex gap-4 items-center'>
        <AboutIcon /> Sobre mí
      </h4>
      <p className='text-start text-sm'>
        Soy bachiller en Ingeniería de Sistemas y desarrollador frontend con una
        sólida base técnica y un enfoque en el diseño y desarrollo de interfaces
        web modernas, responsivas y funcionales. He trabajado en proyectos que
        me han permitido desarrollar competencias en tecnologías como React,
        NextJS, TailwindCSS, HTML, CSS y JavaScript, además de herramientas como
        WordPress y WooCommerce para soluciones de contenido y comercio digital.
        Mi formación académica y experiencia en proyectos personales me han
        permitido abordar desafíos como la optimización de sitios web, la
        creación de componentes reutilizables y la gestión de servidores
        LAMP/LEMP. Estas experiencias han consolidado mi capacidad para aprender
        rápidamente y aplicar mis conocimientos a soluciones reales. Soy
        apasionado por el desarrollo web y me motiva contribuir a la creación de
        soluciones digitales innovadoras y escalables. Siempre busco
        oportunidades para mejorar mis habilidades, colaborar en proyectos
        desafiantes y aportar valor mediante la tecnología.
      </p>
    </section>
  );
};
