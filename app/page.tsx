import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Benefits from '@/components/Benefits';
import Delivery from '@/components/Delivery';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Benefits />
        <Delivery />
        <Location />
        <CTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
