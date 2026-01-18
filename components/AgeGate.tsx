"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [showDenied, setShowDenied] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleYes = () => {
    setIsExiting(true);
    setTimeout(() => {
      localStorage.setItem("ageVerified", "true");
      setIsVerified(true);
    }, 600);
  };

  const handleNo = () => {
    setShowDenied(true);
  };

  // Still loading
  if (isVerified === null) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/barleynaked_logo.png"
              alt="Barley Naked Brewing"
              width={100}
              height={100}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // User is verified
  if (isVerified) {
    return <>{children}</>;
  }

  // Denied message
  if (showDenied) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center p-4">
        <motion.div
          className="bg-dark-brown border border-red-500/30 rounded-2xl p-8 max-w-md text-center shadow-2xl shadow-red-500/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <motion.div
            className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
          <motion.h2
            className="text-2xl font-heading text-cream mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sorry, You Must Be 21 or Older
          </motion.h2>
          <motion.p
            className="text-cream/70 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            You must be of legal drinking age to enter this website. Please come back when you&apos;re 21!
          </motion.p>
          <motion.a
            href="https://www.google.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-amber text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Leave Site
          </motion.a>
        </motion.div>
      </div>
    );
  }

  // Age verification modal
  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 bg-dark flex items-center justify-center p-4 overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <motion.div
            className="relative bg-dark-brown/90 backdrop-blur-xl border border-gold/30 rounded-2xl p-8 sm:p-12 max-w-lg text-center shadow-2xl shadow-gold/10"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", damping: 15 }}
              className="mb-6"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/barleynaked_logo.png"
                  alt="Barley Naked Brewing Company"
                  width={140}
                  height={140}
                  className="mx-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-2xl sm:text-3xl font-heading text-shimmer mb-2">
                Welcome to Barley Naked
              </h1>
              <h2 className="text-xl font-heading text-cream mb-8">
                Brewing Company
              </h2>
            </motion.div>

            {/* Age Question */}
            <motion.p
              className="text-cream/80 text-lg sm:text-xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Are you 21 years of age or older?
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={handleYes}
                className="relative px-10 py-4 bg-gradient-to-r from-gold to-amber text-dark font-semibold uppercase tracking-wider rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Yes, I Am</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                onClick={handleNo}
                className="px-10 py-4 bg-transparent text-cream border-2 border-cream/30 font-semibold uppercase tracking-wider rounded-lg hover:border-cream/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                No, I&apos;m Not
              </motion.button>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              className="text-cream/40 text-xs mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              By entering this site, you agree to our Terms of Service and Privacy Policy.
              <br />
              Please drink responsibly.
            </motion.p>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/30 rounded-br-lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
