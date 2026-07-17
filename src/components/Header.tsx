'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#inicio" className="logo-wordmark">3N</a>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#portafolio">Portafolio</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div
          className={`hamburger-menu ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <div className={`mobile-nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#inicio" onClick={handleLinkClick}>Inicio</a>
        <a href="#nosotros" onClick={handleLinkClick}>Nosotros</a>
        <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
        <a href="#portafolio" onClick={handleLinkClick}>Portafolio</a>
        <a href="#clientes" onClick={handleLinkClick}>Clientes</a>
        <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
      </div>
    </header>
  );
}
