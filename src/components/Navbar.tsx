import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">
          <span className="text-primary">AZ</span>
          <span className="text-foreground">Chat</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Recursos</a>
        <a href="#integracoes" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Integrações</a>
        <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Preços</a>
        <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Sobre nós</a>
      </div>
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
        Criar Conta
      </Button>
    </nav>
  );
};

export default Navbar;
