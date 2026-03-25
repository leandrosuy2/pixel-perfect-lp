import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 text-primary-foreground border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300",
        scrolled
          ? "border-primary-foreground/25 bg-primary/35 shadow-lg backdrop-blur-2xl backdrop-saturate-150"
          : "border-primary-foreground/15 bg-primary shadow-md",
      )}
    >
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="AZ Chat o Melhor Chat de A a Z"
          className="h-10 w-auto object-contain md:h-14"
        />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#recursos" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
          Recursos
        </a>
        <a href="#integracoes" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
          Integrações
        </a>
        <a href="#precos" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
          Preços
        </a>
        <a href="#sobre" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
          Sobre nós
        </a>
      </div>
      <Button className="rounded-full border border-primary-foreground/30 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6">
        Criar Conta
      </Button>
    </nav>
  );
};

export default Navbar;
