"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Beer } from "@/lib/beers";

interface BeerCardProps {
  beer: Beer;
  showDetails?: boolean;
  index?: number;
}

export default function BeerCard({ beer, showDetails = true, index = 0 }: BeerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotateX(-mouseY / 20);
    setRotateY(mouseX / 20);

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative h-full bg-dark-brown/80 rounded-xl p-6 overflow-hidden flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated glow that follows cursor */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 200, 43, 0.2), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border */}
        <div
          className={`absolute inset-0 rounded-xl border transition-all duration-300 pointer-events-none ${
            isHovered ? "border-gold/50 shadow-lg shadow-gold/10" : "border-gold/20"
          }`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.h3
                  className="text-gold font-heading text-xl"
                  animate={{ scale: isHovered ? 1.02 : 1 }}
                >
                  {beer.name}
                </motion.h3>
                <p className="text-amber text-sm mt-1">{beer.style}</p>
              </div>
              {beer.isGlutenFree && (
                <motion.span
                  className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded uppercase border border-green-500/30"
                  whileHover={{ scale: 1.1 }}
                >
                  GF
                </motion.span>
              )}
            </div>
            {showDetails && (
              <p className="text-cream/70 text-sm mt-3 leading-relaxed">
                {beer.description}
              </p>
            )}
          </div>

          {/* Stats - pushed to bottom */}
          <div className="mt-auto">
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cream/50">ABV</span>
                <motion.span
                  className="text-gold font-bold text-lg"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                >
                  {beer.abv}%
                </motion.span>
              </div>
              {beer.ibu && (
                <div className="flex items-center gap-2">
                  <span className="text-cream/50">IBU</span>
                  <motion.span
                    className="text-gold font-bold text-lg"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                  >
                    {beer.ibu}
                  </motion.span>
                </div>
              )}
            </div>

            {/* Awards */}
            {beer.awards && beer.awards.length > 0 && (
              <motion.div
                className="mt-4 pt-4 border-t border-gold/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {beer.awards.map((award, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                    <span className="text-cream/70">{award}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
