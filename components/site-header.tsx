import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Estudio", href: "#estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="VEKSON, inicio">
        VEKSON<span>®</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href="mailto:hola@vekson.com">
        <span>Empezar un proyecto</span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>

      <details className="mobile-nav">
        <summary aria-label="Abrir navegación">
          <span />
          <span />
        </summary>
        <nav aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="mailto:hola@vekson.com">Empezar un proyecto ↗</a>
        </nav>
      </details>
    </header>
  );
}
