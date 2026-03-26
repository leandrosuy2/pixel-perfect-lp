import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, LayoutGrid, MessageCircle, Play, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { glassCard, glassPanel } from "@/lib/glass";

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
    short: "01",
    title: "Atendimento multicanal",
    description:
      "Centralize WhatsApp, Instagram e Facebook em uma única tela. Atribua conversas, veja histórico e evite mensagens perdidas.",
    Icon: MessageCircle,
  },
  {
    label: "FUNÇÃO 02",
    short: "02",
    title: "Kanban e tarefas",
    description:
      "Organize vendas, produção e suporte em colunas visuais, com anexos e responsáveis — no estilo que sua equipe já conhece.",
    Icon: LayoutGrid,
  },
  {
    label: "FUNÇÃO 03",
    short: "03",
    title: "Automação e equipe",
    description:
      "Agende envios, use disparos com critérios e controle permissões por função, mantendo métricas em tempo real no painel.",
    Icon: Sparkles,
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
    <section id="integracoes" className="relative overflow-hidden bg-secondary/25 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />

      <div className="container relative mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14 md:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Funcionalidades</p>
          <h2 className="mt-2 text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Conheça as principais
            <span className="text-primary"> funções </span>
            do AZ Chat
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:mx-0">
            Selecione um recurso ao lado e assista a uma demonstração em vídeo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-3 lg:col-span-5">
            {functionItems.map((item, i) => {
              const active = i === activeIndex;
              const ItemIcon = item.Icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      glassCard,
                      "overflow-visible",
                      "flex w-full items-center gap-4 p-4 text-left md:p-5",
                      active && "border-primary/45 from-primary/[0.12] ring-1 ring-primary/25",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold",
                        active
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                          : "bg-primary/15 text-primary",
                      )}
                    >
                      {item.short}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/50">
                      <ItemIcon className="h-5 w-5 text-primary" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/90">{item.label}</p>
                      <p className="truncate font-semibold text-foreground">{item.title}</p>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform",
                        active ? "translate-x-0.5 text-primary" : "text-muted-foreground",
                      )}
                    />
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(glassPanel, "flex flex-col gap-6 lg:col-span-7")}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-[hsl(var(--primary)/0.08)]" />
              <div className="relative aspect-video w-full">
                <button
                  type="button"
                  onClick={() => openVideo(current.label)}
                  className="group absolute inset-0 flex cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Assistir vídeo — ${current.title}`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-xl shadow-primary/40 ring-4 ring-background/20 transition-transform duration-300 group-hover:scale-110 group-active:scale-95 md:h-20 md:w-20">
                    <Play className="ml-1 h-8 w-8 md:h-9 md:w-9" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/50 px-3 py-2 text-center text-xs font-medium text-white/95 backdrop-blur-sm md:text-sm">
                    Demonstração em vídeo · {current.label}
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{current.label}</p>
              <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{current.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{current.description}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  type="button"
                  onClick={() => openVideo(current.label)}
                  className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Assistir vídeo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent className="z-[200] max-w-4xl gap-0 overflow-hidden border-border p-0">
          <DialogHeader className="px-6 pb-2 pt-6">
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
