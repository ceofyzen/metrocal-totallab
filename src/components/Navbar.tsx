// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { label: string; href: string };
type WithChildren = Item & { children?: Item[] };

// --- Submenus ---
const servicesChildren: Item[] = [
  { label: "Assistência Técnica", href: "/servicos/assistencia-tecnica" },
  { label: "Instalação de Equipamento Hospitalar", href: "/servicos/instalacao-equipamento-hospitalar" },
  { label: "Manutenção de Equipamento Hospitalar", href: "/servicos/manutencao-equipamento-hospitalar" },
];

const qualChildren: Item[] = [
  { label: "Qualificação de Desempenho", href: "/qualificacoes/qualificacao-de-desempenho" },
  { label: "Qualificação de Capela de Fluxo Laminar", href: "/qualificacoes/capela-de-fluxo-laminar" },
  { label: "Qualificação de Temperatura de Autoclave", href: "/qualificacoes/temperatura-de-autoclave" },
];

// --- Itens do menu ---
const navItems: WithChildren[] = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos/assistencia-tecnica", children: servicesChildren },
  { label: "Escopos", href: "/escopos" },
  { label: "Qualificações", href: "/qualificacoes/qualificacao-de-desempenho", children: qualChildren },
];

export default function Navbar({ loginUrl }: { loginUrl: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // drawer mobile
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({}); // acordeão mobile
  const [openDesktop, setOpenDesktop] = useState<string | null>(null); // dropdown desktop

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fechar menus ao navegar
  useEffect(() => {
    setOpen(false);
    setOpenMobile({});
    setOpenDesktop(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* filete topo */}
      <div aria-hidden className="h-[3px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300" />
      {/* barra */}
      <div
        className={`backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-white/95 shadow-md border-b border-gray-200"
            : "bg-white/80 shadow-sm border-b border-white/40"
        }`}
>
        <nav className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="h-16 md:h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4">
            {/* Marca */}
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="text-xl md:text-2xl font-semibold tracking-tight">Metrocal</div>
              <span className="h-6 w-px bg-gray-300" />
              <div className="text-xl md:text-2xl font-semibold text-blue-600">Totallab</div>
              <span className="h-2 w-2 rounded-full bg-blue-600 opacity-70 group-hover:opacity-100 transition" />
            </Link>

            {/* Menu central (desktop) */}
            <ul className="hidden md:flex justify-center items-center gap-1">
              {navItems.map((it) => {
                const active = isActive(it.href);
                const hasChildren = !!it.children?.length;
                const opened = openDesktop === it.href;

                // Item sem submenu
                if (!hasChildren) {
                  return (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className={`group relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition
                          outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                          ${active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                      >
                        <span>{it.label}</span>
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute left-4 right-4 -bottom-1 h-[2px] rounded bg-blue-600 transition-transform origin-left
                          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                        />
                      </Link>
                    </li>
                  );
                }

                // Item com submenu (Serviços, Qualificações)
                return (
                  <li
                    key={it.href}
                    className="relative"
                    onMouseEnter={() => setOpenDesktop(it.href)}
                    onMouseLeave={() => setOpenDesktop(null)}
                  >
                    <Link
                      href={it.href}
                      className={`group relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition
                        outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                        ${active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                    >
                      <span>{it.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${opened || active ? "rotate-180 text-blue-600" : "group-hover:rotate-180 text-gray-500"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                      </svg>
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute left-4 right-4 -bottom-1 h-[2px] rounded bg-blue-600 transition-transform origin-left
                        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </Link>

                    {/* ponte sem gap + dropdown */}
                    <div className="absolute left-0 top-full pt-3">
                      <div
                        className={`${opened ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                                    transition will-change-transform duration-150 ease-out
                                    w-[28rem] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur shadow-xl p-2`}
                      >
                        {it.children!.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 transition"
                          >
                            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 opacity-70" aria-hidden />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{c.label}</p>
                              <p className="text-xs text-gray-500">Saiba mais.</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Ações (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/orcamento#form"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold
                  bg-blue-600 text-white shadow-sm hover:bg-blue-700
                  outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Solicite seu orçamento
              </Link>
              <a
                href={loginUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold
                  border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white
                  shadow-sm transition outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Login
              </a>
            </div>

            {/* Trigger mobile */}
            <button
              className="md:hidden justify-self-end rounded-full border px-3 py-2 text-sm shadow-sm
                         outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay mobile */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer mobile */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed top-0 right-0 z-50 h-dvh w-[86%] max-w-sm bg-white shadow-xl
                    transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="font-semibold">Menu</span>
          <button className="rounded-full border px-3 py-1 text-sm" onClick={() => setOpen(false)}>
            Fechar
          </button>
        </div>

        <div className="p-4">
          <ul className="space-y-1">
            {navItems.map((it) => {
              const hasChildren = !!it.children?.length;
              const expanded = !!openMobile[it.href];

              if (!hasChildren) {
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className={`block rounded-lg px-4 py-3 text-base transition
                        outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                        ${isActive(it.href) ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-100"}`}
                      onClick={() => setOpen(false)}
                    >
                      {it.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={it.href} className="rounded-lg">
                  <button
                    className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-base hover:bg-gray-100"
                    aria-expanded={expanded}
                    onClick={() => setOpenMobile((s) => ({ ...s, [it.href]: !expanded }))}
                  >
                    <span>{it.label}</span>
                    <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  <div className={`${expanded ? "grid" : "hidden"} gap-1 pb-2`}>
                    {it.children!.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="ml-2 block rounded-lg px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 grid gap-2">
            <Link
              href="/orcamento#form"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold
                         bg-blue-600 text-white shadow-sm hover:bg-blue-700
                         outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              onClick={() => setOpen(false)}
            >
              Solicite seu orçamento
            </Link>
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold
                         border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white
                         shadow-sm transition outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
