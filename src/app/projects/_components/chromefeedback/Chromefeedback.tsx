"use client";
import styles from "./Chromefeedback.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CirclePlus } from "lucide-react";

/** Hook: true when viewport ≥ 1000px */
function useIsDesktop(breakpoint = 1000) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const apply = () => setIsDesktop(m.matches);
    apply();
    m.addEventListener?.("change", apply);
    return () => m.removeEventListener?.("change", apply);
  }, [breakpoint]);
  return isDesktop;
}

export default function Chromefeedback() {
  const [selected, setSelected] = useState(0);
  const isDesktop = useIsDesktop(1000);

  const images: Record<number, string> = {
    0: "/demo0.gif",
    1: "/demo1.png",
    2: "/demo2.png",
    3: "/demo3.png",
  };

  /** Click handler: on desktop, toggle expand; on mobile, just select */
  const handleClick = (id: number) => {
    if (isDesktop) setSelected((s) => (s === id ? 5 : id));
    else setSelected(id);
  };

  /** Helper to render one item */
  const Item = (id: number, title: string, content: React.ReactNode) => (
    <motion.div key={id} layout className={styles.feedback} onClick={() => handleClick(id)}>
      <motion.div
        layout="position"
        className={styles.headerRow}
        style={{ display: "flex", gap: 8, alignItems: "flex-start", cursor: "pointer" }}
      >
        <motion.div
          /* rotate only on desktop since only desktop expands */
          animate={{ rotate: isDesktop && selected === id ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{ lineHeight: 0, opacity: selected === id ? 1 : 0.6 }}
        >
          <CirclePlus color="grey" size={18} />
        </motion.div>
        <div><b>{title}</b></div>
      </motion.div>

      {/* Expandable content ONLY on desktop */}
      {isDesktop && (
        <AnimatePresence initial={false}>
          {selected === id && (
            <motion.div
              key={`${id}-expanded`}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={styles.expando}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );

  return (
    <div className={styles.flex}>
      <motion.div layout className={styles.column}>
        {Item(0, "Overview",
          <p>Required people to find the non-obvious entry point, and was limited once people were in it.</p>
        )}
        {Item(1, "Not flexible enough",
          <div>Fixed aspect ratio<br />Small max size</div>
        )}
        {Item(2, "Not discoverable/contextual",
          <div>&quot;Why do I have to select when presenting? Why doesn&apos;t it automatically apply?&quot;</div>
        )}
        {Item(3, "Limited feature set",
          <div>Only toggling audio and video and hangup.</div>
        )}
        {Item(4, "One-off infrastructure",
          <div>Hard to build on and maintain</div>
        )}
      </motion.div>

      <div className={styles.demo}>
        <Image
          src={images[Math.min(selected, 3) as 0 | 1 | 2 | 3]}  /* guard when selected==5 */
          alt="Screenshot of a chrome browser with picture in picture 1.0 circled "
          fill
          style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
        />
      </div>
    </div>
  );
}
