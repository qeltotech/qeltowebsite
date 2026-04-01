import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero3D from '../components/Hero3D';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qelto | ERP & Digital Solutions</title>
        <meta
          name="description"
          content="Qelto helps companies scale with ERP implementation, brand growth, video promotion, and modern website development."
        />
      </Head>
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
