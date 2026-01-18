"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BeerBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < 20; i++) {
      newBubbles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 10,
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            bottom: "-20px",
          }}
        />
      ))}
    </div>
  );
}
