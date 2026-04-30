import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-grandes.jpg";

const products = [
  { name: "Caja Premium Rosas Rojas", price: 38000, image: img, tag: "Bestseller" },
  { name: "Jarrón Cristal Lirios", price: 45000, image: img },
  { name: "Caja Acrílica Mixta", price: 32000, image: img },
  { name: "Jarrón Dorado Peonías", price: 52000, image: img, tag: "Nuevo" },
  { name: "Caja Sombrero Blanca", price: 36000, image: img },
  { name: "Jarrón Minimalista", price: 28000, image: img },
];

const CajasJarrones = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Cajas y Jarrones"
    description="Arreglos en cajas premium y jarrones de cristal. Una presentación elegante que perdura más allá del momento."
    heroImage={img}
    products={products}
  />
);

export default CajasJarrones;
