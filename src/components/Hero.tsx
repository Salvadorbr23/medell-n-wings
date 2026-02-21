/* ==========================================================================
   HERO - Sección principal (above the fold)
   
   - Fondo: video en loop con overlay oscuro
   - Titular y subtítulo
   - 3 botones CTA: Reservar (WhatsApp), Ver precios, Ver galería
   - Texto de urgencia
   
   Para cambiar el video del hero: reemplazar el src del <video>.
   Para cambiar textos: editar las constantes abajo.
   ========================================================================== */

import { Phone, ChevronDown, Camera } from "lucide-react";

/* Textos del hero - editar aquí */
const HERO_TITLE = "FIRST CLASS PARAPENTE MEDELLÍN";
const HERO_SUBTITLE = "'Vuela hacía la libertad' Vive una experiencia única en San Félix con piloto certificado Felipe Pulgarín. Fotos y videos HD incluidos.";
const HERO_URGENCY = "Cupos diarios limitados – Reserva ahora tu aventura.";

/* URL WhatsApp - cambiar número aquí */
const WHATSAPP_URL = "https://wa.me/573169453767?text=Hola%20First%20Class%20Parapente,%20quiero%20reservar%20mi%20vuelo";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up text-gold-glow">
          {HERO_TITLE}
        </h1>

        <p className="text-primary font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {HERO_SUBTITLE}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {/* Botón principal: Reservar por WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all animate-pulse-gold"
          >
            <Phone className="w-5 h-5" />
            Reservar vuelo
          </a>

          {/* Botón: Ver precios */}
          <a
            href="#precios"
            className="flex items-center gap-2 border-2 border-foreground text-foreground font-bold px-8 py-4 rounded-lg text-lg hover:bg-foreground/10 transition-all"
          >
            <ChevronDown className="w-5 h-5" />
            Ver precios
          </a>

          {/* Botón: Ver galería */}
          <a
            href="#galeria"
            className="flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all"
          >
            <Camera className="w-5 h-5" />
            Ver galería
          </a>
        </div>

        {/* Texto de urgencia */}
        <p className="text-foreground/70 text-sm font-medium tracking-wide uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {HERO_URGENCY}
        </p>
      </div>
    </section>
  );
};

export default Hero;
