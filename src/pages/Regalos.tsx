import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = [
  { name: "Caja Sorpresa Golden", price: 35000, image: img, tag: "Bestseller" },
  { name: "Set Chocolates & Rosa", price: 28000, image: img },
  { name: "Box Spa Relax", price: 42000, image: img },
  { name: "Vela Aromática Premium", price: 22000, image: img },
  { name: "Detalle Dulce", price: 18000, image: img, tag: "Nuevo" },
  { name: "Gift Box Aniversario", price: 48000, image: img },
];

const Regalos = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Regalos"
    description="Cajas de regalo curadas con detalles únicos. Combina flores, dulces, velas y más para crear el obsequio perfecto."
    heroImage={img}
    products={products}
  />
);

export default Regalos;
