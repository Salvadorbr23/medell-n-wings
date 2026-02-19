/* ==========================================================================
   GALERÍA - Fotos y videos de vuelos
   
   Para agregar más fotos: importar la imagen y agregarla al array FOTOS.
   Para agregar más videos: agregar la ruta al array VIDEOS.
   Lightbox: clic en foto para ampliar.
   ========================================================================== */

import { useState } from "react";
import { X } from "lucide-react";
import vuelo1 from "@/assets/vuelo-1.jpg";
import vuelo2 from "@/assets/vuelo-2.jpg";
import vuelo3 from "@/assets/vuelo-3.jpg";
import vuelo4 from "@/assets/vuelo-4.jpg";
import vuelo5 from "@/assets/vuelo-5.jpg";
import vuelo6 from "@/assets/vuelo-6.jpg";
import vuelo7 from "@/assets/vuelo-7.jpg";
import vuelo8 from "@/assets/vuelo-8.jpg";
import vuelo9 from "@/assets/vuelo-9.jpg";
import vuelo10 from "@/assets/vuelo-10.jpg";

/* Fotos de la galería - agregar/quitar aquí */
const FOTOS = [
  { src: vuelo1, alt: "Vuelo biplaza parapente sobre Medellín con vista panorámica" },
  { src: vuelo2, alt: "Pasajera disfrutando vuelo parapente San Félix" },
  { src: vuelo7, alt: "Vista aérea represa desde parapente en Antioquia" },
  { src: vuelo3, alt: "Vista aérea Medellín desde parapente en San Félix" },
  { src: vuelo8, alt: "Dos parapentes volando sobre Medellín" },
  { src: vuelo4, alt: "Piloto y pasajera después de aterrizar en San Félix" },
  { src: vuelo10, alt: "Parapente sobre montañas verdes vía San Pedro" },
  { src: vuelo5, alt: "Vuelo parapente biplaza sobre montañas verdes de Antioquia" },
  { src: vuelo9, alt: "Piloto certificado y pasajera feliz tras aterrizar" },
  { src: vuelo6, alt: "Pareja volando en parapente sobre el Valle de Aburrá" },
];

/* Videos de la galería - formato vertical */
const VIDEOS = [
  { src: "/videos/video-1.mp4", titulo: "Vuelo 15min – Cascada y Páramo" },
  { src: "/videos/video-2.mp4", titulo: "Vuelo 20min – Valle de Piedra" },
  { src: "/videos/video-3.mp4", titulo: "Vuelo 30min – Experiencia completa" },
  { src: "/videos/video-4.mp4", titulo: "Vista aérea espectacular" },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" className="bg-light-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-12" style={{ color: "hsl(47, 89%, 50%)" }}>
          Mira lo que te espera
        </h2>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto mb-12">
          {FOTOS.map((foto, i) => (
            <button
              key={i}
              onClick={() => setLightbox(foto.src)}
              className="overflow-hidden rounded-xl aspect-square group cursor-pointer"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        {/* Videos verticales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {VIDEOS.map((video, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-card">
              <video
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <p className="text-center text-card-foreground/70 text-sm py-2 font-medium">{video.titulo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-foreground p-2 z-50"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Foto ampliada de vuelo parapente"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Galeria;
