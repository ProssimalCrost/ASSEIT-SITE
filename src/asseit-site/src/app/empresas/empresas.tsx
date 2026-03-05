
export default function Empresas() {
  return (
    <section className="bg-green-100" id="apresentacao">
      <div className="relative w-full sm:w-2/3 lg:w-1/2 aspect-video overflow-hidden rounded-2xl mx-auto">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/caroussel/aero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        {/* opcional: overlay pra disfarçar 720p */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>
    </section>
  );
}
