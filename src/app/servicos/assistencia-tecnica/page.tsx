// src/app/servicos/assistencia-tecnica/page.tsx
type Card = {
  title: string;
  img: string;
  href: string;
  blurb: string;
};

const cards: Card[] = [
  {
    title: "Esterilizador a Gás Óxido de Etileno (ETO)",
    img: "/images/eto.png",
    href: "#eto",
    blurb: "Processos controlados e rastreáveis para materiais termossensíveis.",
  },
  {
    title: "Esterilizador a Vapor",
    img: "/images/vapor.png",
    href: "#vapor",
    blurb: "Ciclos validados e monitoramento preciso de parâmetros críticos.",
  },
  {
    title: "Lavadora e Termodesinfecção",
    img: "/images/lavadora.png",
    href: "#termodesinfeccao",
    blurb: "Limpeza padronizada, enxágue e secagem com documentação completa.",
  },
  {
    title: "Lavadora Ultrassônica",
    img: "/images/ultra.png",
    href: "#ultrassonica",
    blurb: "Cavitação eficiente para geometrias complexas e microfissuras.",
  },
  {
    title: "Secadores",
    img: "/images/secadores.png",
    href: "#secadores",
    blurb: "Controle de fluxo, temperatura e umidade para integridade dos materiais.",
  },
];

export default function AssistenciaTecnicaPage() {
  return (
    <section className="space-y-14">
      {/* ====== HERO ====== */}
        <header className="relative overflow-hidden rounded-3xl border bg-gray-900 text-white shadow-md">
        {/* Imagem de fundo */}
        <img
            src="/images/fundoassist.jpg"
            alt="Equipe técnica em manutenção hospitalar"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Overlay gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/40 to-gray-900/80" />

        {/* Conteúdo central */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
            <p className="text-xs tracking-widest font-semibold text-blue-300 uppercase">
            Serviços
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
            Assistência Técnica Especializada
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-gray-200 leading-relaxed">
            Manutenção preventiva e corretiva com rastreabilidade metrológica,
            validação de processos e resposta ágil — para manter seu parque
            tecnológico seguro, disponível e em conformidade.
            </p>
        </div>
        </header>

      {/* ====== GRID ====== */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur
                       ring-1 ring-gray-200 shadow-sm transition-all
                       hover:shadow-xl hover:-translate-y-0.5"
          >
            {/* Media */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* gradiente sutil para legibilidade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0" />
            </div>

            {/* Conteúdo */}
            <div className="p-5">
              <h2 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{c.blurb}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={c.href}
                className="inline-flex items-center gap-2 rounded-full border border-blue-600/70
                           px-4 py-2 text-sm font-semibold text-blue-700
                           hover:bg-blue-600 hover:text-white transition
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Saiba mais
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12.293 4.293a1 1 0 011.414 0l3.999 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.415-1.414L14.586 11H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </a>

                {/* selo visual delicado */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Prioridade crítica
                </span>
              </div>
            </div>

            {/* brilho lateral suave */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 translate-x-10
                         bg-gradient-to-l from-blue-100/50 to-transparent opacity-0
                         transition-opacity duration-500 group-hover:opacity-100"
            />
          </article>
        ))}
      </div>

      {/* ====== CTA ====== */}
      <div className="mx-auto max-w-4xl rounded-2xl border bg-white/70 p-6 text-center shadow-sm ring-1 ring-gray-200">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          Precisa de atendimento rápido?
        </h3>
        <p className="mt-2 text-gray-600">
          Fale com nossa equipe técnica e receba um diagnóstico inicial em minutos.
        </p>
        <a
          href="/orcamento#form"
          className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white
                     shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
