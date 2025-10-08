"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; y?: number; };
export default function Reveal({ children, delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}   // anima 1x quando 20% do bloco entra
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
