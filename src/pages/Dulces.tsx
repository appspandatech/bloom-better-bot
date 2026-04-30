import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = [
  { name: "Caja Chocolates Belgas", price: 22000, image: img, tag: "Bestseller" },
  { name: "Set Macarons Surtidos", price: 18000, image: img },
  { name: "Box Trufas Premium", price: 25000, image: img },
  { name: "Bombones Artesanales", price: 20000, image: img, tag: "Nuevo" },
  { name: "Caja Dulces Gourmet", price: 28000, image: img },
  { name: "Mix Chocolatería Fina", price: 32000, image: img },
];

const Dulces = () => (
  <CollectionPage
    eyebrow="Regalos"
    title="Dulces"
    description="Selección de chocolatería fina y dulces gourmet. El complemento perfecto para acompañar tus flores."
    heroImage={img}
    products={products}
  />
);

export default Dulces;
