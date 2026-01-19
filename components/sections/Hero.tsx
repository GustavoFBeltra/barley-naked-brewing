"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import BeerBubbles from "@/components/animations/BeerBubbles";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/barleynaked_logo.png"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback background if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-brown via-dark to-dark-brown" />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50 z-[1]" />

      {/* Beer Bubbles Animation */}
      <div className="absolute inset-0 z-[2]">
        <BeerBubbles />
      </div>

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Logo with Float Animation - Large logo with text built-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="animate-float mb-8"
        >
          <Image
            src="/barleynaked_logo.png"
            alt="Barley Naked Brewing Company"
            width={500}
            height={500}
            className="mx-auto w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-cream/80 mb-10 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Craft Beer. Good Times. Great People.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button href="/menu" size="lg" className="group">
            <span className="relative z-10">View Our Beers</span>
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Visit Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gold/60 text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[3]" />
    </section>
  );
}
