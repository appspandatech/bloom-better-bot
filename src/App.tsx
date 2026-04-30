import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index.tsx";
import Grandes from "./pages/Grandes.tsx";
import Pequenos from "./pages/Pequenos.tsx";
import CajasJarrones from "./pages/CajasJarrones.tsx";
import Boda from "./pages/Boda.tsx";
import Regalos from "./pages/Regalos.tsx";
import Dulces from "./pages/Dulces.tsx";
import Peluches from "./pages/Peluches.tsx";
import Perfumes from "./pages/Perfumes.tsx";
import PerfumesHombre from "./pages/PerfumesHombre.tsx";
import PerfumesMujer from "./pages/PerfumesMujer.tsx";
import Suscripcion from "./pages/Suscripcion.tsx";
import NotFound from "./pages/NotFound.tsx";
import Productos from "./pages/Productos.tsx";
import Categoria from "./pages/Categoria.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/categoria/:subcategoria" element={<Categoria />} />
            <Route path="/grandes" element={<Grandes />} />
            <Route path="/pequenos" element={<Pequenos />} />
            <Route path="/cajas-jarrones" element={<CajasJarrones />} />
            <Route path="/boda" element={<Boda />} />
            <Route path="/regalos" element={<Regalos />} />
            <Route path="/regalos/dulces" element={<Dulces />} />
            <Route path="/regalos/peluches" element={<Peluches />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/perfumes/hombres" element={<PerfumesHombre />} />
            <Route path="/perfumes/mujeres" element={<PerfumesMujer />} />
            <Route path="/suscripcion" element={<Suscripcion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
