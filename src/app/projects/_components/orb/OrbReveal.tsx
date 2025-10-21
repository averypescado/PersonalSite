"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react"
import Orb from "./Orb";

type OrbRevealProps = {
  threshold?: number; // pixels to scroll before showing
};

export default function OrbReveal({ threshold = 200 }: OrbRevealProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShow(y > threshold);
    };

    // Run once on mount in case we refresh mid-page
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  if (!show) return null;
  return (
    <AnimatePresence>
      {show && <Orb use="home" />} {/* Orb handles its own initial/animate/exit */}
    </AnimatePresence>
  );
  
  
  
  
} 