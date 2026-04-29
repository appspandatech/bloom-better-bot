import { useState } from "react";
import { z } from "zod";
import { User, Package, Calendar } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const PROVINCIAS = [
  "San José",
  "Alajuela",
  "Cartago",
  "Heredia",
  "Guanacaste",
  "Puntarenas",
  "Limón",
];

const HORAS = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

// Número de WhatsApp del encargado de pedidos
const ORDER_WHATSAPP = "50689686661";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre requerido").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20),
  recibeNombre: z.string().trim().min(2, "Requerido").max(100),
  recibeTel: z.string().trim().min(8, "Teléfono inválido").max(20),
  provincia: z.string().min(1, "Selecciona una provincia"),
  canton: z.string().trim().min(2, "Cantón requerido").max(80),
  distrito: z.string().trim().min(2, "Distrito requerido").max(80),
  direccion: z.string().trim().min(5, "Dirección exacta requerida").max(400),
  fecha: z.string().min(1, "Fecha requerida"),
  hora: z.string().min(1, "Selecciona una hora"),
  mensaje: z.string().max(300).optional(),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  recibeNombre: "",
  recibeTel: "",
  provincia: "",
  canton: "",
  distrito: "",
  direccion: "",
  fecha: "",
  hora: "",
  mensaje: "",
};

const inputCls =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition";

const CheckoutForm = ({ onCancel }: { onCancel: () => void }) => {
  const { items, total, clear } = useCart();
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast({ title: "Tu carrito está vacío", variant: "destructive" });
      return;
    }
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormData;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      toast({ title: "Revisa los campos del formulario", variant: "destructive" });
      return;
    }
    setErrors({});
    setSubmitting(true);

    const d = result.data;
    const fmtCRC = (n: number) => `₡ ${n.toLocaleString("es-CR")}`;
    const lines: string[] = [];
    lines.push("*🌸 NUEVO PEDIDO — GOLDEN BLOOM*");
    lines.push("");
    lines.push("*👤 Solicitante*");
    lines.push(`Nombre: ${d.nombre}`);
    lines.push(`Correo: ${d.email}`);
    lines.push(`Teléfono: ${d.telefono}`);
    lines.push("");
    lines.push("*📦 Entrega*");
    lines.push(`Recibe: ${d.recibeNombre} (${d.recibeTel})`);
    lines.push(`Provincia: ${d.provincia}`);
    lines.push(`Cantón: ${d.canton}`);
    lines.push(`Distrito: ${d.distrito}`);
    lines.push(`Dirección: ${d.direccion}`);
    lines.push("");
    lines.push("*📅 Fecha y hora*");
    lines.push(`${d.fecha} · ${d.hora}`);
    lines.push("");
    lines.push("*🛒 Productos*");
    items.forEach((it) => {
      lines.push(`• ${it.name} x${it.quantity} — ${fmtCRC(it.price * it.quantity)}`);
    });
    lines.push("");
    lines.push(`*TOTAL: ${fmtCRC(total)}*`);
    if (d.mensaje && d.mensaje.trim().length > 0) {
      lines.push("");
      lines.push("*📝 Mensaje / notas*");
      lines.push(d.mensaje.trim());
    }

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${ORDER_WHATSAPP}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Pedido enviado por WhatsApp", description: "Te confirmaremos en breve." });
    clear();
    setData(initial);
    setSubmitting(false);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Solicitante */}
      <section className="space-y-3">
        <h3 className="flex items-center gap-2 font-serif text-xl">
          <User size={18} className="text-primary" /> Datos del solicitante
        </h3>
        <input
          className={inputCls}
          placeholder="Nombre completo"
          value={data.nombre}
          onChange={(e) => set("nombre", e.target.value)}
          maxLength={100}
        />
        {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
        <input
          className={inputCls}
          type="email"
          placeholder="Correo electrónico"
          value={data.email}
          onChange={(e) => set("email", e.target.value)}
          maxLength={255}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        <input
          className={inputCls}
          placeholder="Teléfono del solicitante"
          value={data.telefono}
          onChange={(e) => set("telefono", e.target.value)}
          maxLength={20}
        />
        {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
      </section>

      {/* Entrega */}
      <section className="space-y-3">
        <h3 className="flex items-center gap-2 font-serif text-xl">
          <Package size={18} className="text-primary" /> Datos de entrega
        </h3>
        <input
          className={inputCls}
          placeholder="Nombre de quien recibe"
          value={data.recibeNombre}
          onChange={(e) => set("recibeNombre", e.target.value)}
          maxLength={100}
        />
        {errors.recibeNombre && <p className="text-xs text-destructive">{errors.recibeNombre}</p>}
        <input
          className={inputCls}
          placeholder="Teléfono de quien recibe"
          value={data.recibeTel}
          onChange={(e) => set("recibeTel", e.target.value)}
          maxLength={20}
        />
        {errors.recibeTel && <p className="text-xs text-destructive">{errors.recibeTel}</p>}
        <select
          className={inputCls}
          value={data.provincia}
          onChange={(e) => set("provincia", e.target.value)}
        >
          <option value="">Provincia</option>
          {PROVINCIAS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.provincia && <p className="text-xs text-destructive">{errors.provincia}</p>}
        <input
          className={inputCls}
          placeholder="Cantón"
          value={data.canton}
          onChange={(e) => set("canton", e.target.value)}
          maxLength={80}
        />
        {errors.canton && <p className="text-xs text-destructive">{errors.canton}</p>}
        <input
          className={inputCls}
          placeholder="Distrito"
          value={data.distrito}
          onChange={(e) => set("distrito", e.target.value)}
          maxLength={80}
        />
        {errors.distrito && <p className="text-xs text-destructive">{errors.distrito}</p>}
        <textarea
          className={inputCls + " min-h-[80px] resize-y"}
          placeholder="Dirección exacta"
          value={data.direccion}
          onChange={(e) => set("direccion", e.target.value)}
          maxLength={400}
        />
        {errors.direccion && <p className="text-xs text-destructive">{errors.direccion}</p>}
      </section>

      {/* Fecha y hora */}
      <section className="space-y-3">
        <h3 className="flex items-center gap-2 font-serif text-xl">
          <Calendar size={18} className="text-primary" /> Fecha y hora
        </h3>
        <input
          className={inputCls}
          type="date"
          value={data.fecha}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => set("fecha", e.target.value)}
        />
        {errors.fecha && <p className="text-xs text-destructive">{errors.fecha}</p>}
        <select
          className={inputCls}
          value={data.hora}
          onChange={(e) => set("hora", e.target.value)}
        >
          <option value="">Seleccione una hora</option>
          {HORAS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        {errors.hora && <p className="text-xs text-destructive">{errors.hora}</p>}
        <textarea
          className={inputCls + " min-h-[70px] resize-y"}
          placeholder="Mensaje o tarjeta (opcional)"
          value={data.mensaje}
          onChange={(e) => set("mensaje", e.target.value)}
          maxLength={300}
        />
      </section>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-foreground/30 px-6 py-3 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
        >
          Volver
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex-[2] bg-primary text-primary-foreground px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {submitting ? "Enviando..." : "Generar pedido por WhatsApp"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
