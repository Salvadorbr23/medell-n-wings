/* ==========================================================================
   EXPERIENCIAS - Tarjetas de paquetes con precios e imágenes
   
   Para agregar/quitar paquetes: editar el array PAQUETES abajo.
   Para cambiar precios: editar el campo "precio" de cada paquete.
   Para cambiar mensaje WhatsApp: editar el campo "whatsapp".
   Para cambiar imágenes: reemplazar los imports de fotos.
   ========================================================================== */

import { Clock, Camera, Mountain, Star, Phone, Check } from "lucide-react";
import vuelo1 from "@/assets/vuelo-1.jpg";
import vuelo6 from "@/assets/vuelo-6.jpg";
import vuelo5 from "@/assets/vuelo-5.jpg";

/* Paquetes de vuelo - agregar/quitar/editar aquí */
const PAQUETES = [
  {
    id: "15min",
    duracion: "15 min",
    precio: "$270.000",
    precioCorto: "$270k",
    nombre: "Vuelo Cascada",
    descripcion: "Cascada y Páramo de Belmira",
    incluye: ["Fotos HD incluidas", "Videos incluidos", "Piloto certificado", "Seguro incluido"],
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2015min%20($270k)%20-%20Cascada%20y%20Páramo%20de%20Belmira",
    destacado: false,
    imagen: vuelo1,
  },
  {
    id: "20min",
    duracion: "20 min",
    precio: "$340.000",
    precioCorto: "$340k",
    nombre: "Vuelo Aventura",
    descripcion: "Cascada, Páramo de Belmira y Valle de Piedra",
    incluye: ["Fotos HD incluidas", "Videos incluidos", "Piloto certificado", "Seguro incluido", "Ruta extendida"],
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2020min%20($340k)%20-%20Cascada,%20Páramo%20y%20Valle%20de%20Piedra",
    destacado: false,
    imagen: vuelo6,
  },
  {
    id: "30min",
    duracion: "30 min",
    precio: "$490.000",
    precioCorto: "$490k",
    nombre: "Experiencia Completa",
    descripcion: "Cascada + Páramo + Valle de Piedra + Represa",
    incluye: ["Fotos HD incluidas", "Videos incluidos", "Piloto certificado", "Seguro incluido", "Ruta completa", "La mejor vista"],
    whatsapp: "https://wa.me/573169453767?text=Hola,%20quiero%20reservar%20vuelo%2030min%20($490k)%20-%20Experiencia%20completa",
    destacado: true,
    imagen: vuelo5,
  },
];

/* Transporte adicional */
const TRANSPORTE_WHATSAPP = "https://wa.me/573169453767?text=Hola,%20quiero%20agregar%20transporte%20hotel%20↔%20despegue%20($130k)";

const Experiencias = () => {
  return (
    <section id="experiencias" className="bg-light-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <h2 className="font-display text-3xl md:text-5xl text-center mb-3" style={{ color: "hsl(47, 89%, 50%)" }}>
          Elige tu aventura
        </h2>
        <p className="text-center text-card-foreground/60 mb-14 text-lg max-w-xl mx-auto">
          Todos los vuelos incluyen piloto certificado, fotos y videos HD
        </p>

        {/* Grid de tarjetas */}
        <div id="precios" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {PAQUETES.map((paq) => (
            <div
              key={paq.id}
              className={`group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                paq.destacado ? "card-featured md:scale-105 md:z-10" : ""
              }`}
            >
              {/* Badge "Más popular" */}
              {paq.destacado && (
                <div className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 uppercase tracking-widest">
                  ⭐ Más popular
                </div>
              )}

              {/* Imagen superior con overlay */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={paq.imagen}
                  alt={`Vuelo parapente ${paq.duracion} - ${paq.descripcion}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Duración sobre la imagen */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-foreground/20 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold" style={{ color: "white" }}>{paq.duracion}</span>
                  </div>
                </div>

                {/* Precio sobre la imagen */}
                <div className="absolute bottom-4 right-4">
                  <span className="font-display text-3xl font-bold text-primary text-gold-glow">{paq.precio}</span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="bg-card flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl text-card-foreground mb-1">{paq.nombre}</h3>
                <p className="text-card-foreground/60 text-sm mb-5">{paq.descripcion}</p>

                {/* Lista de incluidos */}
                <ul className="space-y-2 mb-6 flex-1">
                  {paq.incluye.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-card-foreground/70 text-sm">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(145, 56%, 40%)" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Botón CTA → WhatsApp */}
                <a
                  href={paq.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-center transition-all ${
                    paq.destacado
                      ? "bg-primary text-primary-foreground hover:brightness-110 animate-pulse-gold"
                      : "bg-primary text-primary-foreground hover:brightness-110"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Reservar {paq.duracion}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transporte adicional */}
        <div className="max-w-lg mx-auto bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 border border-card-foreground/10 shadow-lg">
          <div className="text-center sm:text-left flex-1">
            <p className="font-bold text-card-foreground text-lg">🚐 Transporte hotel ↔ despegue</p>
            <p className="text-card-foreground/60 text-sm">$130.000 COP (1-2 personas) · Recogida en tu hotel</p>
          </div>
          <a
            href={TRANSPORTE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all whitespace-nowrap"
          >
            Agregar transporte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
