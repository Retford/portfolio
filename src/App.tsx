import { Header } from './pages/sections/Header';
import { Main } from './pages/sections/Main';
import { Footer } from './pages/sections/Footer';

function App() {
  return (
    <>
      <div className='grid place-content-center'>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
