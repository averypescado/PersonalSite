"use client";

import styles from "./MiniExtension.module.css"
import { useState } from "react";
import { motion } from "motion/react";



type Props = { hover?: boolean };
export default function MiniExtension({ hover = false }: Props) {

  return (
    <div
      className={styles.container}
    >
      <div className={styles.menu}>
        <motion.div
            className={styles.option} 
            animate={{ filter: hover ? "blur(3px)" : "blur(0px)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Copy
        </motion.div>
        <motion.div
            className={styles.option} 
            animate={{ filter: hover ? "blur(3px)" : "blur(0px)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Print...
        </motion.div>
        <motion.div
          className={styles.special}
          animate={{ x: hover ? -12 : 0 }}       // instead of margin-left:-16px
          transition={{ type: "spring", stiffness: 600, damping: 34, mass: 0.5 }}
        >
          Explain to me like I&apos;m ten
        </motion.div>
        <motion.div
            className={styles.option} 
            animate={{ filter: hover ? "blur(3px)" : "blur(0px)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Translate to English
        </motion.div>
      </div>
    </div>
  );
}
