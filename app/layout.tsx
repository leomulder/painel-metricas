import React from "react";
import Link from "next/link";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Painel</h2>

        <nav className="flex flex-col space-y-4">
          <Link href="/painel" className="text-gray-700 hover:text-black">Dashboard</Link>
          <Link href="/painel/quizzes" className="text-gray-700 hover:text-black">Quizzes</Link>
          <Link href="/painel/leads" className="text-gray-700 hover:text-black">Leads</Link>
          <Link href="/painel/config" className="text-gray-700 hover:text-black">Configurações</Link>
        </nav>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}
