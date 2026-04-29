import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-grandes.jpg";

const products = [
  { name: "Primaveral Imperial", price: 45000, image: img, tag: "Bestseller" },
  { name: "Rosas del Edén", price: 52000, image: img },
  { name: "Lirios y Eucalipto", price: 48000, image: img },
  { name: "Bouquet Aurora", price: 55000, image: img, tag: "Nuevo" },
  { name: "Jardín Toscano", price: 58000, image: img },
  { name: "Crepúsculo Floral", price: 50000, image: img },
];

const Grandes = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nGrandes"}
    description="Composiciones generosas que llenan cualquier espacio de color y aroma. Perfectas para aniversarios, sorpresas y declaraciones inolvidables."
    heroImage={img}
    products={products}
  />
);

export default Grandes;
