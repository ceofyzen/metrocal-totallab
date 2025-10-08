// src/app/servicos/instalacao-equipamento-hospitalar/page.tsx
import Link from "next/link";

export default function InstalacaoEquipamentoHospitalarPage() {
  return (
    <section className="space-y-14">
      {/* ===== HERO com imagem + gradiente ===== */}
      <header className="relative overflow-hidden rounded-3xl border bg-gray-900 text-white shadow-lg">
        <img
          src="/images/instalacao-hero.jpg"
          alt="Equipe técnica instalando equipamento hospitalar"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-blue-900/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Serviços • Metrocal • Totallab
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Instalação de Equipamento Hospitalar
          </h1>
          <p className="mt-4 max-w-3xl text-gray-100">
            Implantação completa com validações técnicas, documentação para
            auditorias e treinamento da equipe. Do projeto à liberação, seu
            equipamento entra em operação com{" "}
            <span className="font-semibold">desempenho comprovado</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/orcamento#form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Solicitar orçamento
            </Link>
            <Link
              href="/escopos"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              Ver escopos atendidos
            </Link>
          </div>
        </div>

        {/* faixa de indicadores */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-5 md:grid-cols-4">
            <Stat label="Equipamentos instalados" value="1.200+" />
            <Stat label="Satisfação média" value="98%" />
            <Stat label="Tempo médio de liberação" value="≤ 24h" />
            <Stat label="Cobertura" value="Atendimento nacional" />
          </div>
        </div>
      </header>

      {/* ===== Benefícios (cards) ===== */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          Por que instalar com a Metrocal • Totallab?
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Plano técnico sob medida"
            text="Checklist de infraestrutura, verificação elétrica, condicionamento térmico e requisitos do fabricante."
          />
          <Feature
            title="Validações e testes"
            text="Testes funcionais e de segurança, quando aplicável, com rastreabilidade de padrões."
          />
          <Feature
            title="Documentação para auditorias"
            text="Relatório de Instalação e, quando necessário, Certificados de Validação de Instalação."
          />
          <Feature
            title="Treinamento da equipe"
            text="Orientação operacional inicial para garantir uso correto e longevidade do equipamento."
          />
        </div>
      </section>

      {/* ===== Etapas do processo (timeline) ===== */}
      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          Como conduzimos a instalação
        </h2>
        <ol className="relative ml-4 space-y-6 border-l-2 border-blue-100 pl-6">
          <Step
            title="Planejamento e pré-requisitos"
            text="Levantamento de infraestrutura, utilidades e adequações de local. Alinhamento com as recomendações do fabricante."
          />
          <Step
            title="Entrega, posicionamento e ligações"
            text="Inspeção recebida, posicionamento técnico, interligações e organização de rotas e ancoragens quando exigido."
          />
          <Step
            title="Testes e validações"
            text="Ensaios funcionais e de segurança; validações térmicas/pressão quando aplicáveis; registro de parâmetros e resultados."
          />
          <Step
            title="Documentação e liberação"
            text="Emissão do Relatório de Instalação com evidências e, quando necessário, Certificados de Validação de Instalação."
          />
          <Step
            title="Treinamento e handover"
            text="Orientações de operação inicial, rotinas de conservação e integração com planos de manutenção e calibração."
          />
        </ol>
      </section>

      {/* ===== Bloco visual com checklist ===== */}
      <section className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-gray-200">
          <img
            src="/images/instalacao-detalhe.jpg"
            alt="Detalhe técnico de instalação"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            O que você recebe
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Plano técnico de instalação e checklist de infraestrutura</li>
            <li>✔ Testes funcionais e, quando aplicável, validações térmicas/pressão</li>
            <li>✔ Relatório de Instalação com fotos, parâmetros e resultados</li>
            <li>✔ Certificados de Validação de Instalação (quando requerido)</li>
            <li>✔ Orientações de operação inicial e rotinas de conservação</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/orcamento#form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Fale com um especialista
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Depoimento ===== */}
      <section className="mx-auto max-w-6xl px-6">
        <figure className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <blockquote className="text-lg text-gray-800">
            “A Metrocal nos entregou a instalação com validações completas e
            liberação no mesmo dia. Todo o dossiê veio pronto para auditoria —
            transparência e agilidade exemplar.”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3 text-sm text-gray-600">
            <img
              src="/images/avatar-cliente.jpg"
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <span className="font-semibold text-gray-900">Coord. de CME</span>{" "}
              • Rede Hospitalar Regional
            </div>
          </figcaption>
        </figure>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-7xl space-y-4 px-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          Perguntas frequentes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Faq q="Vocês atendem todo o Brasil?" a="Sim. Atendemos em todo o território nacional, com programação de deslocamento e logística técnica." />
          <Faq q="Emitimos certificados?" a="Quando requerido, emitimos Certificados de Validação de Instalação com rastreabilidade dos instrumentos." />
          <Faq q="Quanto tempo leva?" a="Depende do equipamento e infraestrutura. Para a maioria dos casos, a liberação ocorre em até 24 horas após a instalação." />
          <Faq q="Treinam a equipe?" a="Sim. Entregamos orientações operacionais iniciais e boas práticas para conservação e segurança." />
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          Pronto para instalar com tranquilidade?
        </h3>
        <p className="mt-2 text-gray-600">
          Envie os dados do equipamento e do local — retornamos rapidamente com
          o plano de instalação e prazos.
        </p>
        <Link
          href="/orcamento#form"
          className="mt-4 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Solicitar orçamento
        </Link>
      </div>
    </section>
  );
}

/* ====== pequenos componentes utilitários ====== */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </article>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[1.15rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-200"
      />
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600">{text}</p>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <summary className="cursor-pointer list-none font-semibold text-gray-900">
        <span className="inline-block transition group-open:translate-x-1">›</span>{" "}
        {q}
      </summary>
      <p className="mt-2 text-gray-600">{a}</p>
    </details>
  );
}
