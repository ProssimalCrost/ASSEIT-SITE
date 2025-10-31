"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
  justify-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 40%;
    background: rgba(255, 255, 255, 0.83);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease-in-out;
    z-index: 20;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
        </Hamburger>

        <StyledUl open={menuOpen}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <HomeIcon fontSize="large"/> Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <InfoIcon fontSize="large"/> Sobre
            </Link>
          </li>
          <li>
            <Link href="/empresas" onClick={() => setMenuOpen(false)}>
              <FactoryIcon fontSize="large"/> Empresas
            </Link>
          </li>
          <li>
            <Link href="/estrutura" onClick={() => setMenuOpen(false)}>
              <PoolIcon fontSize="large"/> Estrutura
            </Link>
          </li>
          <li>
            <Link href="/contato" onClick={() => setMenuOpen(false)}>
              <CallIcon fontSize="large"/> Contato
            </Link>
          </li>
        </StyledUl>
      </nav>
    </header>
  );
}
