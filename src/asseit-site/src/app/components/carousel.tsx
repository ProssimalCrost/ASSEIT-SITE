"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledH1 = styled("h1")`
  background: rgba(0, 162, 255, 0.67);
  border-radius: 12px;
  padding: 5px;
  max-width: 800px;
   `;
  
const StyledH2 = styled("h2")`
  background: rgba(56, 59, 240, 0.69);
  border-radius: 12px;   
  padding: 10px;
  max-width: 500px;
  max-height: 90px;
  font-weight: 500;
`;

const Button = styled("button")`
  background-color: #062077ff;
  color: white;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #4338ca;
  }
`;

export default function BackgroundCarousel() {
  const images = [
    "https://picsum.photos/1600/900?1",
    "https://picsum.photos/1600/900?2",
    "https://picsum.photos/1600/900?3",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>
      ))}

      {/* conteúdo opcional sobre o fundo */}
      <div
        style={{
          position: "relative",
          zIndex: 0,
          color: "white",
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
      
        <div className="flex flex-col gap-8">
          <div className="justify-center items-center flex flex-col">
            <StyledH1>
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-6">
                Associação das Empresas Industriais de Timóteo
            </h1>
            </StyledH1>
          </div>
          
          <div className="justify-center items-center flex flex-col">
          <StyledH2>
           <h1 className="text-4xl text-white text-lg mb-8 drop-shadow-md text-center">
              Unindo forças para o desenvolvimento industrial e comunitário de
              Timóteo.
           </h1>
           </StyledH2>
           <Button>
             <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">Conheça a ASSEIT</button>
           </Button>
          </div>
        
        </div>
      
      </div>
    </div>
  );
}
