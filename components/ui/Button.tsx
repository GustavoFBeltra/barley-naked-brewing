"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-amber text-dark hover:shadow-lg hover:shadow-gold/30",
    secondary:
      "bg-warm-brown text-cream border border-gold/30 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10",
    outline:
      "bg-transparent text-gold border-2 border-gold hover:bg-gold/10",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shine effect on hover */}
      <span className="absolute inset-0 w-full h-full">
        <span
          className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out ${
            variant === "primary"
              ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
              : "bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          }`}
        />
      </span>
      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 350, damping: 15, mass: 0.5 },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    if (external) {
      return (
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...motionProps}
          className="inline-block"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedStyles}
          >
            {content}
          </a>
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
        className="inline-block"
      >
        <Link href={href} className={combinedStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
      className="inline-block"
    >
      <button type={type} onClick={onClick} className={combinedStyles}>
        {content}
      </button>
    </motion.div>
  );
}
