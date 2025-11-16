"use client";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      {/* Título */}
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500 text-sm">Visitas Hoje</h2>
          <p className="text-3xl font-bold mt-2">1.284</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500 text-sm">Leads Capturados</h2>
          <p className="text-3xl font-bold mt-2">342</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500 text-sm">Taxa de Conversão</h2>
          <p className="text-3xl font-bold mt-2">12.4%</p>
        </div>

      </div>

      {/* Gráfico (placeholder por enquanto) */}
      <div className="bg-white rounded-2xl p-6 shadow mb-8 h-64 flex items-center justify-center text-gray-400">
        <span>Gráfico de Visitas (a implementar)</span>
      </div>

      {/* Tabela de leads */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Leads Recentes</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Nome</th>
              <th className="py-2">Email</th>
              <th className="py-2">Data</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">João Silva</td>
              <td className="py-2">joao@email.com</td>
              <td className="py-2">16/11/2025</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Maria Costa</td>
              <td className="py-2">maria@email.com</td>
              <td className="py-2">16/11/2025</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}
