import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Main } from './sections/Main';

export const Portfolio = () => {
  return (
    <>
      <div className='grid place-content-center'>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};
