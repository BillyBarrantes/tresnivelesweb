'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Soluciones' },
    { href: '#portafolio', label: 'Proyectos' },
    { href: '#clientes', label: 'Clientes' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const header = document.querySelector('.header');
        if (header) {
          header.classList.toggle('header--scrolled', !entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#inicio" className="logo-wordmark">3N</a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <a href="#contacto" className="header-cta">
          Evaluar mi operación
        </a>

        <button
          className={`hamburger-menu ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

      <div className={`mobile-nav-links ${isOpen ? 'active' : ''}`}>
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
