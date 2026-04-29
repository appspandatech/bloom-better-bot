import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CartDrawer from "./CartDrawer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
    <CartDrawer />
  </div>
);

export default PageLayout;
