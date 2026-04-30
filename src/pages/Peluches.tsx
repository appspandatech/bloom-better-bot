import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = [
  { name: "Oso Clásico Beige", price: 18000, image: img, tag: "Bestseller" },
  { name: "Conejito Suave", price: 15000, image: img },
  { name: "Oso Gigante Premium", price: 45000, image: img, tag: "Nuevo" },
  { name: "Peluche Corazón", price: 12000, image: img },
  { name: "Set Mini Peluches", price: 22000, image: img },
  { name: "Oso Aniversario", price: 28000, image: img },
];

const Peluches = () => (
  <CollectionPage
    eyebrow="Regalos"
    title="Peluches"
    description="Peluches suaves y entrañables, ideales para acompañar un ramo y multiplicar la sonrisa."
    heroImage={img}
    products={products}
  />
);

export default Peluches;
