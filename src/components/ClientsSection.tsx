import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section id="clientes" className="page-section">
      <h2 className="section-title">Han confiado en nosotros</h2>
      <p className="clients-subtitle">Empresas de distintos sectores en Perú</p>
      <div className="clients-carousel">
        <Image src="/images/interamericana.png" alt="Logo de Interamericana" width={180} height={40} />
        <Image src="/images/logo_AGP.svg" alt="Logo de AGP" width={100} height={40} />
        <Image src="/images/Logo_American.png" alt="Logo de American" width={180} height={40} />
        <Image src="/images/logo_Miguelito.png" alt="Logo de Miguelito" width={180} height={40} />
        <Image src="/images/Logo_Tradesur.png" alt="Logo de Tradesur" width={180} height={40} />
      </div>
    </section>
  );
}
