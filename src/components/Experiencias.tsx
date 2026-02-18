/* ==========================================================================
   EXPERIENCIAS - Tarjetas de paquetes con precios
   
   Para agregar/quitar paquetes: editar el array PAQUETES abajo.
   Para cambiar precios: editar el campo "precio" de cada paquete.
   Para cambiar mensaje WhatsApp: editar el campo "whatsapp".
   ========================================================================== */

import { Clock, Camera, Mountain, Star } from "lucide-react";

/* Paquetes de vuelo - agregar/quitar/editar aquí */
const PAQUETES = [
  {
    id: "15min",
    duracion: "15 minutos",
    precio: "$270.000",
    descripcion: "Cascada y Páramo de Belmira",
    incluye: "Fotos y videos de alta resolución",
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2015min%20($270k)%20-%20Cascada%20y%20Páramo%20de%20Belmira",
    destacado: false,
    icono: Mountain,
  },
  {
    id: "20min",
    duracion: "20 minutos",
    precio: "$340.000",
    descripcion: "Cascada, Páramo de Belmira y Valle de Piedra",
    incluye: "Fotos y videos de excelente calidad",
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2020min%20($340k)%20-%20Cascada,%20Páramo%20y%20Valle%20de%20Piedra",
    destacado: false,
    icono: Star,
  },
  {
    id: "30min",
    duracion: "30 minutos",
    precio: "$490.000",
    descripcion: "Cascada + Páramo de Belmira + Valle de Piedra + Represa",
    incluye: "Experiencia completa con fotos/videos HD",
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2030min%20($490k)%20-%20Experiencia%20completa",
    destacado: true,
    icono: Camera,
  },
];

/* Transporte adicional */
const TRANSPORTE_WHATSAPP = "https://wa.me/573169453767?text=Hola,%20quiero%20agregar%20transporte%20hotel%20↔%20despegue%20($130k)";

const Experiencias = () => {
  return (
    <section id="experiencias" className="bg-light-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4" style={{ color: "hsl(47, 89%, 50%)" }}>
          Elige tu aventura
        </h2>
        <p className="text-center text-card-foreground/60 mb-12 text-lg">Todos los vuelos incluyen piloto certificado y fotos/videos</p>

        {/* Grid de tarjetas - 3 columnas desktop, 1 mobile */}
        <div id="precios" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {PAQUETES.map((paq) => {
            const Icon = paq.icono;
            return (
              <div
                key={paq.id}
                className={`bg-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 ${
                  paq.destacado ? "card-featured relative" : "border border-card-foreground/10"
                }`}
              >
                {/* Badge "Más popular" para el destacado */}
                {paq.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Más popular
                  </span>
                )}

                <Icon className="w-10 h-10 mb-4" style={{ color: "hsl(47, 89%, 50%)" }} />

                {/* Duración */}
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-card-foreground/50" />
                  <span className="font-semibold text-card-foreground/70 text-sm uppercase tracking-wider">{paq.duracion}</span>
                </div>

                {/* Precio */}
                <p className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: "hsl(47, 89%, 50%)" }}>
                  {paq.precio}
                </p>

                {/* Descripción */}
                <p className="text-card-foreground font-semibold mb-2">{paq.descripcion}</p>
                <p className="text-card-foreground/60 text-sm mb-6">{paq.incluye}</p>

                {/* Botón CTA → WhatsApp */}
                <a
                  href={paq.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg text-center hover:brightness-110 transition-all"
                >
                  Reservar {paq.duracion.split(" ")[0]}min
                </a>
              </div>
            );
          })}
        </div>

        {/* Transporte adicional */}
        <div className="max-w-md mx-auto bg-card rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 border border-card-foreground/10 shadow">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-card-foreground">🚐 Transporte hotel ↔ despegue</p>
            <p className="text-card-foreground/60 text-sm">$130.000 (1-2 personas)</p>
          </div>
          <a
            href={TRANSPORTE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-bold px-5 py-2 rounded-lg text-sm hover:brightness-110 transition-all whitespace-nowrap"
          >
            Agregar transporte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
