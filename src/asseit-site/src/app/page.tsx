import Button from "./components/button";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
        Associação das Empresas Industriais de Timóteo
      </h1>
      <p className="max-w-2xl text-white text-lg mb-8">
        Unindo forças para o desenvolvimento industrial e comunitário de
        Timóteo.
      </p>
      <Button>Conheça a ASSEIT</Button>
    </section>
  );
}
