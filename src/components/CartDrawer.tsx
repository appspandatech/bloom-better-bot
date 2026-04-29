import { useState, useEffect } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "./CheckoutForm";

const CartDrawer = () => {
  const { items, total, isOpen, closeCart, updateQty, removeItem } = useCart();
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if (!isOpen) setCheckout(false);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const fmtCRC = (n: number) => `₡ ${n.toLocaleString("es-CR")}`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-secondary/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[460px] bg-background shadow-elegant transition-transform duration-500 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl">
            {checkout ? "Finalizar pedido" : "Tu carrito"}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-primary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X size={22} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-muted-foreground">
              <ShoppingBag size={42} className="text-primary/60" strokeWidth={1.2} />
              <p className="font-serif text-xl text-foreground">Tu carrito está vacío</p>
              <p className="text-sm">Descubre nuestras colecciones y agrega tus favoritos.</p>
            </div>
          ) : checkout ? (
            <CheckoutForm onCancel={() => setCheckout(false)} />
          ) : (
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-20 h-24 object-cover shadow-soft shrink-0"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-lg leading-tight">{it.name}</p>
                        <p className="text-primary text-sm mt-1">{fmtCRC(it.price)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        aria-label={`Eliminar ${it.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQty(it.id, it.quantity - 1)}
                          className="p-2 hover:text-primary transition-colors"
                          aria-label="Disminuir"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{it.quantity}</span>
                        <button
                          onClick={() => updateQty(it.id, it.quantity + 1)}
                          className="p-2 hover:text-primary transition-colors"
                          aria-label="Aumentar"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {fmtCRC(it.price * it.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && !checkout && (
          <footer className="border-t border-border px-6 py-5 space-y-4 bg-card">
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-primary">{fmtCRC(total)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Envío y descuentos se confirman al procesar el pedido.
            </p>
            <button
              onClick={() => setCheckout(true)}
              className="w-full bg-secondary text-secondary-foreground px-6 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Proceder al pedido
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
