import Section from "../components/section";

export default function AboutPage() {
  return (
    <Section title="Sobre a ASSEIT">
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-md text-gray-800 leading-relaxed">
        <p>
          A Associação das Empresas Industriais de Timóteo (ASSEIT) é uma
          entidade sem fins lucrativos que representa e apoia o setor industrial
          do município. Fundada em 1995, busca fortalecer a integração entre as
          empresas, promover o desenvolvimento econômico e social e contribuir
          com projetos comunitários.
        </p>
        <p className="mt-4">
          Ao longo dos anos, a ASSEIT se consolidou como um pilar importante do
          Vale do Aço, atuando em parceria com instituições públicas e privadas.
        </p>
      </div>
    </Section>
  );
}
