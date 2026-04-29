import PageLayout from "./PageLayout";
import ProductCard, { Product } from "./ProductCard";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
};

const CollectionPage = ({ eyebrow, title, description, heroImage, products }: Props) => (
  <PageLayout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <p className="text-xs tracking-[0.4em] uppercase text-primary">{eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            {title}
          </h1>
          <div className="w-16 h-px bg-primary" />
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">{description}</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl" />
          <img src={heroImage} alt={title} className="relative w-full aspect-[4/5] object-cover shadow-elegant" />
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="container py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  </PageLayout>
);

export default CollectionPage;
