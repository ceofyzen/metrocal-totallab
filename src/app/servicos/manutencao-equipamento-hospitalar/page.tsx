// src/app/servicos/manutencao-equipamento-hospitalar/page.tsx
import Link from "next/link";

export default function ManutencaoEquipamentoHospitalarPage() {
  return (
    <section className="space-y-14">
      {/* ===== HERO com imagem + gradiente ===== */}
      <header className="relative overflow-hidden rounded-3xl border bg-gray-900 text-white shadow-lg">
        <img
          src="/images/manutencao-hero.jpg"
          alt="Equipe técnica realizando manutenção em equipamento hospitalar"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-blue-900/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Serviços • Metrocal • Totallab
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Manutenção de Equipamento Hospitalar
          </h1>
          <p className="mt-4 max-w-3xl text-gray-100">
            Manutenção <strong>preventiva e corretiva</strong> com diagnóstico preciso,
            peças certificadas e documentação completa. Nosso foco é manter seu
            parque tecnológico <strong>disponível, seguro e em conformidade</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/orcamento#form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Solicitar atendimento
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
            <Stat label="Chamados/ano" value="3.500+" />
            <Stat label="Tempo de resposta" value="≤ 4h" />
            <Stat label="Primeira solução" value="87%" />
            <Stat label="Satisfação média" value="98%" />
          </div>
        </div>
      </header>

      {/* ===== Benefícios (cards) ===== */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          Por que manter com a Metrocal • Totallab?
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Plano preventivo inteligente"
            text="Rotinas por criticidade e horas de uso; redução de paradas e aumento da vida útil."
          />
          <Feature
            title="Diagnóstico preciso"
            text="Ferramental de última geração e protocolos padronizados para identificar a causa raiz."
          />
          <Feature
            title="Peças e rastreabilidade"
            text="Peças certificadas quando aplicável e registro completo de intervenções."
          />
          <Feature
            title="Documentação e compliance"
            text="Ordens de serviço, relatórios e certificados para auditorias e gestão da qualidade."
          />
        </div>
      </section>

      {/* ===== Etapas do processo (timeline) ===== */}
      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          Como conduzimos a manutenção
        </h2>
        <ol className="relative ml-4 space-y-6 border-l-2 border-blue-100 pl-6">
          <Step
            title="Abertura e triagem do chamado"
            text="Coleta rápida de sintomas, modelo e histórico para priorização por criticidade."
          />
          <Step
            title="Diagnóstico técnico"
            text="Testes elétricos, funcionais e metrológicos para localizar a falha com precisão."
          />
          <Step
            title="Intervenção"
            text="Correção, substituição de componentes e ajustes conforme especificações do fabricante."
          />
          <Step
            title="Ensaios e validação"
            text="Testes finais e, quando aplicável, calibração ou verificação metrológica."
          />
          <Step
            title="Relatório e recomendações"
            text="Entrega de OS com fotos, peças aplicadas e orientações para evitar reincidência."
          />
        </ol>
      </section>

      {/* ===== Bloco visual com checklist ===== */}
      <section className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-gray-200">
          <img
            src="/images/manutencao-detalhe.jpg"
            alt="Detalhe técnico durante manutenção"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            O que está incluído
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Diagnóstico técnico com registro fotográfico</li>
            <li>✔ Substituição de peças (quando necessário) com rastreio</li>
            <li>✔ Testes funcionais e segurança elétrica</li>
            <li>✔ Relatório/OS detalhada e recomendações</li>
            <li>✔ Integração com plano preventivo e calibração</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/orcamento#form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Agendar atendimento
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Depoimento ===== */}
      <section className="mx-auto max-w-6xl px-6">
        <figure className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <blockquote className="text-lg text-gray-800">
            “Chamado respondido no mesmo turno e equipamento liberado com todos
            os testes registrados. A previsibilidade que precisávamos.”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3 text-sm text-gray-600">
            <img
              src="/images/avatar-cliente-2.jpg"
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <span className="font-semibold text-gray-900">CEO Fyzen Brasil</span>{" "}
              • Hospital Geral
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
          <Faq q="Atendem chamados emergenciais?" a="Sim. Trabalhamos com priorização por criticidade e resposta em até 4h para contratos." />
          <Faq q="Usam peças originais?" a="Utilizamos peças certificadas e mantemos rastreabilidade no relatório/OS." />
          <Faq q="Emitimos laudos?" a="Sim. Entregamos relatório de manutenção e, quando aplicável, certificados de ensaio ou verificação." />
          <Faq q="Cobertura geográfica?" a="Atendimento nacional com logística técnica planejada." />
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          Precisa colocar seu equipamento de volta em operação?
        </h3>
        <p className="mt-2 text-gray-600">
          Envie os dados do modelo, sintomas e local. Retornamos com o plano de
          atendimento e prazos.
        </p>
        <Link
          href="/orcamento#form"
          className="mt-4 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Solicitar atendimento
        </Link>
      </div>
    </section>
  );
}

/* ====== componentes utilitários ====== */

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
