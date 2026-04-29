import { Check, Crown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImg from "@/assets/hero-bouquet.jpg";

const benefits = [
  "15% de descuento en toda la tienda",
  "Acceso anticipado a colecciones nuevas",
  "Ramo de cumpleaños gratis cada año",
  "Envío gratuito en el GAM",
  "Invitaciones a eventos exclusivos",
  "Empaque premium en todos los pedidos",
];

const plans = [
  { name: "Mensual", price: "₡ 12 000", period: "/mes", popular: false },
  { name: "Anual", price: "₡ 120 000", period: "/año", popular: true, save: "Ahorra ₡24 000" },
];

const Suscripcion = () => (
  <PageLayout>
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

    <section className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-xs tracking-[0.4em] uppercase text-primary">Beneficios</p>
        <h2 className="font-serif text-5xl">Todo lo que <span className="italic text-gradient-gold">recibirás</span></h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b) => (
          <div key={b} className="flex items-start gap-4 p-6 bg-card shadow-soft">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              <Check size={16} />
            </div>
            <p className="text-foreground/90 pt-1">{b}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-gradient-cream py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-primary">Planes</p>
          <h2 className="font-serif text-5xl">Elige tu <span className="italic text-gradient-gold">membresía</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 bg-card shadow-soft hover-lift ${p.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] tracking-[0.3em] uppercase px-4 py-1">
                  Más popular
                </span>
              )}
              <h3 className="font-serif text-3xl mb-2">{p.name}</h3>
              {p.save && <p className="text-xs text-primary tracking-wider uppercase mb-4">{p.save}</p>}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-5xl text-primary">{p.price}</span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <button className={`w-full py-4 text-xs tracking-[0.3em] uppercase transition-colors ${
                p.popular ? 'bg-secondary text-secondary-foreground hover:bg-primary' : 'border border-foreground/30 hover:border-primary hover:text-primary'
              }`}>
                Suscribirme
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Suscripcion;
