import { useState } from "react";
import { z } from "zod";
import { Crown, User, Gift } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImg from "@/assets/hero-bouquet.jpg";
import { toast } from "@/hooks/use-toast";

const ORDER_WHATSAPP = "50689686661";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre requerido").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20),
  referido: z.string().trim().max(60).optional(),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = { nombre: "", email: "", telefono: "", referido: "" };

const inputCls =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition";

const Suscripcion = () => {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    const lines: string[] = [];
    lines.push("*🌸 NUEVA SUSCRIPCIÓN — GOLDEN BLOOM*");
    lines.push("");
    lines.push("*👤 Datos del suscriptor*");
    lines.push(`Nombre: ${d.nombre}`);
    lines.push(`Correo: ${d.email}`);
    lines.push(`Teléfono: ${d.telefono}`);
    if (d.referido && d.referido.trim().length > 0) {
      lines.push("");
      lines.push("*🎁 Código referido*");
      lines.push(d.referido.trim());
    }
    lines.push("");
    lines.push("Solicito unirme al *Plan de Lealtad / Referidos Golden Bloom*.");

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${ORDER_WHATSAPP}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Suscripción enviada por WhatsApp", description: "Te contactaremos pronto." });
    setData(initial);
    setSubmitting(false);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-primary">
              <Crown size={14} /> Club exclusivo
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Miembro <br />
              <span className="italic text-gradient-gold">Golden Bloom</span>
            </h1>
            <div className="w-16 h-px bg-primary" />
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Únete al círculo de nuestros clientes más queridos. Beneficios únicos,
              atenciones especiales y un mundo de flores diseñado solo para ti.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl" />
            <img src={heroImg} alt="Membresía Golden Bloom" className="relative w-full aspect-[4/5] object-cover shadow-elegant" />
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-primary">Beneficios</p>
          <h2 className="font-serif text-5xl">
            Nuestros <span className="italic text-gradient-gold">planes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan lealtad */}
          <article className="p-10 bg-card shadow-soft hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Crown size={18} />
              </div>
              <h3 className="font-serif text-3xl">Plan lealtad Golden Bloom</h3>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Obtienes</p>
            <ul className="space-y-3 text-foreground/90 leading-relaxed">
              <li>• 10% de descuento en tu primera compra.</li>
              <li>• Después de tu quinta compra recibe 2 envíos gratis.</li>
              <li>• En tu décima compra recibe un 10% de descuento de la suma de tus 10 compras anteriores.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-6 italic">
              Nota: Deben aplicarse en el periodo 1 ene 2026 al 31 dic 2026.
            </p>
          </article>

          {/* Plan referidos */}
          <article className="p-10 bg-card shadow-soft hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Gift size={18} />
              </div>
              <h3 className="font-serif text-3xl">Plan de referidos</h3>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Obtienes</p>
            <ul className="space-y-3 text-foreground/90 leading-relaxed">
              <li>• ₡3 000 aplicables en toda la tienda, después de la primera compra de tu referido.</li>
              <li className="font-semibold">• Compra mínima de tu referido de ₡20 000.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-6 italic">
              Nota: Deben aplicarse en el periodo 1 ene 2026 al 31 dic 2026.
            </p>
          </article>
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-gradient-cream py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-primary">Suscríbete</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Únete a <span className="italic text-gradient-gold">Golden Bloom</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 shadow-soft space-y-8">
            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-serif text-xl">
                <User size={18} className="text-primary" /> Datos del suscriptor
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
                placeholder="Teléfono"
                value={data.telefono}
                onChange={(e) => set("telefono", e.target.value)}
                maxLength={20}
              />
              {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
            </section>

            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-serif text-xl">
                <Gift size={18} className="text-primary" /> Código referido
              </h3>
              <input
                className={inputCls}
                placeholder="Código de quien te comentó acerca de Golden Bloom"
                value={data.referido}
                onChange={(e) => set("referido", e.target.value)}
                maxLength={60}
              />
            </section>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground px-10 py-3 text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Suscribirse"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default Suscripcion;
