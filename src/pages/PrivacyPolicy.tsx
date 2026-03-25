import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { SEO } from "@/lib/seo";

const PrivacyPolicy = () => {
  usePageSeo({
    title: SEO.privacyTitle,
    description: SEO.privacyDescription,
    path: "/politica-de-privacidade",
    imagePath: SEO.defaultOgImage,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Política de privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: março de 2026 · AZ Chat
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            O AZ Chat (“nós”, “nosso”) respeita sua privacidade. Esta política descreve, de forma geral, como
            tratamos dados pessoais quando você utiliza nosso site e nossos serviços. Substitua este texto pelo
            documento jurídico definitivo elaborado pelo seu escritório ou DPO.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Dados coletados</h2>
            <p>
              Podemos coletar dados fornecidos voluntariamente por você (nome, e-mail, telefone, empresa) ao
              solicitar demonstração, criar conta ou falar com vendas, além de dados técnicos do navegador (IP
              resumido, tipo de dispositivo) para segurança e estatísticas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Finalidade</h2>
            <p>
              Utilizamos os dados para prestar o serviço, responder solicitações, melhorar a plataforma,
              cumprir obrigações legais e, quando aplicável, enviar comunicações com seu consentimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Compartilhamento</h2>
            <p>
              Podemos compartilhar informações com processadores de dados (hospedagem, e-mail, analytics)
              que nos auxiliam na operação, sempre com contratos compatíveis com a LGPD.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Seus direitos</h2>
            <p>
              Nos termos da LGPD, você pode solicitar acesso, correção, anonimização, portabilidade, eliminação
              ou informações sobre o tratamento. Entre em contato pelo canal indicado no site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Contato</h2>
            <p>
              Dúvidas sobre esta política: utilize o formulário ou o e‑mail de privacidade que sua empresa
              definir.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
