/* ==========================================================================
   HEADER - Barra de navegación fija (sticky)
   
   - Logo a la izquierda
   - Menú con anclas: Inicio, Experiencias, Precios, Galería, Contacto
   - Botón "Reservar por WhatsApp" a la derecha
   - En mobile: menú hamburguesa
   
   Para cambiar el número de WhatsApp: buscar "573169453767" y reemplazar.
   ========================================================================== */

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

/* Enlaces del menú - agregar/quitar secciones aquí */
const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Precios", href: "#precios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

/* URL de WhatsApp principal - cambiar número aquí */
const WHATSAPP_RESERVAR = "https://wa.me/573169453767?text=Hola%20First%20Class%20Parapente,%20quiero%20reservar%20mi%20vuelo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <img src={logo} alt="First Class Parapente Medellín" className="h-12 md:h-16 w-auto" />
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA desktop */}
        <a
          href={WHATSAPP_RESERVAR}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-lg hover:brightness-110 transition-all text-sm"
        >
          <Phone className="w-4 h-4" />
          Reservar por WhatsApp
        </a>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col py-4 px-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-foreground/80 hover:text-primary py-2 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_RESERVAR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-lg mt-2"
            >
              <Phone className="w-4 h-4" />
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
