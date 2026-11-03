import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    number: "01",
    title: "Web & experiencias",
    description:
      "Sitios web que ponen tu marca en movimiento. Claros, rápidos y hechos para convertir.",
    tags: "ESTRATEGIA / UX-UI / DESARROLLO",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Tiendas online que hacen fácil descubrir, elegir y volver a comprar.",
    tags: "SHOPIFY / EXPERIENCIA / OPTIMIZACIÓN",
  },
  {
    number: "03",
    title: "Productos digitales",
    description:
      "Aplicaciones y plataformas pensadas alrededor de personas reales y problemas concretos.",
    tags: "PRODUCTO / WEB APPS / MOBILE",
  },
  {
    number: "04",
    title: "Sistemas a medida",
    description:
      "Herramientas digitales que simplifican procesos y acompañan cómo crece tu negocio.",
    tags: "AUTOMATIZACIÓN / INTEGRACIONES / IA",
  },
];

const steps = [
  ["01", "Escuchamos", "Entendemos el contexto, los retos y qué significa hacerlo bien."],
  ["02", "Definimos", "Alineamos estrategia, alcance y una dirección creativa compartida."],
  ["03", "Construimos", "Diseñamos, desarrollamos y validamos en ciclos cortos."],
  ["04", "Lanzamos", "Publicamos, medimos y seguimos mejorando contigo."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <section className="hero section-shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ESTUDIO DIGITAL — DISPONIBLES PARA PROYECTOS</p>
            <h1>
              Ideas
              <br />
              digitales,
              <br />
              <span>hechas</span>
              <br />
              realidad<span className="blue-period">.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                Estrategia, diseño y tecnología para marcas que quieren hacer
                las cosas de otra manera.
              </p>
              <a className="circle-link" href="#estudio" aria-label="Descubrir VEKSON">
                <ArrowDown size={19} />
              </a>
            </div>
          </div>
          <HeroVisual />
          <span className="hero-index">01 / 08</span>
        </section>

        <section className="ticker" aria-label="Especialidades">
          <div className="ticker-track">
            {[0, 1].map((repeat) => (
              <span className="ticker-group" key={repeat} aria-hidden={repeat === 1}>
                <span>ESTRATEGIA</span><i>✳</i><span>DISEÑO DIGITAL</span><i>✳</i>
                <span>DESARROLLO</span><i>✳</i><span>PRODUCTO</span><i>✳</i>
              </span>
            ))}
          </div>
        </section>

        <section className="intro section-shell" id="estudio">
          <p className="section-kicker">01 — EL ESTUDIO</p>
          <div className="intro-content">
            <h2>
              Lo digital no debería sentirse <span>complicado.</span>
            </h2>
            <div className="intro-aside">
              <p>
                Somos un estudio independiente que transforma ideas ambiciosas
                en experiencias digitales útiles, atractivas y preparadas para
                crecer.
              </p>
              <p>
                Trabajamos cerca de cada equipo, desde la primera pregunta hasta
                el último píxel. Sin fórmulas prefabricadas. Sin ruido.
              </p>
              <a className="text-link" href="mailto:hola@vekson.com">
                Conoce cómo trabajamos <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="intro-stats">
            <div><strong>01</strong><span>equipo pequeño,<br />ideas grandes</span></div>
            <div><strong>∞</strong><span>curiosidad por<br />lo que sigue</span></div>
            <div><strong>100%</strong><span>hecho a medida,<br />nunca en serie</span></div>
          </div>
        </section>

        <section className="services section-shell" id="servicios">
          <div className="section-heading">
            <p className="section-kicker">02 — LO QUE HACEMOS</p>
            <h2>Un buen equipo<br />para <span>grandes ideas.</span></h2>
            <p className="section-description">
              De la primera conversación al lanzamiento. Reunimos lo que tu
              proyecto necesita para avanzar.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <a className="service-row" href="mailto:hola@vekson.com" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-tags">{service.tags}</span>
                <span className="service-arrow"><ArrowUpRight size={20} /></span>
              </a>
            ))}
          </div>
          <a className="text-link all-services" href="mailto:hola@vekson.com">
            Cuéntanos qué tienes en mente <ArrowRight size={16} />
          </a>
        </section>

        <section className="projects section-shell" id="proyectos">
          <div className="projects-heading">
            <div>
              <p className="section-kicker">03 — TRABAJO SELECCIONADO</p>
              <h2>Hecho para<br /><span>dejar huella.</span></h2>
            </div>
            <p>Proyectos propios y colaboraciones<br />que nos mueven hacia adelante.</p>
          </div>
          <div className="project-grid">
            <article className="project project-large">
              <div className="project-art project-art-one">
                <div className="project-browser">
                  <div className="browser-bar"><i /><i /><i /><span>aurora.studio</span></div>
                  <div className="aurora-page">
                    <span>AURORA®</span>
                    <strong>MAKE<br />ROOM<br />TO GROW.</strong>
                    <div className="aurora-orb" />
                    <small>CREATIVE GARDENS / MADRID</small>
                  </div>
                </div>
                <span className="project-label">ECOMMERCE / 2025</span>
              </div>
              <div className="project-meta">
                <div><h3>Aurora Gardens</h3><p>Una nueva forma de habitar el verde.</p></div>
                <span>VER PROYECTO <MoveUpRight size={15} /></span>
              </div>
            </article>
            <article className="project project-small">
              <div className="project-art project-art-two">
                <div className="mobile-mockup">
                  <div className="phone-notch" />
                  <span>nómada</span>
                  <strong>Find your<br />next somewhere.</strong>
                  <div className="nomada-shape">N</div>
                  <small>EXPLORE WITHOUT A MAP ↗</small>
                </div>
                <span className="project-label">PRODUCTO DIGITAL / 2025</span>
              </div>
              <div className="project-meta">
                <div><h3>Nómada</h3><p>Una app para viajar sin itinerario.</p></div>
                <span>VER PROYECTO <MoveUpRight size={15} /></span>
              </div>
            </article>
          </div>
          <a className="portfolio-link" href="mailto:hola@vekson.com">
            <span>¿El siguiente proyecto es el tuyo?</span>
            <span>Hablemos <ArrowUpRight size={18} /></span>
          </a>
        </section>

        <section className="difference section-shell">
          <p className="section-kicker">04 — POR QUÉ VEKSON</p>
          <div className="difference-content">
            <h2>Pequeños por elección.<br /><span>Grandes en lo que importa.</span></h2>
            <div className="difference-note">
              <span className="difference-star">✳</span>
              <p>Menos capas. Más conversación. Mejor trabajo.</p>
            </div>
          </div>
          <div className="difference-bottom">
            <p>
              Un equipo cercano y multidisciplinar que se implica de verdad.
              Pensamos antes de hacer, cuidamos cada detalle y construimos para
              durar.
            </p>
            <div className="difference-values">
              <span>01 — CONVERSACIÓN HONESTA</span>
              <span>02 — DISEÑO CON INTENCIÓN</span>
              <span>03 — TECNOLOGÍA ÚTIL</span>
            </div>
          </div>
        </section>

        <section className="process section-shell" id="proceso">
          <div className="process-heading">
            <p className="section-kicker">05 — CÓMO LO HACEMOS</p>
            <h2>De la idea<br />al <span>impacto.</span></h2>
          </div>
          <div className="process-list">
            {steps.map(([number, title, description]) => (
              <div className="process-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="process-spark">✳</span>
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta section-shell" id="contacto">
          <div className="cta-topline"><span>¿TIENES ALGO EN MENTE?</span><span>ESTAMOS ESCUCHANDO.</span></div>
          <h2>Hagamos<br />que <span>pase.</span></h2>
          <div className="cta-bottom">
            <p>Cuéntanos tu idea.<br />Nosotros ponemos lo demás.</p>
            <a href="mailto:hola@vekson.com?subject=Hablemos%20de%20un%20proyecto">
              Empezar una conversación <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="cta-mark" aria-hidden="true">V</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
