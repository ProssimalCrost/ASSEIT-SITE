"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";


const Button = styled("button")`
  background-color: #061957ff;
  color: white;
  font-weight: 500;
  padding: 10px 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #00a2ffff;
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

        <div className="flex flex-col gap-8 bg-gray-800 bg-opacity-60 p-2 rounded-lg mx-2 md:mx-20 lg:mx-40">
          <div className="justify-center items-center flex flex-col">
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-6">
                Associação das Empresas Industriais de Timóteo
            </h1>

          </div>
          <div className="justify-center items-center flex flex-col">
           <h1 className="text-2xl text-white text-lg mb-8 drop-shadow-md text-center">
              Unindo forças para o desenvolvimento industrial e comunitário de
              Timóteo.
           </h1>
  
           <Button>
             <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">Conheça a ASSEIT</button>
           </Button>
          </div>
        
        </div>
      
      </div>
    </div>
  );
}
