import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-perfumes.jpg";

const products = [
  { name: "Noir Intense 100ml", price: 48000, image: img, tag: "Bestseller" },
  { name: "Cedro Imperial 75ml", price: 42000, image: img },
  { name: "Bourbon Oud 50ml", price: 55000, image: img, tag: "Nuevo" },
  { name: "Aqua Marina 100ml", price: 38000, image: img },
  { name: "Tobacco Vanille 75ml", price: 52000, image: img },
  { name: "Sport Fresh 100ml", price: 35000, image: img },
];

const PerfumesHombre = () => (
  <CollectionPage
    eyebrow="Perfumes"
    title="Hombres"
    description="Fragancias masculinas con carácter. Notas amaderadas, especiadas y frescas para cada ocasión."
    heroImage={img}
    products={products}
  />
);

export default PerfumesHombre;
