import Image from 'next/image';
import HeroReveal from './HeroReveal';
import WordRotator from './WordRotator';
import HeroMedia from './HeroMedia';

export default function Hero() {
  return (
    <HeroReveal>
      <div className="hero-text">
        <p className="hero-pretitle reveal">Software, automatización e IA aplicada</p>
        <h1 className="hero-title reveal">
          Capacidades<br />
          que ordenan tu<br />
          <WordRotator
              words={['operación', 'proceso', 'negocio', 'equipo', 'crecimiento']}
            />
        </h1>
        <p className="hero-subtitle reveal">
          Diseñamos software a medida, automatizaciones y analítica para que
          tu empresa ordene procesos, conecte sistemas y tome decisiones con
          información confiable.
        </p>
        <div className="hero-actions reveal">
          <a href="#contacto" className="cta-button">
            Evaluar mi operación
          </a>
          <a href="#servicios" className="hero-cta-secondary">
            Ver soluciones
          </a>
        </div>
        <div className="hero-trust reveal">
          <span className="trust-logo-cell">
            <Image src="/images/logo_AGP.svg" alt="" width={80} height={20} />
          </span>
          <span className="trust-logo-cell">
            <Image src="/images/interamericana.png" alt="" width={80} height={20} />
          </span>
          <span className="trust-logo-cell">
            <Image src="/images/Logo_American.png" alt="" width={80} height={20} />
          </span>
          <span className="trust-logo-cell">
            <Image src="/images/Logo_Tradesur.png" alt="" width={80} height={20} />
          </span>
        </div>
      </div>
      <div className="hero-product reveal" aria-label="Panel operativo Tres Niveles">
        <HeroMedia mediaSrc="/media/hero-demo-3n.mp4" mediaType="video" />
      </div>
    </HeroReveal>
  );
}
