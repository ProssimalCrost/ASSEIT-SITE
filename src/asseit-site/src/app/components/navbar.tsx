"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";


const StyledUl = styled("ul")`
  display: flex;
  gap: 1.5rem;
  font-size: 15px;
  color: #1f52dfff;
  text-transform: uppercase,bold;
  font-weight: bold;
`;

export default function Navbar() {
  return (
    <header className="bg-white/10 backdrop-blur-md fixed top-0 w-full z-10 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Image
            src="/images/logo.png"
            alt="Logo ASSEIT"
            width={60}
            height={60}
            className="object-contain"
          />
        <StyledUl>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/empresas">Empresas</Link></li>
          <li><Link href="/estrutura">Estrutura</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </StyledUl>
      </nav>
    </header>
  );
}
