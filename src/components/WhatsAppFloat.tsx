/* ==========================================================================
   WHATSAPP FLOTANTE - Botón fijo abajo a la derecha
   
   Aparece siempre visible para que el usuario pueda contactar en cualquier momento.
   Para cambiar número: editar WHATSAPP_URL.
   ========================================================================== */

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573169453767?text=Hola%20First%20Class%20Parapente,%20quiero%20información%20de%20vuelos";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-pulse-gold"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
