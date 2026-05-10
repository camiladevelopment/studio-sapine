"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  "software sob medida",
  "arquitetura refinada",
  "plataformas inteligentes",
];

export default function HomeHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[#C6A25A]/10 bg-black text-white">
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,162,90,0.05),transparent_58%)]" />

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          pt-24
          pb-16
          sm:px-8
          md:px-12
          md:pt-32
          md:pb-20
          lg:px-20
        "
      >
        <div className="max-w-6xl">
          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mb-6
              text-[9px]
              uppercase
              tracking-[0.38em]
              text-[#C6A25A]/80
              md:text-[10px]
            "
          >
            Sapine
          </motion.p>

          {/* HERO */}
          <div className="font-[family-name:var(--font-playfair)] text-white">
            {/* TOPO */}
            <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[320px]
            text-[clamp(2.8rem,13vw,3.9rem)]
            font-normal
            leading-[0.92]
            tracking-[-0.045em]
            sm:max-w-[420px]
            md:max-w-none
            md:text-[clamp(3.8rem,5vw,5rem)]
          "
        >
          Studio Sap
          <span className="relative inline-block leading-none text-[#D4AF5A]">
          i

          {/* cobre o pingo original */}
          <span
            className="
              absolute
              left-1/2
              top-0
              z-[5]
              h-[0.32em]
              w-[0.22em]
              -translate-x-1/2
              bg-black
            "
          />

          {/* novo pingo glow */}
          <span
            className="
              absolute
              left-1/2
              top-[0.02em]
              z-10
              h-[0.16em]
              w-[0.16em]
              -translate-x-1/2
              rounded-full
              bg-[#D4AF5A]
              shadow-[0_0_10px_rgba(212,175,90,1),0_0_24px_rgba(212,175,90,0.95)]
            "
          />
        </span>
          ne
        </motion.h1>

            {/* FRASE DINÂMICA */}
            <div
              className="
                relative
                mt-2
                min-h-[62px]
                sm:min-h-[70px]
                md:min-h-[82px]
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    max-w-[320px]
                    text-[clamp(2.8rem,13vw,3.9rem)]
                    font-medium
                    leading-[0.92]
                    tracking-[-0.045em]
                    text-[#C6A25A]
                    sm:max-w-[420px]
                    md:max-w-none
                    md:whitespace-nowrap
                    md:text-[clamp(3.8rem,5vw,5rem)]
                  "
                >
                  {PHRASES[phraseIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FECHAMENTO */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[320px]
                text-[clamp(2.8rem,13vw,3.9rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.045em]
                sm:max-w-[420px]
                md:max-w-[760px]
                md:text-[clamp(3.8rem,5vw,5rem)]
              "
            >
              para negócios exigentes.
            </motion.h2>
          </div>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.8,
            }}
            className="
              mt-7
              max-w-[560px]
              text-[14px]
              leading-[1.9]
              text-white/50
              md:text-[15px]
            "
          >
            Sistemas, interfaces e experiências digitais
            construídas com precisão estética, fluxos
            inteligentes e visão de produto.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.28,
              duration: 0.8,
            }}
            className="
              relative
              z-10
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <Link
              href="https://wa.me/5551980165791"
              className="
                inline-flex
                h-[50px]
                items-center
                justify-center
                border
                border-[#C6A25A]/30
                bg-[#C6A25A]/[0.03]
                px-8
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white
                transition-all
                duration-300
                hover:border-[#C6A25A]/60
                hover:bg-[#C6A25A]/10
              "
            >
              Falar com especialista
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BORDER */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C6A25A]/10" />
    </section>
  );
}