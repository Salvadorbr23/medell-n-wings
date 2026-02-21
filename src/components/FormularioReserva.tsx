/* ==========================================================================
   FORMULARIO DE RESERVA - Envía datos prellenados a WhatsApp
   
   Campos: nombre, whatsapp, correo, personas, paquete, transporte, fecha, comentarios, términos.
   
   Al enviar: abre WhatsApp con mensaje prellenado con todos los datos.
   
   Para conectar a backend/email como respaldo: 
   agregar fetch() al endpoint deseado en la función handleSubmit antes de abrir WhatsApp.
   
   Para cambiar número WhatsApp: buscar "573169453767".
   ========================================================================== */

import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";

/* Opciones de paquetes - sincronizar con la sección de Experiencias */
const PAQUETE_OPTIONS = [
  { value: "15min", label: "15 min – $270.000 (Cascada + Páramo)" },
  { value: "20min", label: "20 min – $340.000 (Cascada + Páramo + Valle)" },
  { value: "30min", label: "30 min – $490.000 (Experiencia completa)" },
];

const FormularioReserva = () => {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    documento: "",
    correo: "",
    personas: "1",
    paquete: "15min",
    transporte: false,
    fecha: "",
    comentarios: "",
    terminos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* Validar campos requeridos */
    if (!form.nombre.trim() || !form.whatsapp.trim() || !form.documento.trim() || !form.terminos) return;

    /* Construir mensaje WhatsApp prellenado */
    const paqueteLabel = PAQUETE_OPTIONS.find((p) => p.value === form.paquete)?.label || form.paquete;
    const mensaje = [
      "Hola First Class Parapente, nueva reserva:",
      `Nombre: ${form.nombre.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Documento: ${form.documento.trim()}`,
      form.correo ? `Correo: ${form.correo.trim()}` : "",
      `Personas: ${form.personas}`,
      `Paquete: ${paqueteLabel}`,
      `Transporte: ${form.transporte ? "Sí ($130k)" : "No"}`,
      form.fecha ? `Fecha: ${form.fecha}` : "",
      form.comentarios ? `Comentarios: ${form.comentarios.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/573169453767?text=${encodeURIComponent(mensaje)}`;

    setEnviado(true);

    /* Abrir WhatsApp con mensaje prellenado */
    window.open(url, "_blank");

    /* TODO: Para respaldo por email, agregar fetch() aquí:
       fetch('/api/reserva', { method: 'POST', body: JSON.stringify(form) })
    */
  };

  return (
    <section id="contacto" className="bg-light-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-12" style={{ color: "hsl(47, 89%, 50%)" }}>
          Reserva tu vuelo ahora
        </h2>

        {enviado ? (
          /* Mensaje de éxito */
          <div className="max-w-md mx-auto text-center py-12">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "hsl(145, 56%, 40%)" }} />
            <h3 className="font-display text-2xl text-card-foreground mb-2">¡Reserva enviada!</h3>
            <p className="text-card-foreground/60">Te contactamos en minutos para confirmar tu aventura.</p>
            <button
              onClick={() => setEnviado(false)}
              className="mt-6 text-sm underline text-card-foreground/50"
            >
              Enviar otra reserva
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
            {/* Nombre completo */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                required
                maxLength={100}
                value={form.nombre}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Tu nombre"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">WhatsApp *</label>
              <input
                type="tel"
                name="whatsapp"
                required
                maxLength={20}
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="+57 300 123 4567"
              />
            </div>

            {/* Cédula o Pasaporte */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">Cédula o Pasaporte *</label>
              <input
                type="text"
                name="documento"
                required
                maxLength={30}
                value={form.documento}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Número de cédula o pasaporte"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">Correo (opcional)</label>
              <input
                type="email"
                name="correo"
                maxLength={255}
                value={form.correo}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                placeholder="tu@correo.com"
              />
            </div>

            {/* Personas y Paquete en fila */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-card-foreground font-semibold text-sm mb-1">Personas</label>
                <select
                  name="personas"
                  value={form.personas}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div>
                <label className="block text-card-foreground font-semibold text-sm mb-1">Paquete</label>
                <select
                  name="paquete"
                  value={form.paquete}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                >
                  {PAQUETE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transporte */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="transporte"
                checked={form.transporte}
                onChange={handleChange}
                className="w-5 h-5 rounded border-card-foreground/30 accent-primary"
              />
              <span className="text-card-foreground text-sm">¿Necesitas transporte? (+$130.000)</span>
            </label>

            {/* Fecha */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">Fecha preferida</label>
              <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Comentarios */}
            <div>
              <label className="block text-card-foreground font-semibold text-sm mb-1">Comentarios</label>
              <textarea
                name="comentarios"
                maxLength={1000}
                rows={3}
                value={form.comentarios}
                onChange={handleChange}
                className="w-full rounded-lg border border-card-foreground/20 bg-card text-card-foreground px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="Ej: Hotel donde recogernos, horarios disponibles"
              />
            </div>

            {/* Términos */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="terminos"
                required
                checked={form.terminos}
                onChange={handleChange}
                className="w-5 h-5 rounded border-card-foreground/30 accent-primary mt-0.5"
              />
              <span className="text-card-foreground/70 text-sm">Acepto los términos y condiciones *</span>
            </label>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-lg text-lg hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5" />
              Enviar reserva por WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormularioReserva;
