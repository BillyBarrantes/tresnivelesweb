import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <PainSection />
        <AboutSection />
        <PortfolioSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
