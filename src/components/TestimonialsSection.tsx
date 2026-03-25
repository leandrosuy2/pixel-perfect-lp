import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glass";

const testimonials = [
  {
    name: "Ana",
    company: "La Vanesa",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    cta: "Visitar clínica",
  },
  {
    name: "Carlos",
    company: "Distribuidora Norte",
    text: "Centralizamos o atendimento em um só lugar e o time parou de perder mensagem. O AZ Chat virou peça-chave na operação do nosso time comercial.",
    cta: "Ver case",
  },
  {
    name: "Marina",
    company: "Studio Criativo",
    text: "Interface clara, integrações que funcionam e suporte que responde. Recomendamos o AZ Chat para qualquer empresa que leve comunicação a sério.",
    cta: "Saiba mais",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="sobre" className="relative py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-foreground md:text-3xl">
            Empresas que confiam e utilizam nossa ferramenta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(glassCard, "flex h-full flex-col p-6")}
            >
              <Quote className="mb-4 h-8 w-8 shrink-0 text-primary/70" aria-hidden />

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-primary/5 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-foreground">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-4 w-full rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                type="button"
              >
                {t.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
