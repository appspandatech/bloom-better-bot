import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export type Product = {
  name: string;
  price: number;
  image: string;
  tag?: string;
  id?: string;
  hasCarousel?: boolean;
  images?: string[];
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const id = product.id ?? slug(product.name);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = product.hasCarousel && product.images && product.images.length > 0
    ? [product.image, ...product.images]
    : [product.image];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name: product.name, price: product.price, image: product.image });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden bg-muted aspect-[4/5] mb-4">
        {product.tag && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {product.tag}
          </span>
        )}
        
        {displayImages.map((media, idx) => {
          const isVideo = media.toLowerCase().endsWith('.mp4') || media.toLowerCase().endsWith('.mov');
          const className = `absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            idx === currentImageIndex ? "opacity-100 group-hover:scale-105" : "opacity-0"
          }`;
          
          return isVideo ? (
            <video
              key={idx}
              src={media}
              autoPlay
              muted
              loop
              playsInline
              className={className}
            />
          ) : (
            <img
              key={idx}
              src={media}
              alt={`${product.name} - ${idx + 1}`}
              loading="lazy"
              className={className}
            />
          );
        })}

        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 text-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-20"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 text-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-20"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-16 inset-x-0 flex justify-center gap-1.5 z-20">
              {displayImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    idx === currentImageIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500 z-10 pointer-events-none" />
        <button
          onClick={handleAdd}
          className="absolute bottom-0 inset-x-0 bg-secondary text-secondary-foreground py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase hover:bg-primary z-20"
        >
          <ShoppingBag size={14} /> Agregar
        </button>
      </div>
      <div className="text-center space-y-1">
        <h3 className="font-serif text-xl text-foreground">{product.name}</h3>
        <p className="text-primary font-medium tracking-wide">₡ {product.price.toLocaleString()}</p>
      </div>
    </article>
  );
};

export default ProductCard;
