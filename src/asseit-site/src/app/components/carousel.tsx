"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BackgroundCarousel() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  const StyleB = styled.button`
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

  const images = [
    "https://picsum.photos/1600/900?1",
    "https://picsum.photos/1600/900?2",
    "https://picsum.photos/1600/900?3",
  ];


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [mounted, images.length]);

  if (!mounted) return null;

  return (
    <section style={{ width: "100%", height: "100%", padding: "10px", display: "flex", justifyContent: "center" }} id="home">
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1900px",
          // No mobile, o aspectRatio 16/9 é muito pequeno. 
          // Usamos minHeight para garantir que o texto sempre caiba.
          minHeight: "600px",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Camada das Imagens de Fundo */}
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${src})`, // Escurece um pouco a imagem para o texto ler melhor
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 1,
            }}
          />
        ))}

        {/* Camada do Texto (Fica por cima de tudo) */}
        <div style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px"
        }}>
          <h1 style={{
            fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
            fontWeight: "bold",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
          }}>
            Associação das Empresas <br /> Industriais de Timóteo
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "600px" }}>
            Unindo forças para o desenvolvimento industrial e comunitário de Timóteo.
          </p>
          <StyleB>
            <button>
                Aplicativo ASSEIT
            </button>
          </StyleB>
        </div>
      </div>
    </section>
  );
}