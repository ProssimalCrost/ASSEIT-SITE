
const noticias = [
    {
      title: "Campeonato Industrial 2025",
      description: "Empresas associadas participam do torneio anual da ASSEIT.",
      imgUrl: "/images/campeonato.jpg",
    },
    {
      title: "Reunião com lideranças regionais",
      description: "Evento discutiu estratégias de crescimento sustentável.",
      imgUrl: "/images/reuniao.jpg",
    },
    {
      title: "Retorno das Saunas",
      description: "Saunas voltam a funcionar com novas diretrizes de segurança.",
      imgUrl: "/images/sauna.jpg",
    },
  ];

export default function NoticiasSection() {
  return (
    <section className="bg-[#eaf3fa] py-16 px-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Notícias e Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{noticia.title}</h3>
            <p className="text-gray-700">{noticia.description}</p>
            <p>
              <img src={noticia.imgUrl} alt={noticia.title} className="mt-2 rounded-md" />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
