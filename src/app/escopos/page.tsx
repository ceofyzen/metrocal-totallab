// src/app/escopos/page.tsx
"use client";

import { useMemo, useState } from "react";

type Escopo = { categoria: string; itens: string[] };

// ====== DADOS ======
const ESCOPOS: Escopo[] = [
  // Dimensional
  {
    categoria: "Dimensional",
    itens: [
      "Anemômetro até 20 m",
      "Arame para Medição de Rosca",
      "Bloco em “V” até 300 mm",
      "Bloco Padrão até 100 mm",
      "Bloco Paralelo até 100 mm",
      "Barra Padrão",
      "Cabeçote Micrométrico",
      "Calibrador Anel Roscado Cilíndrico até 150 mm",
      "Calibrador Anel Liso até 200 mm",
      "Calibrador de Boca até 200 mm",
      "Calibrador de Relógio até 50 mm",
      "Calibrador Tampão Roscado Cilíndrico até 150 mm",
      "Calibrador Tampão Roscado Cônico até 150 mm",
      "Calibrador Tampão Liso até 200 mm",
      "Calibrador Tampão Liso Cônico até 150 mm",
      "Calibre de Solda até 90º / 100 mm",
      "Calibre de Ferradura",
      "Calibre de Folga até 10 mm",
      "Calibre de Raio até 100 mm",
      "Calibre de Rosca passo de 10 mm",
      "Calha Parshal",
      "Comparador Eletrônico",
      "Cantoneira até 750 mm",
      "Cintel até 1500 mm",
      "Clinômetro até 90º",
      "Comparador de Diâmetro Interno",
      "Conta-Metros até 100.000 m",
      "Desempeno até 3m",
      "Dispositivo",
      "Durômetro Shore 100 shore “A”, “C” e “D”",
      "Entre Pontas até 300 mm",
      "Escantilhão até 90º",
      "Esquadro de Aço até 500 mm",
      "Esquadro Cilíndrico até 500 mm",
      "Esquadro de Granito até 500 mm",
      "Esquadro Combinado até 1000 mm",
      "Fita Perimétrica até 100 m",
      "Lupa",
      "Lâmina Padrão",
      "Haste Padrão até 900 mm",
      "Máquina de Medição",
      "Máquina de Medir Longitudes",
      "Medidor de Altura até 1500 mm",
      "Medidor de Camadas de Tinta até 2 mm",
      "Medidor de Espessura (Ultra-Som) até 5 mm",
      "Mesa de Seno até 400 mm",
      "Micrômetro Externo até 1000 mm",
      "Micrômetro para Adaptação até 1000 mm",
      "Micrômetro com Batentes Intercambiáveis até 1000 mm",
      "Micrômetro Interno de 2 pontas até 1500 mm",
      "Micrômetro Interno de 3 pontas de 4 até 175 mm",
      "Micrômetro Interno Tubular até 1500 mm",
      "Micrômetro de Profundidade até 300 mm",
      "Microscópio",
      "Nível de Bolha",
      "Nível de Precisão Linear / Quadrangular",
      "Nível Óptico / Teodolito",
      "Paquímetro até 1500 mm",
      "Paquímetro de Profundidade",
      "Padrão Escalonado até 600 mm",
      "Padrão Escalonado com Fuso Micrométrico até 300 mm",
      "Padrão Escalonado para Micrômetro",
      "Padrão Escalonado para Micrômetro Interno de 2 pontas",
      "Padrão Escalonado para Máquina de Medição de Coordenadas",
      "Padrão Escalonado com Tambor Micrométrico",
      "Paralelo Ótico",
      "Peneira Granulométrica Mínimo Malha ABNT 325",
      "Penetrômetro até 100 mm",
      "Pino Calibrado até 200 mm",
      "Prisma até 300 mm",
      "Prisma Magnético até 300 mm",
      "Projetor de Perfil até 300 mm",
      "Régua Graduada até 3 m",
      "Régua com Fio até 400 mm",
      "Régua de Seno até 300 mm",
      "Régua Paralela até 800 mm",
      "Relógio Comparador até 50 mm",
      "Relógio Apalpador até 10 mm",
      "Súbito até 400 mm",
      "Tambor Micrométrico",
      "Transferidor de Graus (360º)",
      "Trena até 100 m",
      "Tridimensional",
    ],
  },
  // Eletricidade, Tempo e Frequência
  {
    categoria: "Eletricidade, Tempo e Frequência",
    itens: [
      "Alicate Amperimétrico até 800 A",
      "Amperímetro de Painel até 500 A",
      "Agitador até 24 horas",
      "Analisador de Sinal até 250 MHz",
      "Calibrador Digital até 1000 V, 10 A, 500 GΩ",
      "Capacímetro até 3 µF",
      "Calibrador Cappo até 1000 V, 10 A, 500 GΩ",
      "Contador de Pulso até 250 MHz",
      "Cronômetro até 24 horas",
      "Estroboscópio 90.000 rpm",
      "Década de Resistência de 0,01 Ω a 12 MΩ",
      "Frequencímetro até 300 MHz",
      "Fonte CC/CA até 1000 V / 10 A",
      "Fonte Padrão até 1000 V",
      "Gerador de Funções até 220 MHz",
      "Gerador de Frequência até 220 MHz",
      "Holiday Detector até 35000 V",
      "Hipot Tester 40 kV",
      "Mala Potenciométrica até 3000 W",
      "Mala Wallace e Tiernan",
      "Medidor de RMS até 1000 V",
      "Micro-Ohmímetro até 100 Ω",
      "Mili-Voltímetro até 1000 V",
      "Megôhmetro até 2 GΩ",
      "Multímetro Analógico até 1000 V, 10 A, 500 GΩ",
      "Multímetro Digital até 6 ½ Dígitos",
      "Osciloscópio até 500 MHz",
      "Ponte de Kelvin de 0,01 Ω até 12 MΩ",
      "Ponte de RCL 500 GΩ, 3 µF",
      "Ponte de Wheatstone de 0,01 Ω até 12 MΩ",
      "Shunt 10000 A",
      "Rugosímetro até 30 µm",
      "Tacômetro até 99000 rpm",
      "Terrômetro até 2 GΩ",
      "Voltímetro Analógico e Digital até 1000 V",
      "Wattímetro Monofásico e Trifásico até 3000 W",
    ],
  },
  // Pressão
  {
    categoria: "Pressão",
    itens: [
      "Autoclave",
      "Bomba de Peso Morto até 600 MPa",
      "Calibrador de Pneus até 280 libras",
      "Calibrador de Pressão Digital até 600 kgf/cm²",
      "Calibrador Digital Pneumático 700 kgf/cm²",
      "Coluna Inclinada 20 bar",
      "Coluna Manométrica 20 bar",
      "Coluna de H2O e Mercúrio até 20 bar",
      "Mano-Vacuômetro 630 mmHg / 700 kgf/cm²",
      "Mano-Vacuômetro Digital",
      "Manômetro de Coluna H20 até 20 bar",
      "Manômetro 0,5 % de 0 a 700 kgf/cm²",
      "Manômetro 1% de 0 a 700 kgf/cm²",
      "Manômetro 2% a 5% de 0 a 700 kgf/cm²",
      "Manômetro de Coluna Hg até 20 bar",
      "Manômetro Digital",
      "Pressostato até 700 kgf/cm²",
      "Transdutor de Pressão",
      "Transmissor de Pressão",
      "Vacuômetro de 0 a -800 mmHg",
      "Vacuômetro Digital",
    ],
  },
  // Temperatura e Umidade
  {
    categoria: "Temperatura e Umidade",
    itens: [
      "Banho de Imersão até 1000 ºC",
      "Espada Higrométrica até 80 %",
      "Estação Metereológica até 50 ºC",
      "Forno e Mufla 1100 ºC",
      "Freezer até -40 ºC",
      "HDT-Vicat até 300 ºC",
      "Higrômetro até 80 %",
      "Indicador de Temperatura até 1100 ºC",
      "Pirômetro e Controlador de Temperatura até 1100 ºC",
      "Pirômetro Ótico até 1100 ºC",
      "Ponto de Fusão até 1100 ºC",
      "Psicrômetro até 80 % / 50 ºC",
      "Registrador de Temperatura até 80 % / 50 ºC",
      "Termohigrômetro até 80 % / 50 ºC",
      "Termohigrógrafo até 80 % / 50 ºC",
      "Termômetro Bimetálico até 600 ºC",
      "Termômetro de Mercúrio até 600 ºC",
      "Termômetro Digital até 1100 ºC",
      "Termopar até 1100 ºC",
      "Termostato até 1100 ºC",
      "Termoresistência",
    ],
  },
  // Volume e Viscosidade
  {
    categoria: "Volume e Viscosidade",
    itens: [
      "Balão Volumétrico até 2000 ml",
      "Bureta até 2000 ml",
      "Condutivímetro",
      "Cálice até 2000 ml",
      "Copo Becker até 2000 ml",
      "Densímetro acima de 1000 g/ml",
      "Frasco Erlemeyer até 2000 ml",
      "Grindômetro até 500 µm",
      "pHmetro de 1 a 30 pH",
      "Picnômetro até 1000 ml",
      "Pipeta até 2000 ml",
      "Proveta até 2000 ml",
      "Refratômetro até 100 Brix",
      "Sacarímetro até 100 Brix",
      "Viscosímetro Padrão até 60.000",
      "Viscosímetro Copo Din (Todos)",
      "Viscosímetro Copo Ford (Todos)",
      "Viscosímetro Copo Zahn (Todos)",
      "Viscosímetro Cinemático até 100 ºC",
      "Viscosímetro Saybolt (Todos)",
    ],
  },
  // Força
  {
    categoria: "Força",
    itens: [
      "Calibrador de Torquímetro até 3000 Nm",
      "Célula de Carga até 10000 kg",
      "Dinamômetro até 10000 kg",
      "Máquina de Embutimento até 100 kgf/cm²",
      "Máquina de Ensaios e Tração até 50 ton",
      "Parafusadeira",
      "Tensiômetro até 300 libras",
      "Torquímetro até 3000 Nm",
    ],
  },
  // Dureza, Massa e Ótica
  {
    categoria: "Dureza, Massa e Ótica",
    itens: [
      "Balança Analítica / Semi-Analítica",
      "Balança Mecânica ou Digital até 5000 kg",
      "Dinamômetro até 5000 kg",
      "Durômetro HRC, HRB, HB",
      "Esclerógrafo até 20 kg",
      "Massa Padrão até 20 kg",
      "Microscópio (Objetiva até 100x)",
      "Micro-Durômetro ±700 HV / HV5 e HV10",
    ],
  },
];

