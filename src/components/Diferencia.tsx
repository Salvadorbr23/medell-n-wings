/* ==========================================================================
   DIFERENCIA - Sección "La diferencia es lo que vas a conocer"
   
   - Fondo oscuro
   - Mapa embebido de Google Maps (San Félix)
   - Información del piloto y seguridad
   
   Para cambiar ubicación del mapa: editar la URL del iframe.
   ========================================================================== */

import { Shield, Camera, MapPin, Award } from "lucide-react";

const FEATURES = [
  { icon: Award, label: "Piloto certificado Andrés Felipe Pulgarín" },
  { icon: Shield, label: "Equipamiento revisado diariamente + seguro incluido" },
  { icon: Camera, label: "Fotos y videos HD incluidos en todos los paquetes" },
  { icon: MapPin, label: "Recogemos en tu hotel en Medellín" },
];

const Diferencia = () => {
  return (
    <section className="bg-dark-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl text-center text-primary mb-12 text-gold-glow">
          La diferencia es lo que vas a conocer
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          {/* Mapa de Google Maps - San Félix, Medellín */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.8!2d-75.56!3d6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sSan%20F%C3%A9lix%2C%20Bello%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación despegue San Félix, Medellín"
            />
          </div>

          {/* Features */}
          <div>
            <p className="text-foreground/80 text-lg mb-8">
              <span className="text-primary font-bold">Despegue: San Félix, Medellín.</span><br />
              Vuela con la mejor vista del Valle de Aburrá. Cada vuelo es una experiencia irrepetible sobre montañas, cascadas y el páramo.
            </p>

            <div className="space-y-5">
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground/90 font-medium">{feat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferencia;
