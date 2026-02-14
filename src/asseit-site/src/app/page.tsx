"use client";
import styled from "styled-components";
import Carousel from "./components/carousel";
import NoticiasSection from "./noticias/noticias";
import Empresas from "./empresas/empresas";
import Modalidades from "./modalidades/modalidades";
import Contato from "./contato/contato";
import Link from "next/link";



export default function HomePage() {
  return (
    <>
      {/* === Seção principal com o carrossel === */}
      <main className="relative h-[790px]" id="home" >
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
