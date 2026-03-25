import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** IDs públicos com embed habitualmente permitido (varia a cada clique). */
const YOUTUBE_EMBED_POOL = [
  "jNQXAC9IVRw",
  "YE7VzlLtp-4",
  "eRsGyueBVvA",
  "REmiq0wijGE",
  "M7lc1UVf-VE",
  "dQw4w9WgXcQ",
  "9bZkp7q19f0",
  "L_jWHffIx5E",
  "kJQP7kiw5Fk",
  "C0DPdy98e4c",
  "y6120QOlsfU",
  "ZZ5LpwO-An4",
  "yPKbvK7xKOg",
  "nGeCGSeF0Y4",
  "aqz-KE-bpKQ",
];

function pickRandomVideoId(): string {
  const i = Math.floor(Math.random() * YOUTUBE_EMBED_POOL.length);
  return YOUTUBE_EMBED_POOL[i];
}

const functionItems = [
  {
    label: "FUNÇÃO 01",
    title: "Atendimento multicanal",
    description:
      "Centralize WhatsApp, Instagram e Facebook em uma única tela. Atribua conversas, veja histórico e evite mensagens perdidas.",
  },
  {
    label: "FUNÇÃO 02",
    title: "Kanban e tarefas",
    description:
      "Organize vendas, produção e suporte em colunas visuais, com anexos e responsáveis — no estilo que sua equipe já conhece.",
  },
  {
    label: "FUNÇÃO 03",
    title: "Automação e equipe",
    description:
      "Agende envios, use disparos com critérios e controle permissões por função, mantendo métricas em tempo real no painel.",
  },
] as const;

const FunctionsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const openVideo = useCallback((label: string) => {
    setActiveLabel(label);
    setVideoId(pickRandomVideoId());
    setDialogOpen(true);
  }, []);

  const onDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setVideoId(null);
    }
  };

  const current = functionItems[activeIndex];

  return (
    <section id="integracoes" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          CONHEÇA AS PRINCIPAIS
          <br />
          FUNÇÕES DO AZ CHAT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            {functionItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    openVideo(item.label);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border border-transparent px-2 py-2 text-left text-sm transition-colors",
                    "text-muted-foreground hover:text-foreground",
                    i === activeIndex
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-b border-border pb-3 hover:border-primary/50",
                  )}
                >
                  <span className="text-primary font-bold shrink-0">||</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10"
          >
            <div className="flex shrink-0 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => openVideo(current.label)}
                className="group relative flex h-52 w-52 cursor-pointer items-center justify-center rounded-full bg-muted transition-transform hover:scale-[1.02] md:h-56 md:w-56"
                aria-label={`Assistir vídeo — ${current.title}`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground transition-transform group-hover:scale-110 md:h-20 md:w-20">
                  <Play className="ml-1 h-7 w-7 text-background md:h-8 md:w-8" />
                </div>
              </button>
            </div>

            <div className="min-w-0 flex-1 space-y-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{current.label}</p>
              <h3 className="text-xl font-bold text-foreground md:text-2xl">{current.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{current.description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent className="z-[200] max-w-4xl gap-0 overflow-hidden border-border p-0">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-foreground">{activeLabel}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {videoId ? (
              <iframe
                title={`YouTube — ${activeLabel}`}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FunctionsSection;
