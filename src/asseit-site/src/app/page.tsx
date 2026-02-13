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
        <section className="absolute inset-0 z-0">
          <Carousel />
        </section>
      </main>

      {/*-------Anchor Link*--------*/}
      <section id="noticias">
        <NoticiasSection />
      </section>
      <section id="empresas">
        <Empresas />
      </section>
      <section id="modalidades">
        <Modalidades />
      </section>
      <section id="contato">
        <Contato />
      </section>
      {/* === Seção abaixo do carrossel === */}



    </>
  );
}
