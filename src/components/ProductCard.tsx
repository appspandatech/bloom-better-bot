import { ShoppingBag } from "lucide-react";

export type Product = {
  name: string;
  price: number;
  image: string;
  tag?: string;
};

const ProductCard = ({ product }: { product: Product }) => (
  <article className="group cursor-pointer">
    <div className="relative overflow-hidden bg-muted aspect-[4/5] mb-4">
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1">
          {product.tag}
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-500" />
      <button className="absolute bottom-0 inset-x-0 bg-secondary text-secondary-foreground py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase">
        <ShoppingBag size={14} /> Agregar
      </button>
    </div>
    <div className="text-center space-y-1">
      <h3 className="font-serif text-xl text-foreground">{product.name}</h3>
      <p className="text-primary font-medium tracking-wide">₡ {product.price.toLocaleString()}</p>
    </div>
  </article>
);

export default ProductCard;
