import { motion } from "framer-motion";
import { User, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    company: "la vanesa",
  },
  {
    name: "Ana",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    company: "la vanesa",
  },
  {
    name: "Ana",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    company: "la vanesa",
  },
  {
    name: "Ana",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    company: "la vanesa",
  },
  {
    name: "Ana",
    text: "Eu estava em uma situação muito difícil antes de conhecer o AZ Chat. Não apenas a plataforma é incrível, como o AZ Chat me ajudou a encontrar uma solução que funcionasse para mim. Tudão, até minha prima ficou fã da ferramenta!",
    company: "la vanesa",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground italic mb-2">
            EMPRESAS QUE CONFIAM E
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            UTILIZAM NOSSA FERRAMENTA
          </h2>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[260px] max-w-[280px] flex-shrink-0 rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-semibold text-foreground">{t.name}</span>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              <div className="mt-auto space-y-3">
                <p className="text-xs text-muted-foreground font-medium">{t.company}</p>
                <button className="w-full text-xs border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full py-2 transition-colors font-medium">
                  Vísitar Clínica
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
