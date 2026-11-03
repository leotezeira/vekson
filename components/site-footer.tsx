import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#inicio" aria-label="VEKSON, volver al inicio">
        VEKSON<span>®</span>
      </a>
      <p>ESTUDIO DIGITAL INDEPENDIENTE<br />IDEAS HECHAS REALIDAD.</p>
      <div className="footer-links">
        <a href="mailto:hola@vekson.com">Hablemos <ArrowUpRight size={14} /></a>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
      <span className="copyright">© VEKSON 2025</span>
    </footer>
  );
}
