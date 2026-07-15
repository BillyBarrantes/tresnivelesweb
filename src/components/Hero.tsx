'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.to('.hero-title, .hero-pretitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        stagger: 0.1,
      });
      gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
      gsap.to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });
      gsap.from('.logo', { opacity: 0, y: -20, duration: 0.8, delay: 0.1 });

      const phrases = gsap.utils.toArray<HTMLElement>('.animated-text-phrase');
      const icons = gsap.utils.toArray<HTMLElement>('.floating-icon');
      const colors = ['#015A7F', '#00D9A8'];
      let currentIndex = 0;

      function initializeCarousel() {
        if (phrases.length === 0) return;
        const firstPhrase = phrases[0];
        const firstIcon = icons.find(
          (icon) =>
            icon.dataset.phrase?.trim() === firstPhrase.dataset.phrase?.trim()
        );
        gsap.set(firstPhrase, {
          top: '50%',
          y: '-50%',
          opacity: 1,
          color: colors[0],
        });
        if (firstIcon) {
          firstPhrase.prepend(firstIcon);
          gsap.set(firstIcon, { opacity: 1, x: 0, display: 'inline-block' });
        }
      }

      function runCarousel() {
        if (phrases.length < 2) return;
        const currentPhrase = phrases[currentIndex];
        const nextIndex = (currentIndex + 1) % phrases.length;
        const nextPhrase = phrases[nextIndex];
        const nextIcon = icons.find(
          (icon) =>
            icon.dataset.phrase?.trim() === nextPhrase.dataset.phrase?.trim()
        );
        if (nextIcon) {
          nextPhrase.prepend(nextIcon);
        }
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(currentPhrase, { top: '150%', opacity: 0 });
            currentIndex = nextIndex;
          },
        });
        tl.to(currentPhrase, {
          top: '-50%',
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
        });
        tl.to(
          nextPhrase,
          {
            top: '50%',
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            onStart: () => {
              gsap.set(nextPhrase, {
                color: colors[nextIndex % colors.length],
              });
              if (nextIcon) {
                gsap.fromTo(
                  nextIcon,
                  { opacity: 0, x: -20, display: 'inline-block' },
                  { opacity: 1, x: 0, duration: 0.5 }
                );
              }
            },
          },
          '<0.1'
        );
      }

      gsap.set(icons, { opacity: 0 });
      gsap.set(phrases, { top: '150%', y: '-50%', opacity: 0 });
      initializeCarousel();
      gsap.delayedCall(2.5, () => {
        runCarousel();
        setInterval(runCarousel, 3200);
      });

      const floatingElements = gsap.utils.toArray<HTMLElement>(
        '.floating-element'
      );
      floatingElements.forEach((element) => {
        gsap.to(element, {
          x: () => gsap.utils.random(-150, 150),
          y: () => gsap.utils.random(-150, 150),
          rotation: () => gsap.utils.random(-90, 90),
          duration: () => gsap.utils.random(3, 6),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <div className="hero-text">
        <p className="hero-pretitle">Tecnología que</p>
        <h1 className="hero-title">Impulsa tu Negocio</h1>
        <p className="hero-subtitle">
          Creamos soluciones de software y automatización a la medida para que
          tu empresa crezca.
        </p>
        <a href="#contacto" className="cta-button">
          Hablemos de tu proyecto
        </a>
      </div>

      <div className="hero-animation-container">
        <div className="floating-elements">
          <div className="floating-element shape-1"></div>
          <div className="floating-element shape-2"></div>
          <div className="floating-element shape-3"></div>
          <div className="floating-element shape-4"></div>
        </div>
        <div className="floating-icons" aria-hidden="true">
          <img
            src="/images/icon_software.svg"
            className="floating-icon"
            data-phrase="Desarrollo de Software"
            alt="Icono de Desarrollo de Software"
          />
          <img
            src="/images/icon_automatiza.svg"
            className="floating-icon"
            data-phrase="Automatización de Procesos"
            alt="Icono de Automatización de Procesos"
          />
          <img
            src="/images/icon_paginas_web.svg"
            className="floating-icon"
            data-phrase="Desarrollo Web"
            alt="Icono de Desarrollo Web"
          />
          <img
            src="/images/icon_desarrollo_app.svg"
            className="floating-icon"
            data-phrase="Desarrollo de Apps"
            alt="Icono de Desarrollo de Apps"
          />
          <img
            src="/images/icon_agentes_ia.svg"
            className="floating-icon"
            data-phrase="Agentes de Inteligencia Artificial"
            alt="Icono de Agentes de IA"
          />
        </div>
        <div className="animated-text-wrapper">
          <div
            className="animated-text-phrase"
            data-phrase="Desarrollo de Software"
          >
            Desarrollo de Software
          </div>
          <div
            className="animated-text-phrase"
            data-phrase="Automatización de Procesos"
          >
            Automatización de Procesos
          </div>
          <div className="animated-text-phrase" data-phrase="Desarrollo Web">
            Desarrollo Web
          </div>
          <div className="animated-text-phrase" data-phrase="Desarrollo de Apps">
            Desarrollo de Apps
          </div>
          <div
            className="animated-text-phrase"
            data-phrase="Agentes de Inteligencia Artificial"
          >
            Agentes de Inteligencia<br />Artificial
          </div>
        </div>
      </div>
    </section>
  );
}