// ====== UTIS ======
const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const i = norm(text).indexOf(norm(query));
  if (i === -1) return <>{text}</>;
  const before = text.slice(0, i);
  const mid = text.slice(i, i + query.length);
  const after = text.slice(i + query.length);
  return (
    <>
      {before}
      <mark className="bg-yellow-200/60 rounded px-0.5">{mid}</mark>
      {after}
    </>
  );
}

export default function EscoposPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>(ESCOPOS[0].categoria);
  const [q, setQ] = useState("");

  // Busca global: quando há texto, filtra TODAS as categorias e mostra as que tiverem resultados
  const resultadoGlobal = useMemo(() => {
    const nq = norm(q);
    if (!nq) return null;
    return ESCOPOS.map((esc) => ({
      categoria: esc.categoria,
      itens: esc.itens.filter((it) => norm(it).includes(nq)),
    })).filter((esc) => esc.itens.length > 0);
  }, [q]);

  return (
    <section className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Escopo de Calibração
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-blue-100">
            Busque por instrumento ou navegue por categoria.
          </p>

          {/* Busca */}
          <div className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/30 backdrop-blur">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/80" fill="currentColor">
              <path d="M21 20l-5.6-5.6A7 7 0 1016 17l5 5-0 0zM10 16a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ex.: micrômetro, manômetro, termômetro…"
              className="w-full bg-transparent placeholder-white/70 text-white outline-none"
            />
          </div>

          {resultadoGlobal && (
            <p className="mt-3 text-sm text-blue-100/90">
              {resultadoGlobal.reduce((acc, esc) => acc + esc.itens.length, 0)} resultado(s) em{" "}
              {resultadoGlobal.length} categoria(s).
            </p>
          )}
        </div>
      </header>

      {/* MENU CATEGORIAS — só aparece quando NÃO está pesquisando */}
      {!resultadoGlobal && (
        <nav className="sticky top-20 z-30 bg-white/70 backdrop-blur-lg shadow-sm border-b">
          <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 py-3">
            {ESCOPOS.map((esc) => (
              <li key={esc.categoria}>
                <button
                  onClick={() => setCategoriaAtiva(esc.categoria)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    categoriaAtiva === esc.categoria
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {esc.categoria}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* CONTEÚDO */}
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        {/* Modo BUSCA GLOBAL */}
        {resultadoGlobal
          ? resultadoGlobal.map((esc) => (
              <section key={esc.categoria}>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 border-l-4 border-blue-600 pl-3">
                  {esc.categoria}
                </h2>
                <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 md:grid-cols-3 text-gray-800 leading-relaxed">
                  {esc.itens.map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>
                        <Highlight text={item} query={q} />
                      </span>
                    </p>
                  ))}
                </div>
              </section>
            ))
          : /* Modo NAVEGAÇÃO por categoria */
            ESCOPOS.map((esc) =>
              esc.categoria === categoriaAtiva ? (
                <section key={esc.categoria}>
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 border-l-4 border-blue-600 pl-3">
                    {esc.categoria}
                  </h2>
                  <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 md:grid-cols-3 text-gray-800 leading-relaxed">
                    {esc.itens.map((item, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              ) : null
            )}
      </div>

      {/* CTA FINAL */}
      <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          Não encontrou seu instrumento?
        </h3>
        <p className="mt-2 text-gray-600">
          Envie sua lista — retornamos com cobertura, prazos e valores.
        </p>
        <a
          href="/orcamento#form"
          className="mt-4 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Solicitar análise de escopo
        </a>
      </div>
    </section>
  );
}
