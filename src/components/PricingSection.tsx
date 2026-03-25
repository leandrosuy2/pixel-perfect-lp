import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { glassCard, glassPricingPopular } from "@/lib/glass";

const plans = [
  {
    name: "MENSAL",
    price: "200",
    period: "mês",
    billing: "Cobrança mensal",
    description: "Ideal para quem quer testar a ferramenta no seu dia a dia",
    highlight: "SEM FIDELIDADE. CANCELE QUANDO QUISER",
    popular: false,
  },
  {
    name: "TRIMESTRAL",
    price: "180",
    period: "mês",
    billing: "Cobrança mensal",
    description: "Ideal para quem já entendeu que o AZ CHAT é indispensável",
    highlight: "ECONOMIZE 10% COMPARADO AO PLANO MENSAL",
    popular: false,
  },
  {
    name: "ANUAL",
    price: "150",
    period: "mês",
    billing: "Cobrança mensal",
    description: "Melhor custo-benefício para escalar com o time",
    highlight: "2 meses grátis + atendimento prioritário",
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
        >
          Escolha O Plano Ideal Para Sua Equipe
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 pt-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={cn(
                "relative flex flex-col items-center p-8",
                plan.popular ? glassPricingPopular() : glassCard,
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-md ring-2 ring-background">
                  MAIS POPULAR
                </span>
              )}
              <h3 className="text-lg font-bold text-muted-foreground tracking-widest mb-6">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl text-muted-foreground font-semibold">R$</span>
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">{plan.billing}</p>
              <p className="text-sm text-muted-foreground text-center mb-4">{plan.description}</p>
              <p className="text-xs text-center text-muted-foreground mb-8 uppercase tracking-wide">{plan.highlight}</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
                ESCOLHER PLANO
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
