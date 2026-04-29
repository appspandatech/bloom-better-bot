import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-boda.jpg";

const products = [
  { name: "Bouquet Eternidad", price: 85000, image: img, tag: "Premium" },
  { name: "Peonías y Eucalipto", price: 95000, image: img },
  { name: "Rosas Marfil", price: 78000, image: img },
  { name: "Cascada Romántica", price: 110000, image: img, tag: "Premium" },
  { name: "Jardín Boho", price: 88000, image: img },
  { name: "Clásico Nupcial", price: 80000, image: img },
];

const Boda = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nde Boda"}
    description="El día más importante merece flores que cuenten tu historia. Diseños hechos a medida, con consultoría personalizada para tu boda soñada."
    heroImage={img}
    products={products}
  />
);

export default Boda;
