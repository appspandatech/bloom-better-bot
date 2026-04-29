import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-perfumes.jpg";

const products = [
  { name: "Aura Dorada 50ml", price: 38000, image: img, tag: "Bestseller" },
  { name: "Jardín Secreto 75ml", price: 45000, image: img },
  { name: "Pétalos de Rosa 30ml", price: 28000, image: img },
  { name: "Magnolia Imperial 50ml", price: 42000, image: img, tag: "Nuevo" },
  { name: "Noche de Jazmín 100ml", price: 55000, image: img },
  { name: "Bloom Eau Fraîche", price: 32000, image: img },
];

const Perfumes = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Perfumes"
    description="Fragancias inspiradas en nuestras flores favoritas. Elegancia embotellada para acompañarte cada día."
    heroImage={img}
    products={products}
  />
);

export default Perfumes;
