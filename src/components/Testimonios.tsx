import { Star } from "lucide-react";

const TESTIMONIOS = [
  {
    nombre: "Carolina Martínez",
    ciudad: "Bogotá",
    texto: "¡Me encantó la experiencia! Recomendado 100%. Andrés es un piloto muy profesional, me sentí segura en todo momento. Las fotos y videos quedaron increíbles. Sin duda lo volvería a hacer.",
    estrellas: 5,
    fecha: "Hace 2 semanas",
  },
  {
    nombre: "Juan David Restrepo",
    ciudad: "Medellín",
    texto: "Fue el mejor regalo de cumpleaños que me han dado. La vista del Valle de Aburrá desde arriba es impresionante, no hay palabras. El servicio de transporte súper puntual y cómodo.",
    estrellas: 5,
    fecha: "Hace 1 mes",
  },
  {
    nombre: "María Fernanda López",
    ciudad: "Cali",
    texto: "Tenía mucho miedo pero Andrés me dio toda la confianza. El vuelo de 30 minutos vale cada peso, se ve la represa, las montañas, todo. Ya les dije a mis amigos que tienen que venir.",
    estrellas: 5,
    fecha: "Hace 3 semanas",
  },
];

const Testimonios = () => {
  return (
    <section className="bg-dark-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl text-center text-primary mb-4 text-gold-glow">
          Lo que dicen nuestros pasajeros
        </h2>
        <p className="text-center text-foreground/60 mb-12 text-lg">+500 vuelos realizados con calificación perfecta</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIOS.map((t, i) => (
            <div
              key={i}
              className="bg-card/10 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 flex flex-col"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.estrellas }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-foreground/85 text-sm leading-relaxed mb-4 flex-1">"{t.texto}"</p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.nombre.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.nombre}</p>
                  <p className="text-foreground/50 text-xs">{t.ciudad} · {t.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
