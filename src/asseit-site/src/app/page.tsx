"use client";
import styled from "styled-components";
import Carousel from "./components/carousel";
import NoticiasSection from "./components/noticias";
import Empresas from "./empresas/empresas";
import Modalidades from "./modalidades/modalidades";
import Contato from "./contato/contato";
import Link from "next/link";

const StyleB = styled("button")`
  background-color: #011f81ff;
  color: white;
  font-weight: 500;
  padding: 10px 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #00a2ffff;
  }`;  

export default function HomePage() {
  return (
    <>
      {/* === Seção principal com o carrossel === */}
      <main className="relative h-[790px]  ">
        {/* Fundo com o carrossel */}
        <section className="absolute inset-0 z-0">
          <Carousel />
        </section>

        {/* Conteúdo sobre o carrossel */}
      <section className="relative py-20  ">
        <div className="relative z-5 flex flex-col justify-center items-center text-center gap-2 pb-2 mx-2 md:mx-10 lg:mx-10 rounded-lg pb-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg box-border max-w-2xl">
            Associação das Empresas Industriais de Timóteo
          </h1>
          <h2 className="text-2xl text-white mb-6 drop-shadow-md max-w-3xl">
            Unindo forças para o desenvolvimento industrial e comunitário de Timóteo.
          </h2>
          <StyleB><a href="/estrutura">Conheça a ASSEIT</a></StyleB>
        </div>
      </section>
      </main>

    {/*-------Anchor Link*--------*/}
      <section id="noticias">
        <NoticiasSection/>
      </section>
      <section id="empresas">
        <Empresas/>
      </section>
      <section id="modalidades">
        <Modalidades/>
      </section>
      <section id="contato">
        <Contato/>
      </section>
      {/* === Seção abaixo do carrossel === */}

      

    </>
  );
}
