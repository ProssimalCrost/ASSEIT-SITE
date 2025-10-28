"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FactoryIcon from '@mui/icons-material/Factory';
import PoolIcon from '@mui/icons-material/Pool';
import CallIcon from '@mui/icons-material/Call';

const StyledUl = styled("ul")`
  display: flex;
  gap: 3rem;
  color: #0e02b4ff;
  list-style: none;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
`;

export default function Navbar() {
  return (
    <header className="bg-white/60 backdrop-blur-md fixed top-0 w-full z-10 shadow-sm">
      <nav className="max-w-lg mx-auto flex justify-between items-center p-3">
        <Image
            src="/images/logo.png"
            alt="Logo ASSEIT"
            width={50}
            height={50}
            className="object-contain mr-10 pb-2"
          />
        <StyledUl>
          <li><Link href="/"><HomeIcon fontSize="large"/>Home</Link></li>
          <li><Link href="/about"><InfoIcon fontSize="large"/>Sobre</Link></li>
          <li><Link href="/empresas"><FactoryIcon fontSize="large"/><p>Empresas</p></Link></li>
          <li><Link href="/estrutura"><PoolIcon fontSize="large"/><p>Estrutura</p></Link></li>
          <li><Link href="/contato"><CallIcon fontSize="large"/><p>Contato</p></Link></li>
        </StyledUl>
      </nav>
    </header>
  );
}
