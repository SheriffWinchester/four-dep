import '../styles/globals.css';
import Navbar from '../components/Navbar'
import Header from '../components/Header'


//import { GetServerSideProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
