'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoWordmark from './LogoWordmark';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Soluciones' },
    { href: '#portafolio', label: 'Proyectos' },
    { href: '#clientes', label: 'Clientes' },
  ];

  const isCompact = isMobile ? true : isScrolled;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const gapSpring = { type: 'spring' as const, stiffness: 280, damping: 28 };
  const logoSpring = { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.8 };

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <nav className="navbar">
        <motion.div
          className="navbar-left"
          animate={{ gap: isCompact ? '1.5rem' : '2.5rem' }}
          transition={gapSpring}
        >
          <a href="#inicio" className="logo-link">
            <motion.div
              className="logo-wordmark-container"
              animate={{
                width: isCompact ? 36 : 88,
                '--clip-right': isCompact ? '63.6%' : '0%',
              } as Record<string, string | number>}
              transition={logoSpring}
            >
              <LogoWordmark className="logo-wordmark" />
            </motion.div>
          </a>

          <motion.ul
            className="nav-links"
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <a href="#contacto" className="header-cta">
          Evaluar mi operación
        </a>

        <button
          type="button"
          className={`hamburger-menu${isOpen ? ' active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`mobile-nav-links${isOpen ? ' active' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
        <a href="#contacto" onClick={handleLinkClick}>
          Evaluar mi operación
        </a>
      </div>
    </header>
  );
}