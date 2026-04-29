import { Link } from "react-router-dom";

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-3 group">
    <svg width="38" height="38" viewBox="0 0 40 40" fill="none" className="transition-transform group-hover:rotate-12">
      <circle cx="20" cy="20" r="19" stroke="hsl(var(--gold))" strokeWidth="1" />
      <path d="M20 8 C16 14, 16 18, 20 22 C24 18, 24 14, 20 8 Z" fill="hsl(var(--gold))" opacity="0.9"/>
      <path d="M8 20 C14 16, 18 16, 22 20 C18 24, 14 24, 8 20 Z" fill="hsl(var(--gold-light))" opacity="0.85"/>
      <path d="M32 20 C26 16, 22 16, 18 20 C22 24, 26 24, 32 20 Z" fill="hsl(var(--gold-light))" opacity="0.85"/>
      <path d="M20 32 C16 26, 16 22, 20 18 C24 22, 24 26, 20 32 Z" fill="hsl(var(--gold))" opacity="0.9"/>
      <circle cx="20" cy="20" r="3" fill="hsl(var(--gold-dark))" />
    </svg>
    <div className="flex flex-col leading-tight">
      <span className={`font-serif text-2xl tracking-wide ${light ? 'text-cream' : 'text-foreground'}`}>
        Golden <span className="text-gradient-gold italic">Bloom</span>
      </span>
      <span className={`text-[10px] tracking-[0.3em] uppercase ${light ? 'text-cream/70' : 'text-muted-foreground'}`}>
        Floristería · Costa Rica
      </span>
    </div>
  </Link>
);

export default Logo;
