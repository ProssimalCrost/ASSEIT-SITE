"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';
import PoolIcon from '@mui/icons-material/Pool';
import CallIcon from '@mui/icons-material/Call';

const StyledUl = styled("ul")`
  display: flex;
  gap: 3rem;
  color: #000000ff;
`;

export default function Navbar() {
  return (
    <header className="bg-white/60 backdrop-blur-md fixed top-0 w-full z-10 shadow-sm">
      <nav className="max-w-xl mx-auto flex justify-between items-center p-3">
        <Image
            src="/images/logo.png"
            alt="Logo ASSEIT"
            width={60}
            height={60}
            className="object-contain pr-5"
          />
        <StyledUl>
          <li><Link href="/"><HomeIcon fontSize="large"/></Link></li>
          <li><Link href="/about"><InfoIcon fontSize="large"/></Link></li>
          <li><Link href="/empresas"><BusinessIcon fontSize="large"/></Link></li>
          <li><Link href="/estrutura"><PoolIcon fontSize="large"/></Link></li>
          <li><Link href="/noticias"><div>Notícias</div></Link></li>
          <li><Link href="/contato"><CallIcon fontSize="large"/></Link></li>
        </StyledUl>
      </nav>
    </header>
  );
}
