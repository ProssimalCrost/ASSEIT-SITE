"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white/70 backdrop-blur-md fixed top-0 w-full z-10 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Image
            src="/images/logo.png"
            alt="Logo ASSEIT"
            width={60}
            height={60}
            className="object-contain"
          />
        <ul className="flex gap-6 font-medium text-blue-800">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/empresas">Empresas</Link></li>
          <li><Link href="/estrutura">Estrutura</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
