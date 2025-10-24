"use client";
import { useEffect, useState } from "react";

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
        position: "absolute",
        height: "60vh",
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
      </div>  
    </div>
  );
}
