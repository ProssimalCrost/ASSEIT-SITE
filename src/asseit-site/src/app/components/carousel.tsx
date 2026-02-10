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
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [mounted, images.length]);

  if (!mounted) {
    return <div style={{ height: "300px", width: "100%", background: "#000" }} />;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Container do carrossel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1300px",
          aspectRatio: "16 / 9",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}
