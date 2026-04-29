import { Link } from "react-router-dom";
import { ArrowRight, Truck, Heart, Sparkles, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useCart } from "@/context/CartContext";
import heroImg from "@/assets/hero-bouquet.jpg";
import grandesImg from "@/assets/collection-grandes.jpg";
import pequenosImg from "@/assets/collection-pequenos.jpg";
import bodaImg from "@/assets/collection-boda.jpg";
import regalosImg from "@/assets/collection-regalos.jpg";
import perfumesImg from "@/assets/collection-perfumes.jpg";
import ramoMesImg from "@/assets/ramo-mes.jpg";

const collections = [
  { to: "/grandes", label: "Ramos Grandes", img: grandesImg, desc: "Para los gestos inolvidables" },
  { to: "/pequenos", label: "Ramos Pequeños", img: pequenosImg, desc: "Detalles que enamoran" },
  { to: "/boda", label: "Boda", img: bodaImg, desc: "El día más especial" },
  { to: "/regalos", label: "Regalos", img: regalosImg, desc: "Sorprende con elegancia" },
  { to: "/perfumes", label: "Perfumes", img: perfumesImg, desc: "Fragancias que cautivan" },
];

const testimonials = [
  { name: "María C.", text: "Excelente atención y un empaque de lujo. ¡Definitivamente repetiré la experiencia!", role: "Cliente desde 2023" },
  { name: "Carlos M.", text: "Las flores llegaron perfectas y a tiempo. Mi esposa quedó completamente encantada.", role: "Aniversario" },
  { name: "Ana R.", text: "Un detalle que impresionó totalmente. La calidad y el arte de Golden Bloom es incomparable.", role: "Cumpleaños" },
];

const Index = () => {
  const { addItem } = useCart();
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--gold-light)) 0%, transparent 50%)'
        }} />
        <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 animate-fade-up">
            <p className="flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-primary">
              <span className="gold-line" /> Floristería Boutique · CR
            </p>
            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.95] text-foreground">
              Flores que <br />
              <span className="italic text-gradient-gold">iluminan</span> <br />
              emociones.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Piezas únicas confeccionadas a mano para hacer de cada momento
              una memoria inolvidable.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/grandes"
                className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary transition-colors"
              >
                Explorar Colección
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/suscripcion"
                className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
              >
                Miembro Golden
              </Link>
            </div>
            <div className="flex gap-8 pt-6 border-t border-border max-w-md">
              <div>
                <p className="font-serif text-3xl text-primary">500+</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Clientes felices</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-primary">12</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Años de arte</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-primary">100%</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Hecho a mano</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <img
                src={heroImg}
                alt="Ramo de rosas blancas con lazo dorado"
                width={1080}
                height={1350}
                className="w-full h-full object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-soft max-w-[200px] hidden md:block">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Nuevo</p>
                <p className="font-serif text-lg leading-tight">Colección Primaveral 2026</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-24 h-24 rounded-full flex flex-col items-center justify-center text-center hidden md:flex">
                <Sparkles size={16} />
                <p className="text-[9px] tracking-widest uppercase mt-1 leading-tight">Hecho<br/>a mano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {[
            { icon: Truck, title: "Envío en el día", desc: "Gran Área Metropolitana" },
            { icon: Heart, title: "Hecho a mano", desc: "Cada arreglo es único" },
            { icon: Award, title: "Flores premium", desc: "Frescura garantizada" },
            { icon: Sparkles, title: "Empaque de lujo", desc: "Listo para regalar" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="text-primary shrink-0" size={28} strokeWidth={1.2} />
              <div>
                <p className="font-serif text-lg leading-tight">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RAMO DEL MES */}
      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={ramoMesImg}
              alt="Ramo Tulipán del mes"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-soft"
            />
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-[10px] tracking-[0.3em] uppercase">
              Edición limitada
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-xs tracking-[0.4em] uppercase text-primary">Ramo del mes · Abril</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Tulipán <span className="italic text-gradient-gold">20 unidades</span>
            </h2>
            <div className="w-16 h-px bg-primary" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Veinte tulipanes frescos en tonos cálidos de rojo, naranja y amarillo,
              envueltos en papel kraft con lazo dorado. Una explosión de primavera
              hecha para conmover.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Precio</span>
              <span className="font-serif text-4xl text-primary">₡ 30 000</span>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() =>
                  addItem({
                    id: "ramo-mes-tulipan-abril",
                    name: "Tulipán 20 unidades — Ramo del Mes",
                    price: 30000,
                    image: ramoMesImg,
                  })
                }
                className="bg-secondary text-secondary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary transition-colors"
              >
                Agregar al carrito
              </button>
              <a
                href="https://wa.me/50689686661"
                className="border border-foreground/30 px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COLECCIONES */}
      <section className="bg-gradient-cream py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-primary">Nuestro arte</p>
            <h2 className="font-serif text-5xl md:text-6xl">
              Colecciones <span className="italic text-gradient-gold">curadas</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada fecha merece ser celebrada. Descubre nuestras colecciones diseñadas
              para acompañar los momentos que importan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.slice(0, 3).map((c, i) => (
              <Link key={c.to} to={c.to} className={`group relative overflow-hidden hover-lift ${i === 0 ? 'lg:row-span-2 lg:aspect-auto' : ''}`}>
                <div className={`relative ${i === 0 ? 'aspect-[3/4] lg:h-full' : 'aspect-[4/5]'}`}>
                  <img src={c.img} alt={c.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8 text-secondary-foreground">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light mb-2">{c.desc}</p>
                    <h3 className="font-serif text-3xl mb-3">{c.label}</h3>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-gold-light pb-1 group-hover:gap-4 transition-all">
                      Ver colección <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            {collections.slice(3).map((c) => (
              <Link key={c.to} to={c.to} className="group relative overflow-hidden hover-lift">
                <div className="relative aspect-[4/5]">
                  <img src={c.img} alt={c.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8 text-secondary-foreground">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light mb-2">{c.desc}</p>
                    <h3 className="font-serif text-3xl mb-3">{c.label}</h3>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-gold-light pb-1 group-hover:gap-4 transition-all">
                      Ver colección <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="container py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-primary">Testimonios</p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Historias que <span className="italic text-gradient-gold">florecen</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card p-10 shadow-soft hover-lift">
              <div className="text-primary text-5xl font-serif leading-none mb-4">"</div>
              <blockquote className="text-foreground/80 italic font-serif text-xl leading-relaxed mb-6">
                {t.text}
              </blockquote>
              <figcaption>
                <p className="font-serif text-lg">{t.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MEMBRESIA CTA */}
      <section className="relative bg-secondary text-secondary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 40%)'
        }} />
        <div className="container relative text-center max-w-2xl mx-auto space-y-6">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-light">Club exclusivo</p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Miembro <span className="italic text-gold-light">Golden Bloom</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            Recibe ofertas exclusivas, acceso anticipado a nuevas colecciones
            y un detalle floral en tu cumpleaños.
          </p>
          <Link
            to="/suscripcion"
            className="inline-flex items-center gap-3 bg-gold text-secondary px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors mt-4"
          >
            Conocer más <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
