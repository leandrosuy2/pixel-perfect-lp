import { motion } from "framer-motion";
import { MessageCircle, Share2, Bell } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Mensagem multicanal",
    description: "Conecte-se com sua equipe em qualquer canal e nas principais plataformas",
  },
  {
    icon: Share2,
    title: "Compartilhamento de Tarefas e Arquivos",
    description: "Gerencie tarefas, setores e compartilhe arquivos e informações com facilidade",
  },
  {
    icon: Bell,
    title: "Notificações em tempo real",
    description: "Fique atualizado com alertas instantâneos",
  },
];

const FeaturesSection = () => {
  return (
    <section id="recursos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
