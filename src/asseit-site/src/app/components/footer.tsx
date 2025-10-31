export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-sm text-gray-00 text-center py-3 mt-12">
      <p>© {new Date().getFullYear()} Theylon - Associação das Empresas Industriais de Timóteo</p>
      <p>Desenvolvido por: <a href="https://theylon.netlify.app/">Theylon</a></p>
    </footer>
  );
}
