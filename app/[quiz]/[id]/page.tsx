import { db } from "@/src/firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

type Lead = {
  id: string;
  name: string;
  email: string;
};

export default async function QuizPage({ params }: { params: { id: string } }) {
  const quizDoc = await getDoc(doc(db, "quizzes", params.id));

  if (!quizDoc.exists()) {
    return <div style={{ padding: 20 }}>Quiz não encontrado.</div>;
  }

  const quizData = quizDoc.data();

  const leadsSnap = await getDocs(collection(db, "quizzes", params.id, "leads"));

  const leads: Lead[] = leadsSnap.docs.map((doc) => {
    const data = doc.data() as Omit<Lead, "id">;
    return {
      id: doc.id,
      ...data,
    };
  });

  return (
    <div>
      <h1>{quizData.title}</h1>
      <p>Total de leads: {leads.length}</p>

      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <strong>{lead.name}</strong> – {lead.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
