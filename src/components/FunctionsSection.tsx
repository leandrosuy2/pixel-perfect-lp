import { motion } from "framer-motion";
import { Play } from "lucide-react";

const functions = [
  "FUNÇÃO 01", "FUNÇÃO 01", "FUNÇÃO 01", "FUNÇÃO 01",
  "FUNÇÃO 01", "FUNÇÃO 01", "FUNÇÃO 01", "FUNÇÃO 01",
  "FUNÇÃO 01", "FUNÇÃO 01",
];

const FunctionsSection = () => {
  return (
    <section id="integracoes" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          CONHEÇA AS PRINCIPAIS<br />
          FUNÇÕES DO AZ CHAT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            {functions.map((fn, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-muted-foreground text-sm border-b border-border pb-3"
              >
                <span className="text-primary font-bold">||</span>
                <span>{fn}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-background ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;
