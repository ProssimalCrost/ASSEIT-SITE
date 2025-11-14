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
    <header className="bg-white/30 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-1">
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
      </nav>

      {/* Overlay e Menu Mobile */}
      {menuOpen && (
        <>
          {/* Overlay escurecido */}
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden z-40"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Mobile Centralizado */}
          <div
            className={`relative inset-0 flex items-center justify-center md:hidden z-50 transition-all duration-300 ${
              menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl
               p-4 mx-4 w-full max-w-sm flex flex-col items-center justify-center
               gap-6 text-blue-900 font-medium transform transition-transform duration-300
               padding-bottom-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-blue-900 hover:text-blue-700"
              >
                <CloseIcon fontSize="large" />
              </button>

              {/* Links do Menu */}
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-3 text-lg w-full justify-center hover:text-blue-700 transition-colors"
              >
                <HomeIcon /> Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-3 text-lg w-full justify-center hover:text-blue-700 transition-colors"
              >
                <InfoIcon /> Sobre
              </Link>
              <Link 
                href="/empresas" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-3 text-lg w-full justify-center hover:text-blue-700 transition-colors"
              >
                <FactoryIcon /> Empresas
              </Link>
              <Link 
                href="/estrutura" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-3 text-lg w-full justify-center hover:text-blue-700 transition-colors"
              >
                <PoolIcon /> Estrutura
              </Link>
              <Link 
                href="/contato" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-3 text-lg w-full justify-center hover:text-blue-700 transition-colors"
              >
                <CallIcon /> Contato
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
