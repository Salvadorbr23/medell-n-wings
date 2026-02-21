/* ==========================================================================
   PÁGINA PRINCIPAL - First Class Parapente Medellín
   
   Landing page de alta conversión. Todas las secciones en orden:
   1. Header fijo
   2. Hero con video
   3. Experiencias (paquetes + precios)
   4. Diferencia (mapa + features)
   5. Galería (fotos + videos)
   6. Sobre nosotros
   7. Formulario de reserva → WhatsApp
   8. Footer
   9. WhatsApp flotante
   ========================================================================== */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiencias from "@/components/Experiencias";
import Diferencia from "@/components/Diferencia";
import Galeria from "@/components/Galeria";
import Testimonios from "@/components/Testimonios";
import SobreNosotros from "@/components/SobreNosotros";
import FormularioReserva from "@/components/FormularioReserva";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiencias />
        <Diferencia />
        <Galeria />
        <Testimonios />
        <SobreNosotros />
        <FormularioReserva />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
