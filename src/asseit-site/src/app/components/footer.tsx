export default function Footer() {
  return (
    <footer className="bg-white text-center font-bold py-1 mt-10">
      <p>© {new Date().getFullYear()} Associação das Empresas Industriais de Timóteo</p>
      <p>Desenvolvido por (link): <a href="https://theylon.netlify.app/">Theylon Augusto</a></p>
    </footer>
  );
}
