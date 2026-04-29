import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/grandes", label: "Ramos Grandes" },
  { to: "/pequenos", label: "Ramos Pequeños" },
  { to: "/boda", label: "Boda" },
  { to: "/regalos", label: "Regalos" },
  { to: "/perfumes", label: "Perfumes" },
  { to: "/suscripcion", label: "Miembro Golden" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(0, 6).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/suscripcion"
            className="text-xs tracking-[0.2em] uppercase border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Miembro Golden
          </Link>
          <button aria-label="Carrito" className="relative p-2 text-foreground hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base tracking-wide uppercase py-2 ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
