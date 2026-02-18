/* ==========================================================================
   SOBRE NOSOTROS - Información del piloto y la empresa
   
   Para cambiar foto del piloto: reemplazar la imagen importada.
   Para cambiar texto: editar las constantes.
   Para cambiar Instagram: editar INSTAGRAM_URL y INSTAGRAM_HANDLE.
   ========================================================================== */

import { Instagram } from "lucide-react";
import pilotoImg from "@/assets/vuelo-5.jpg";

/* Redes sociales - cambiar aquí */
const INSTAGRAM_URL = "https://www.instagram.com/first_classparapentemedellin/";
const INSTAGRAM_HANDLE = "@first_classparapentemedellin";

const SobreNosotros = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Foto del piloto */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary shadow-lg">
            <img
              src={pilotoImg}
              alt="Andrés Felipe Pulgarín - Piloto certificado de parapente"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Sobre nosotros</h2>
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">Andrés Felipe Pulgarín</strong> – Piloto certificado con años de experiencia en San Félix. 
              En First Class Parapente nos apasiona compartir la libertad del vuelo con turistas de todo el mundo. 
              Tu seguridad es nuestra prioridad #1.
            </p>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:brightness-110 transition-all text-lg"
            >
              <Instagram className="w-5 h-5" />
              Síguenos: {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
