import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre nós" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-4 py-3 text-primary-foreground transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 md:px-12 md:py-4",
        scrolled
          ? "border-primary-foreground/25 bg-primary/35 shadow-lg backdrop-blur-2xl backdrop-saturate-150"
          : "border-primary-foreground/15 bg-primary shadow-md",
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-none">
        <img
          src="/logo.png"
          alt="AZ Chat o Melhor Chat de A a Z"
          className="h-9 w-auto object-contain md:h-12"
        />
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-2 md:gap-3">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/15 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="z-[100] w-[min(100vw-2rem,20rem)] border-l border-border/80 bg-background/95 backdrop-blur-xl"
          >
            <SheetHeader className="text-left">
              <SheetTitle className="text-foreground">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Button className="rounded-full border border-primary-foreground/30 bg-primary-foreground px-3 text-xs text-primary hover:bg-primary-foreground/90 md:px-6 md:text-sm">
          Criar Conta
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
