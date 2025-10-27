
const noticias = [
    {
      title: "Campeonato Industrial 2025",
      description: "Empresas associadas participam do torneio anual da ASSEIT.",
    },
    {
      title: "Reunião com lideranças regionais",
      description: "Evento discutiu estratégias de crescimento sustentável.",
    },
    {
      title: "Retorno das Saunas",
      description: "Saunas voltam a funcionar com novas diretrizes de segurança.",
      imgUrl: "/sauna.jpg",
    },
  ];

export default function NoticiasSection() {
  return (
    <section className="bg-[#eaf3fa] py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Notícias e Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{noticia.title}</h3>
            <p className="text-gray-700">{noticia.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
