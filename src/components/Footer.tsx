/* ==========================================================================
   FOOTER - Pie de página
   
   - Logo, datos de contacto, redes sociales
   - Para cambiar WhatsApp: buscar "573169453767"
   - Para cambiar Instagram: editar INSTAGRAM_URL
   - Para cambiar correo: editar EMAIL
   ========================================================================== */

import { Phone, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

/* Datos de contacto - cambiar aquí */
const WHATSAPP_URL = "https://wa.me/573169453767?text=Hola%20First%20Class%20Parapente,%20quiero%20información";
const WHATSAPP_DISPLAY = "+57 316 945 3767";
const INSTAGRAM_URL = "https://www.instagram.com/first_classparapentemedellin/";
const INSTAGRAM_HANDLE = "@first_classparapentemedellin";
const EMAIL = "info@firstclassparapente.com";

const Footer = () => {
  return (
    <footer className="bg-dark-section border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <img src={logo} alt="First Class Parapente Medellín" className="h-16 mx-auto mb-6" />

        {/* Contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 text-foreground/70">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> {WHATSAPP_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" /> {INSTAGRAM_HANDLE}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> {EMAIL}
          </a>
        </div>

        <p className="text-foreground/40 text-sm">
          First Class Parapente Medellín – Vive la libertad del vuelo. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
