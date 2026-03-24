import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "MENSAL",
    price: "200",
    period: "mês",
    billing: "CobrançaMensal",
    description: "Ideal para quem quer testar a ferramenta no seu dia a dia",
    highlight: "SEM FIDELIDADE. CANCELE QUANDO QUISER",
    popular: false,
  },
  {
    name: "TRIMESTRAL",
    price: "180",
    period: "mês",
    billing: "CobrançaMensal",
    description: "Ideal para quem já entendeu que o AZ CHAT é indispensável",
    highlight: "ECONOMIZE 10% COMPARADO AO PLANO MENSAL",
    popular: false,
  },
  {
    name: "ANUAL",
    price: "150",
    period: "mês",
    billing: "CobrançaMensal",
    description: "Melhor custo benefício MAIS POPULAR",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative flex flex-col items-center p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
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
