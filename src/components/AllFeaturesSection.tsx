import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { glassHighlight, glassPanel } from "@/lib/glass";

const leftFeatures = [
  "Centralização total: WhatsApp, Instagram e Facebook em um só lugar.",
  "Kanban visual (estilo trello): Organize vendas, produção e financeiro com suporte a anexos.",
  "Integrações Prontas: Conecte seu sistema de Notas fiscais e OS (Bling, Tiny, etc) em minutos.",
  "Gestão de equipe: Níveis de acesso para vendedores e gestores, com Dashboard de Métricas em tempo real.",
];

const rightFeatures = [
  "Automação Estratégica: Agendamento de mensagens, disparos em massa e IA opcional.",
  "Kanban visual (estilo trello): Organize vendas, produção e financeiro com suporte a anexos.",
];

const highlight = "Consultoria Exclusiva: Acesso ao Know-how de 15 anos para estruturar sua empresa do zero.";
const bottomText = "Experimente o AZ CHAT sem riscos com nossa garantia de reembolso de 7 dias.";

const AllFeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={glassPanel}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Todos os planos incluem:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="space-y-4">
              {leftFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {rightFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
              <div className={cn(glassHighlight, "flex items-start gap-3")}>
                <Star className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground font-medium">{highlight}</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">{bottomText}</p>
          <div className="flex justify-center mt-6">
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-2 font-semibold transition-colors text-sm">
              SOLICITE AGORA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllFeaturesSection;
