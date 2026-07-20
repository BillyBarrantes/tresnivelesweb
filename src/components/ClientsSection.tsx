import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section id="clientes" className="page-section">
      <h2 className="section-title">Han confiado en nosotros</h2>
      <p className="clients-subtitle">Empresas de logística, retail e industria que ya operan con sistemas documentados, integraciones trazables e IA aplicada.</p>
      <div className="clients-container">
        <div className="clients-grid">
          <div className="client-logo-cell">
            <Image src="/images/interamericana.png" alt="Logo de Interamericana" width={180} height={40} style={{ width: 'auto', height: '100%' }} />
          </div>
          <div className="client-logo-cell">
            <Image src="/images/logo_AGP.svg" alt="Logo de AGP" width={100} height={40} style={{ width: 'auto', height: '100%' }} />
          </div>
          <div className="client-logo-cell">
            <Image src="/images/Logo_American.png" alt="Logo de American" width={180} height={40} style={{ width: 'auto', height: '100%' }} />
          </div>
          <div className="client-logo-cell">
            <Image src="/images/logo_Miguelito.png" alt="Logo de Miguelito" width={180} height={40} style={{ width: 'auto', height: '100%' }} />
          </div>
          <div className="client-logo-cell">
            <Image src="/images/Logo_Tradesur.png" alt="Logo de Tradesur" width={180} height={40} style={{ width: 'auto', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
