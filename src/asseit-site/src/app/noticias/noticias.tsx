const noticias = [
    {
      title: "",
      description: "",
      imgUrl: "https://res.cloudinary.com/dptbp5wvs/image/upload/v1776361084/WhatsApp_Image_2026-04-13_at_11.51.56_1_kftruc.jpg",
    },
    {
      title: "Primeiro Torneio de Beach Tenis",
      description: "Evento de inauguração de uma nova modalidade e quadra de areia.",
      imgUrl: "https://res.cloudinary.com/dptbp5wvs/image/upload/v1776366605/WhatsApp_Image_2026-04-16_at_16.06.05_yqfkc1.jpg",
    },
    {
      title: "Catraca com facial",
      description: "sistema de segurança com controle facial.",
      imgUrl: "https://res.cloudinary.com/dptbp5wvs/image/upload/v1776366604/WhatsApp_Image_2026-04-16_at_15.19.29_qxefo5.jpg",
    },
  ]  

export default function NoticiasSection() {
  return (
    <section className="0 py-12 px-4 pb-20 md:px-8 lg:px-20 bg-gray-50 relative m-10">
      <h2 className="text-4xl font-bold mb-6">Notícias e Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">{noticia.title}</h3>
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
