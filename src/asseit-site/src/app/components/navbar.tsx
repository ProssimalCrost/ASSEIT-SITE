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
import LoginIcon from "@mui/icons-material/Login";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

//Criar um StyledComponet para aumentar os botoes do menu dektop

  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/imagens/logo1.png"
            alt="Logo ASSEIT"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li>
            <Link href="#home" className="flex items-center gap-1 hover:text-blue-700 transition">
              <HomeIcon fontSize="small" /> Home
            </Link>
          </li>
          <li>
            <Link href="#noticias" className="flex items-center gap-1 hover:text-blue-700 transition">
              <InfoIcon fontSize="small" /> Noticias
            </Link>
          </li>
          <li>
            <Link href="#empresas" className="flex items-center gap-1 hover:text-blue-700 transition">
              <FactoryIcon fontSize="small" /> Empresas
            </Link>
          </li>
          <li>
            <Link href="#modalidades" className="flex items-center gap-1 hover:text-blue-700 transition">
              <PoolIcon fontSize="small" /> Modalidades
            </Link>
          </li>
          <li>
            <Link href="#contato" className="flex items-center gap-1 hover:text-blue-700 transition">
              <CallIcon fontSize="small" /> Contato
            </Link>
          </li>

          {/* Área do Associado */}
          <li>
            <Link
              href="https://csplus.com.br/auth?cliente=d2e82682af0d4084b42697ad294592cd&acesso=associado"
              className="
                flex items-center gap-2
                bg-blue-900 text-white
                px-5 py-3 rounded-xl
                hover:bg-blue-700 transition-colors
                shadow-md
              "
            >
              <LoginIcon fontSize="small" />
              Área do Associado
            </Link>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-900 z-50 ">
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </nav>

      {/* Overlay Mobile */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden "
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Mobile */}
          <div className="
            fixed inset-0 min-h-screen 
            flex items-center
            justify-center md:hidden z-50">
            <div
              className="
                bg-white backdrop-blur-lg
                rounded-2xl shadow-2xl
                w-full max-w-sm mx-4
                p-6
                flex flex-col items-center gap-6
                text-blue-900 font-medium"
            >
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex gap-3 text-lg">
                <HomeIcon /> Home
              </Link>
              <Link href="#noticias" onClick={() => setMenuOpen(false)} className="flex gap-3 text-lg">
                <InfoIcon /> Noticias
              </Link>
              <Link href="#empresas" onClick={() => setMenuOpen(false)} className="flex gap-3 text-lg">
                <FactoryIcon /> Empresas
              </Link>
              <Link href="#modalidades" onClick={() => setMenuOpen(false)} className="flex gap-3 text-lg">
                <PoolIcon /> Modalidades
              </Link>
              <Link href="#contato" onClick={() => setMenuOpen(false)} className="flex gap-3 text-lg">
                <CallIcon /> Contato
              </Link>

              {/* Área do Associado Mobile */}
              <Link
                href="https://csplus.com.br/auth?cliente=d2e82682af0d4084b42697ad294592cd&acesso=associado"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2 w-full flex items-center justify-center gap-2
                  bg-blue-900 text-white
                  py-3 rounded-xl
                  hover:bg-blue-700 transition
                "
              >
                <LoginIcon />
                Área do Associado
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
