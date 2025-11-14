export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-sm text-gray-00 text-center py-1 mt-10">
      <p>© {new Date().getFullYear()} Associação das Empresas Industriais de Timóteo</p>
      <p>Desenvolvido por (link): <a href="https://theylon.netlify.app/">Theylon</a></p>
    </footer>
  );
}
