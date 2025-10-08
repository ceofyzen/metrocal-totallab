import Link from "next/link";

export default function QualificacaoDesempenhoPage() {
  return (
    // força o hero a colar totalmente no topo e sob o header
    <section className="bg-white -mt-[80px] md:-mt-[96px] lg:-mt-[112px] relative z-0">
      {/* Hero full width e full bleed */}
      <div className="relative w-screen h-[480px] md:h-[560px] left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        <img
          src="/images/qualificacao-desempenho-hero.png"
          alt="Profissional realizando qualificação de equipamento"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Texto centralizado */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <span className="text-sm uppercase tracking-widest text-blue-200 font-medium">
            Qualificações Totallab
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl md:text-5xl font-semibold text-white leading-snug">
            Qualificação de Desempenho
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-gray-100">
            Evidência documentada de performance consistente e rastreável conforme protocolos técnicos e normas aplicáveis.
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-6 lg:px-8 py-12 md:py-16 space-y-10 bg-white">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 text-gray-700 text-base leading-relaxed">
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

            <p className="font-medium text-gray-900">
              Manter a documentação em dia é essencial para inspeções (ex.: RDC 15) e para a
              segurança do paciente. Se precisa revisar ou implementar seu programa de qualificação,
              fale conosco.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl bg-gray-50 p-6">
              <h2 className="text-sm font-semibold text-gray-900">O que entregamos</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {[
                  "Protocolo e checklist do processo",
                  "Execução com instrumentação rastreável",
                  "Relatório com resultados e evidências",
                  "Conclusão e recomendações",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h2 className="text-sm font-semibold text-gray-900">Diferenciais</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {[
                  "Equipe experiente em ambiente hospitalar",
                  "Rastreabilidade metrológica completa",
                  "Documentos prontos para auditoria",
                  "Prazos ágeis e atendimento nacional",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12 md:mt-14 rounded-xl bg-gray-50 p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Pronto para a próxima auditoria?</h3>
              <p className="mt-1 text-sm text-gray-600">Organizamos protocolo, execução e relatório com rastreabilidade completa.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/orcamento#form"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white text-sm font-medium shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Solicitar proposta
              </Link>
              <Link
                href="/escopos"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
              >
                Ver escopos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}