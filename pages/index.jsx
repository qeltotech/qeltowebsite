import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qelto | ERP, Marketing, Video & Web Solutions</title>
        <meta
          name="description"
          content="Qelto provides ERP implementation, brand promotion, video campaigns, and website development for business growth."
        />
      </Head>
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
