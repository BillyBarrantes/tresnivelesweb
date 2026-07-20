export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>3N</h4>
          <p>
            Desarrollo de software, automatización e inteligencia artificial
            para empresas.
          </p>
        </div>
        <div className="footer-column">
          <h4>Enlaces</h4>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <a href="mailto:hola@3n.pe">hola@3n.pe</a>
          <p>Lima, Perú</p>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="/privacidad">Política de privacidad</a>
          <a href="/terminos">Términos del servicio</a>
          <p>&copy; {new Date().getFullYear()} 3N Tres Niveles. Todos los derechos reservados.</p>
        </div>
      </div>
      <a href="#inicio" className="footer-back">↑ Volver arriba</a>
    </footer>
  );
}
