import Section from "../components/section";
import Card from "../components/card";

export default function NoticiasPage() {
  const noticias = [
    {
      title: "Campeonato Industrial 2025",
      description: "Empresas associadas participam do torneio anual da ASSEIT.",
    },
    {
      title: "Reunião com lideranças regionais",
      description: "Evento discutiu estratégias de crescimento sustentável.",
    },
  ];

  return (
    <Section title="Notícias e Eventos">
      <div className="grid sm:grid-cols-2 gap-6">
        {noticias.map((n, i) => (
          <Card key={i} title={n.title} description={n.description} />
        ))}
      </div>
    </Section>
  );
}
