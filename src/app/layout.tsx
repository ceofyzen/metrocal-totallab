// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';

// ⬇️ IMPORTANTE: importe a Navbar
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Metrocal — Totallab",
  description: "Serviços de metrologia com qualidade e precisão.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Defina a URL real do login quando tiver; por agora é um placeholder.
  const LOGIN_URL = "https://example.com/login";

  return (
    <html lang="pt-BR">
      <body className="antialiased text-gray-900 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        {/* ⬇️ Navbar fixa no topo */}
        <Navbar loginUrl={LOGIN_URL} />

        {/* ⬇️ Espaço para não ficar escondido atrás da navbar sticky */}
        <main className="pt-16 md:pt-20 min-h-screen">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}