import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-pequenos.jpg";

const products = [
  { name: "Mini Girasoles", price: 18000, image: img, tag: "Bestseller" },
  { name: "Margaritas Blancas", price: 15000, image: img },
  { name: "Rosas Mini", price: 20000, image: img },
  { name: "Tulipán 6 unid.", price: 16000, image: img },
  { name: "Lavanda y Eucalipto", price: 17000, image: img, tag: "Nuevo" },
  { name: "Detalle Primavera", price: 14000, image: img },
];

const Pequenos = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nPequeños"}
    description="Detalles delicados llenos de personalidad. Pequeños gestos que dicen mucho, ideales para sorprender en cualquier momento del día."
    heroImage={img}
    products={products}
  />
);

export default Pequenos;
