import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default PageLayout;
