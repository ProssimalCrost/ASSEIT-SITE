"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FactoryIcon from "@mui/icons-material/Factory";
import PoolIcon from "@mui/icons-material/Pool";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-md fixed top-0 w-full z-20 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo ASSEIT"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-blue-900 font-medium">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition">
              <HomeIcon /> Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-1 hover:text-blue-600 transition">
              <InfoIcon /> Sobre
            </Link>
          </li>
          <li>
            <Link href="/empresas" className="flex items-center gap-1 hover:text-blue-600 transition">
              <FactoryIcon /> Empresas
            </Link>
          </li>
          <li>
            <Link href="/estrutura" className="flex items-center gap-1 hover:text-blue-600 transition">
              <PoolIcon /> Estrutura
            </Link>
          </li>
          <li>
            <Link href="/contato" className="flex items-center gap-1 hover:text-blue-600 transition">
              <CallIcon /> Contato
            </Link>
          </li>
        </ul>

        {/* Botão Hamburguer (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>

        {/* Menu Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-6 text-blue-900 font-medium ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <HomeIcon /> Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <InfoIcon /> Sobre
          </Link>
          <Link href="/empresas" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <FactoryIcon /> Empresas
          </Link>
          <Link href="/estrutura" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <PoolIcon /> Estrutura
          </Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <CallIcon /> Contato
          </Link>
        </div>
      </nav>

      {/* Overlay escurecido ao abrir o menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
