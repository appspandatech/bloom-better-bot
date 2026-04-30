export type Categoria = "Ramos" | "Regalos" | "Perfumes";
export type SubCategoria = 
  | "Ramos Grandes" 
  | "Ramos pequeños" 
  | "Cajas y Jarrones" 
  | "Boda" 
  | "Dulces" 
  | "Peluches" 
  | "Hombres" 
  | "Mujeres";

export interface Producto {
  id: string;
  name: string;
  price: number;
  image: string;
  categoria: Categoria;
  subcategoria: SubCategoria;
  tag?: string;
  description?: string;
  hasCarousel?: boolean;
  images?: string[];
}

export const productos: Producto[] = [
  {
    "id": "prod-1",
    "name": "Box Red1",
    "price": 55000,
    "hasCarousel": true,
    "images": [
      "/productos/cajas/boxRed2.jpeg",
    ],
    "image": "/productos/cajas/boxRed1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Cajas y Jarrones",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-3",
    "name": "Jar1Gerbera1",
    "price": 55000,
    "hasCarousel": true,
    "images": [
      "/productos/cajas/jar1Gerbera2.jpeg",
    ],
    "image": "/productos/cajas/jar1Gerbera1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Cajas y Jarrones",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-5",
    "name": "Caja Ferrero Rocher150g",
    "price": 15000,
    "image": "/productos/dulces/CajaFerreroRocher150g.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-6",
    "name": "Caja Vizzio",
    "price": 15000,
    "image": "/productos/dulces/cajaVizzio.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-7",
    "name": "Choys Arroz",
    "price": 15000,
    "image": "/productos/dulces/choysArroz.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-8",
    "name": "Choys Mani",
    "price": 15000,
    "image": "/productos/dulces/choysMani.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-9",
    "name": "Ferrero Rocher3u",
    "price": 15000,
    "image": "/productos/dulces/ferreroRocher3u.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-10",
    "name": "Ferrero Rocher4u",
    "price": 15000,
    "image": "/productos/dulces/ferreroRocher4u.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-11",
    "name": "Ferrero Rocher8u",
    "price": 15000,
    "image": "/productos/dulces/ferreroRocher8u.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-12",
    "name": "Gomita Aro",
    "price": 15000,
    "image": "/productos/dulces/gomitaAro.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-13",
    "name": "Gomita Fresa",
    "price": 15000,
    "image": "/productos/dulces/gomitaFresa.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-14",
    "name": "Gusanos",
    "price": 15000,
    "image": "/productos/dulces/gusanos.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-15",
    "name": "Gusanos Acidos",
    "price": 15000,
    "image": "/productos/dulces/gusanosAcidos.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-16",
    "name": "Hersheys198g",
    "price": 15000,
    "image": "/productos/dulces/hersheys198g.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-17",
    "name": "Hersheys Almendra192g",
    "price": 15000,
    "image": "/productos/dulces/hersheysAlmendra192g.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-18",
    "name": "Hersheys Cn C184g",
    "price": 15000,
    "image": "/productos/dulces/hersheysCnC184g.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-19",
    "name": "Hersheys Cn C43g",
    "price": 15000,
    "image": "/productos/dulces/hersheysCnC43g.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-20",
    "name": "M&ms Amarillo92g",
    "price": 15000,
    "image": "/productos/dulces/m&msAmarillo92g.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-21",
    "name": "M&ms Cafe",
    "price": 15000,
    "image": "/productos/dulces/m&msCafe.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-22",
    "name": "M&ms Cafe92g",
    "price": 15000,
    "image": "/productos/dulces/m&msCafe92g.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-23",
    "name": "Mani Chocolate",
    "price": 15000,
    "image": "/productos/dulces/maniChocolate.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-24",
    "name": "Mani Garapinado",
    "price": 15000,
    "image": "/productos/dulces/maniGarapinado.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-25",
    "name": "Mani Japones",
    "price": 15000,
    "image": "/productos/dulces/maniJapones.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-26",
    "name": "Mani Limon Sal",
    "price": 15000,
    "image": "/productos/dulces/maniLimonSal.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-27",
    "name": "Mani Pasas",
    "price": 15000,
    "image": "/productos/dulces/maniPasas.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-28",
    "name": "Mani Salado",
    "price": 15000,
    "image": "/productos/dulces/maniSalado.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-29",
    "name": "Mani Semillas",
    "price": 15000,
    "image": "/productos/dulces/maniSemillas.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-30",
    "name": "Milka Arroz",
    "price": 15000,
    "image": "/productos/dulces/milkaArroz.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-31",
    "name": "Milka Blanco",
    "price": 15000,
    "image": "/productos/dulces/milkaBlanco.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-32",
    "name": "Milka Leche",
    "price": 15000,
    "image": "/productos/dulces/milkaLeche.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-33",
    "name": "Milka Oreo",
    "price": 15000,
    "image": "/productos/dulces/milkaOreo.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-34",
    "name": "Milky Way",
    "price": 15000,
    "image": "/productos/dulces/milkyWay.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-35",
    "name": "Pasas Chocolate",
    "price": 15000,
    "image": "/productos/dulces/pasasChocolate.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-36",
    "name": "Perlitas",
    "price": 15000,
    "image": "/productos/dulces/perlitas.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-37",
    "name": "Skittles Original",
    "price": 15000,
    "image": "/productos/dulces/skittlesOriginal.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-38",
    "name": "Skittles Wild",
    "price": 15000,
    "image": "/productos/dulces/skittlesWild.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-39",
    "name": "Snickers",
    "price": 15000,
    "image": "/productos/dulces/snickers.png",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-40",
    "name": "Snickers Almond",
    "price": 15000,
    "image": "/productos/dulces/snickersAlmond.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-41",
    "name": "Snickers Blanco",
    "price": 15000,
    "image": "/productos/dulces/snickersBlanco.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-42",
    "name": "Snickers Mani",
    "price": 15000,
    "image": "/productos/dulces/snickersMani.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-43",
    "name": "Snickers Peq",
    "price": 15000,
    "image": "/productos/dulces/snickersPeq.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-44",
    "name": "Tutto Arandano",
    "price": 15000,
    "image": "/productos/dulces/tuttoArandano.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-45",
    "name": "Tutto Blanco",
    "price": 15000,
    "image": "/productos/dulces/tuttoBlanco.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-46",
    "name": "Tutto Crocante",
    "price": 15000,
    "image": "/productos/dulces/tuttoCrocante.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-47",
    "name": "Tutto Mix",
    "price": 15000,
    "image": "/productos/dulces/tuttoMix.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-48",
    "name": "Tutto Sin Azucar",
    "price": 15000,
    "image": "/productos/dulces/tuttoSinAzucar.jpg",
    "categoria": "Regalos",
    "subcategoria": "Dulces",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-49",
    "name": "Amor1",
    "price": 30000,
    "image": "/productos/peluches/amor1.png",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-50",
    "name": "Amor2",
    "price": 30000,
    "image": "/productos/peluches/amor2.png",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-51",
    "name": "Angel",
    "price": 30000,
    "image": "/productos/peluches/angel.jpg",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-52",
    "name": "Chimuelo",
    "price": 30000,
    "image": "/productos/peluches/Chimuelo.jpeg",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-53",
    "name": "Snoopy",
    "price": 30000,
    "image": "/productos/peluches/snoopy.png",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-54",
    "name": "Stitch",
    "price": 30000,
    "image": "/productos/peluches/stitch.jpg",
    "categoria": "Regalos",
    "subcategoria": "Peluches",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-55",
    "name": "212Heroes1",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212Heroes1.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-56",
    "name": "212Heroes2",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212Heroes2.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-57",
    "name": "212Men",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212Men.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-58",
    "name": "212Sexy",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212Sexy.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-59",
    "name": "212Vip",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212Vip.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-60",
    "name": "212VIPBlack",
    "price": 60000,
    "image": "/productos/perfumes/caballero/212VIPBlack.png",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-61",
    "name": "Allure Sport",
    "price": 60000,
    "image": "/productos/perfumes/caballero/AllureSport.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-62",
    "name": "Bvlgari Terrae1",
    "price": 60000,
    "image": "/productos/perfumes/caballero/BvlgariTerrae1.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-63",
    "name": "Chanel Bleu",
    "price": 60000,
    "image": "/productos/perfumes/caballero/ChanelBleu.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-64",
    "name": "CHBad Boy",
    "price": 60000,
    "image": "/productos/perfumes/caballero/CHBadBoy.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-65",
    "name": "DGK",
    "price": 60000,
    "image": "/productos/perfumes/caballero/DGK.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-66",
    "name": "DGThe One Grey",
    "price": 60000,
    "image": "/productos/perfumes/caballero/DGTheOneGrey.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-67",
    "name": "Dior Sauvage",
    "price": 60000,
    "image": "/productos/perfumes/caballero/DiorSauvage.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-68",
    "name": "EDT",
    "price": 60000,
    "image": "/productos/perfumes/caballero/EDT.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-69",
    "name": "GCPour Homme",
    "price": 60000,
    "image": "/productos/perfumes/caballero/GCPourHomme.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-70",
    "name": "Moschino Toy Boy",
    "price": 60000,
    "image": "/productos/perfumes/caballero/MoschinoToyBoy.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-71",
    "name": "PR1Million",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PR1Million.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-72",
    "name": "PRInvictus",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PRInvictus.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-73",
    "name": "PRPhanton",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PRPhanton.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-74",
    "name": "PRPhanton Elixir",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PRPhantonElixir.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-75",
    "name": "Pure XS",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PureXS.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-76",
    "name": "Pure XSEdt",
    "price": 60000,
    "image": "/productos/perfumes/caballero/PureXSEdt.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-77",
    "name": "Versace Eros Flame",
    "price": 60000,
    "image": "/productos/perfumes/caballero/VersaceErosFlame.webp",
    "categoria": "Perfumes",
    "subcategoria": "Hombres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-78",
    "name": "AGCloud",
    "price": 60000,
    "image": "/productos/perfumes/dama/AGCloud.webp",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-79",
    "name": "CHCH1",
    "price": 60000,
    "image": "/productos/perfumes/dama/CHCH1.webp",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-80",
    "name": "DGLight Blue",
    "price": 60000,
    "image": "/productos/perfumes/dama/DGLightBlue.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-81",
    "name": "Lancome La Vie Est Belle",
    "price": 60000,
    "image": "/productos/perfumes/dama/LancomeLaVieEstBelle.webp",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-82",
    "name": "Moschino Funny",
    "price": 60000,
    "image": "/productos/perfumes/dama/MoschinoFunny.jpg",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-83",
    "name": "PRLady Million",
    "price": 60000,
    "image": "/productos/perfumes/dama/PRLadyMillion.webp",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-84",
    "name": "Versace Yellow Diamond",
    "price": 60000,
    "image": "/productos/perfumes/dama/VersaceYellowDiamond.webp",
    "categoria": "Perfumes",
    "subcategoria": "Mujeres",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-85",
    "name": "Bouquet1",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet1.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-86",
    "name": "Bouquet2",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet2.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-87",
    "name": "Bouquet3",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet3.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-88",
    "name": "Bouquet4",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet4.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-89",
    "name": "Bouquet5",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet5.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-90",
    "name": "Bouquet6",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet6.png",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-91",
    "name": "Bouquet7",
    "price": 50000,
    "image": "/productos/ramos/boda/bouquet7.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-92",
    "name": "Boutonniere1",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-93",
    "name": "Boutonniere2",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere2.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-94",
    "name": "Boutonniere3",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere3.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-95",
    "name": "Boutonniere4",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere4.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-96",
    "name": "Boutonniere5",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere5.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-97",
    "name": "Boutonniere6",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere6.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-98",
    "name": "Boutonniere7",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere7.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-99",
    "name": "Boutonniere8",
    "price": 50000,
    "image": "/productos/ramos/boda/Boutonniere8.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Boda",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-100",
    "name": "Ram12Big Prima1",
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ram12BigPrima2.jpg",
    ],
    "price": 45000,
    "image": "/productos/ramos/grandes/ram12BigPrima1.jpg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-103",
    "name": "Ram12Big Prima3",
    "price": 45000,
    "image": "/productos/ramos/grandes/ram12BigPrima3.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-104",
    "name": "Ram16Big Tuli1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ram16BigTuli2.png"
    ],
    "image": "/productos/ramos/grandes/ram16BigTuli1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-106",
    "name": "Ram6Med Prima1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ram6MedPrima2.jpeg"
    ],
    "image": "/productos/ramos/grandes/ram6MedPrima1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-108",
    "name": "Ram Big Marg1",
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramBigMarg2.jpeg",
      "/productos/ramos/grandes/ramBigMarg1.mp4"
    ],
    "price": 45000,
    "image": "/productos/ramos/grandes/ramBigMarg1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-110",
    "name": "Ram Big Primaveral1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramBigPrimaveral2.jpeg"
    ],
    "image": "/productos/ramos/grandes/ramBigPrimaveral1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-112",
    "name": "Ram Big Primaveral3",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramBigPrimaveral3.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-113",
    "name": "Ram Big Primaveral4",
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramBigPrimaveral5.jpeg",
      "/productos/ramos/grandes/ramBigPrimaveral6.jpeg",
    ],
    "price": 45000,
    "image": "/productos/ramos/grandes/ramBigPrimaveral4.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-116",
    "name": "Ram Big Primaveral7",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramBigPrimaveral8.jpeg",
    ],
    "image": "/productos/ramos/grandes/ramBigPrimaveral7.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-118",
    "name": "Ramo Clavel1",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoClavel1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-119",
    "name": "Ramo Gierbera1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/RamoGierbera2.png"
    ],
    "image": "/productos/ramos/grandes/RamoGierbera1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-121",
    "name": "Ramo Gierbera3",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/RamoGierbera4.png",
    ],
    "image": "/productos/ramos/grandes/RamoGierbera3.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },

  {
    "id": "prod-123",
    "name": "Ramo Girasol1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramoGirasol2.png",
    ],
    "image": "/productos/ramos/grandes/ramoGirasol1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-125",
    "name": "Ramo Pre3",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoPre3.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-126",
    "name": "Ramo Pre4",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoPre4.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-127",
    "name": "Ramo Pre5",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoPre5.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-128",
    "name": "Ramo Pre Roja1",
    "price": 45000,
    "hasCarousel": true,
    "images": [
      "/productos/ramos/grandes/ramoPreRoja2.png",
    ],
    "image": "/productos/ramos/grandes/ramoPreRoja1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-130",
    "name": "Ramo Pre Rosa1",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoPreRosa1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-131",
    "name": "Ramo Pre Rosa2",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoPreRosa2.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-132",
    "name": "Ramo Rojo Pre1",
    "price": 45000,
    "image": "/productos/ramos/grandes/ramoRojoPre1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-133",
    "name": "Ramo Rosado1",
    "price": 45000,
    "image": "/productos/ramos/grandes/RamoRosado1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-134",
    "name": "Ramo Rosado2",
    "price": 45000,
    "image": "/productos/ramos/grandes/RamoRosado2.jpg",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-135",
    "name": "Ram1Pe Gierbera1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-136",
    "name": "Ram1Pe Gierbera2",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera2.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-137",
    "name": "Ram1Pe Gierbera3",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera3.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-138",
    "name": "Ram1Pe Gierbera4",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera4.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-139",
    "name": "Ram1Pe Gierbera5",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera5.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-140",
    "name": "Ram1Pe Gierbera6",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeGierbera6.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-141",
    "name": "Ram1Pe Tuli1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram1PeTuli1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-142",
    "name": "Ram2Pe Gierbera1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram2PeGierbera1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-143",
    "name": "Ram2Pe Gierbera2",
    "price": 25000,
    "image": "/productos/ramos/peque/ram2PeGierbera2.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-144",
    "name": "Ram2Pe Gierbera3",
    "price": 25000,
    "image": "/productos/ramos/peque/ram2PeGierbera3.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-145",
    "name": "Ram2Peq Girasol Gierbera1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram2PeqGirasolGierbera1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-146",
    "name": "Ram2Peq Rosa1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram2PeqRosa1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-147",
    "name": "Ram3Girasol1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram3Girasol1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-148",
    "name": "Ram3Peq Girarsol Gierbera Rosa1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram3PeqGirarsolGierberaRosa1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-149",
    "name": "Ram3Peq Rosa Gierbera1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram3PeqRosaGierbera1.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-150",
    "name": "Ram4Pe Lirio Rosa Clavel1",
    "price": 25000,
    "image": "/productos/ramos/peque/ram4PeLirioRosaClavel1.jpeg",
    hasCarousel: true,
    images: [
      "/productos/ramos/peque/ram4PeLirioRosaClavel1.png",
      "/productos/ramos/peque/ram4PeLirioRosaClavel2.jpeg",
    ],
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-153",
    "name": "Ram Peq Girasol1",
    "price": 25000,
    "image": "/productos/ramos/peque/ramPeqGirasol1.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-154",
    "name": "Ram Peq Girasol2",
    "price": 25000,
    "image": "/productos/ramos/peque/ramPeqGirasol2.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-155",
    "name": "Ram Peq Girasol3",
    "price": 25000,
    "image": "/productos/ramos/peque/ramPeqGirasol3.jpeg",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-156",
    "name": "Uni Girasol4",
    "price": 25000,
    "image": "/productos/ramos/peque/uniGirasol4.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos pequeños",
    "description": "Hermoso detalle para regalar."
  },
  {
    "id": "prod-157",
    "name": "Ramo Pre2",
    "price": 45000,
    "image": "/productos/ramos/ramoPre2.png",
    "categoria": "Ramos",
    "subcategoria": "Ramos Grandes",
    "description": "Hermoso detalle para regalar."
  }
];
