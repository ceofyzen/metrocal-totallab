// src/app/qualificacoes/qualificacao-de-desempenho/page.tsx
import Link from "next/link";

export default function QualificacaoDesempenhoPage() {
  return (
    <section className="space-y-10">
      {/* Título + trilha */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1.5 rounded-full bg-blue-600" aria-hidden />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            Qualificação de Desempenho
          </h1>
        </div>
      </div>

      {/* Foto em destaque (TOP) */}
      <figure className="rounded-2xl overflow-hidden border shadow-sm mx-auto max-w-5xl">
        <img
          src="/images/qualificacao-desempenho-hero.png"
          alt="Instrumentação durante qualificação de desempenho em equipamento"
          className="w-full h-[320px] md:h-[460px] object-cover"
        />
      </figure>

      {/* Texto (BOTTOM) */}
      <div className="mx-auto max-w-5xl space-y-6 text-gray-700">
        <p>
          A <strong>Qualificação de Desempenho</strong> é a evidência documentada de que o equipamento
          apresenta <strong>performance consistente</strong> quando operado com os parâmetros definidos,
          processando a <strong>carga desafio</strong> apropriada. Normalmente é composta por
          <strong> ao menos 3 ciclos consecutivos</strong>, seguindo o procedimento aprovado.
        </p>

        <p>
          O protocolo é construído com base nas recomendações do fabricante e nas normas
          aplicáveis. Registramos parâmetros críticos, critérios de aceitação e resultados
          medidos por <strong>instrumentação rastreável</strong> (sensores, registradores, padrões).
          O dossiê final inclui formulários, gráficos, fotos e <strong>rastreabilidade metrológica</strong>.
        </p>

        <p>
          A qualificação se adapta ao tipo de equipamento e processo — por exemplo:
          <strong> autoclaves, lavadoras, estufas</strong> e outros. Nosso time conduz a execução no
          local, acompanha os ciclos e entrega um <strong>Relatório de Qualificação de Desempenho</strong>
          pronto para auditorias internas e sanitárias.
        </p>

        <p className="font-semibold text-gray-900">
          Manter a documentação em dia é essencial para inspeções (ex.: RDC 15) e para a
          segurança do paciente. Se precisa revisar ou implementar seu programa de qualificação,
          fale conosco.
        </p>

        {/* Ações */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/orcamento#form"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Fale Conosco
          </Link>
          <Link
            href="/escopos"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-5 py-2.5 text-blue-700 font-semibold hover:bg-blue-50"
          >
            Ver escopos atendidos
          </Link>
        </div>
      </div>

      {/* Bloco de “entregáveis” curto */}
      <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">O que entregamos</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>✔ Protocolo e checklist do processo</li>
            <li>✔ Execução com instrumentação rastreável</li>
            <li>✔ Relatório com resultados e evidências</li>
            <li>✔ Conclusão e recomendações</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Diferenciais</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>✔ Equipe experiente em ambiente hospitalar</li>
            <li>✔ Rastreabilidade metrológica completa</li>
            <li>✔ Documentos prontos para auditoria</li>
            <li>✔ Prazos ágeis e atendimento nacional</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
