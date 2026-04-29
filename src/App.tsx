import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Grandes from "./pages/Grandes.tsx";
import Pequenos from "./pages/Pequenos.tsx";
import Boda from "./pages/Boda.tsx";
import Regalos from "./pages/Regalos.tsx";
import Perfumes from "./pages/Perfumes.tsx";
import Suscripcion from "./pages/Suscripcion.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grandes" element={<Grandes />} />
          <Route path="/pequenos" element={<Pequenos />} />
          <Route path="/boda" element={<Boda />} />
          <Route path="/regalos" element={<Regalos />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/suscripcion" element={<Suscripcion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
