import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative box-border flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-20 md:min-h-screen md:items-center md:px-12 md:pb-16 md:pt-24"
      aria-label="Apresentação"
    >
      <div className="relative z-10 w-full max-w-7xl md:container md:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <h1 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl">
            Otimize seu{" "}
            <span className="text-primary drop-shadow-[0_0_24px_hsl(var(--primary)/0.35)]">Atendimento</span>{" "}
            e a{" "}
            <span className="text-primary drop-shadow-[0_0_24px_hsl(var(--primary)/0.35)]">Comunicação</span>{" "}
            da sua Equipe
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base font-medium leading-relaxed text-foreground/85 sm:text-lg md:mx-0 md:mt-6 md:text-xl">
            Plataforma completa para multiatendimento e controle de processos em equipe
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mt-10 md:justify-start">
            <Button
              size="lg"
              className="w-full bg-primary text-lg font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:min-w-[200px] sm:px-8"
            >
              Comece Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-foreground/40 text-lg font-semibold text-foreground hover:bg-foreground/10 sm:w-auto sm:min-w-[200px] sm:px-8"
            >
              Ver Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
