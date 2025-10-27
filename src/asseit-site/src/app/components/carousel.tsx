"use client";
import { useEffect, useState } from "react";

export default function BackgroundCarousel() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "https://picsum.photos/1600/900?1",
    "https://picsum.photos/1600/900?2",
    "https://picsum.photos/1600/900?3",
  ];

  useEffect(() => {
    setMounted(true); // só marca quando está montado no cliente
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [mounted, images.length]);

  if (!mounted) {
    // Evita renderizar antes da hidratação
    return (
      <div
        style={{
          position: "absolute",
          height: "60vh",
          width: "100%",
          background: "black",
        }}
      />
    );
  }

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
    </div>
  );
}
