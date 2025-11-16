"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../src/firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

type Lead = {
  id: string;
  name?: string;
  email?: string;
  createdAt?: any;
};

export default function MetricsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMetrics() {
      try {
        const q = query(
          collection(db, "leads"),
          where("quizId", "==", id)
        );

        const snap = await getDocs(q);

        const list = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })) as Lead[];

        setLeads(list);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    loadMetrics();
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Métricas do Quiz</h1>
      <p><b>ID do quiz:</b> {id}</p>

      <h2>Leads coletados: {leads.length}</h2>

      {leads.length === 0 && <p>Nenhum lead encontrado.</p>}

      {leads.map((l) => (
        <div key={l.id} style={{ marginBottom: 10 }}>
          <p><b>Nome:</b> {l.name}</p>
          <p><b>Email:</b> {l.email}</p>
          <p><b>Data:</b> {l.createdAt?.toDate?.().toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
