// projects/_components/miniflowchart/MiniFlowchart.tsx
"use client";

import { motion } from "motion/react";
import { cubicBezier } from "motion";
import styles from "./miniflowchart.module.css";
import Image from "next/image";

const ease = cubicBezier(0.22, 1, 0.36, 1);

type Props = { hovered?: boolean };

export default function MiniFlowchart({ hovered = false }: Props) {
  const draw = {
    duration: 0.8,
    ease,
    repeat: hovered ? Infinity : 0, // loop while hovered
    repeatType: "mirror" as const,
    repeatDelay: 1.8,
  };

  return (
    <div className={styles.holder}>
      <motion.svg
        width="440"
        height="136"
        viewBox="0 0 440 136"
        fill="none"
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        initial={false}
      >
        <g clipPath="url(#clip0_838_52630)">
          {/* right boxes (static) */}
          <rect x="0.543301" y="23.5433" width="88.9134" height="88.9134" rx="23.4567" fill="white"/>
          <rect x="0.543301" y="23.5433" width="88.9134" height="88.9134" rx="23.4567" stroke="#E5E7EB" strokeWidth="1.0866"/>
          <rect x="354.5" y="0.5"  width="45" height="39" rx="9.24116" fill="white"/><rect x="354.5" y="0.5"  width="45" height="39" rx="9.24116" stroke="#E5E7EB"/>
          <rect x="354.5" y="48.5" width="45" height="39" rx="9.09709" fill="white"/><rect x="354.5" y="48.5" width="45" height="39" rx="9.09709" stroke="#E5E7EB"/>
          <rect x="354.5" y="96.5" width="45" height="39" rx="9.24116" fill="white"/><rect x="354.5" y="96.5" width="45" height="39" rx="9.24116" stroke="#E5E7EB"/>

          {/* grey baseline connectors */}
          <line x1="90" y1="67.5" x2="354" y2="67.5" stroke="#E5E7EB"/>
          <path d="M90 77H115.008C121.034 77 125.918 81.8847 125.918 87.9104V105.09C125.918 111.115 130.803 116 136.829 116H354" stroke="#E5E7EB"/>
          <path d="M90 59H115.008C121.034 59 125.918 54.1153 125.918 48.0896V30.9104C125.918 24.8847 130.803 20 136.829 20H354" stroke="#E5E7EB"/>

          {/* animated overlays (draw when hovered) */}
          <motion.line
            x1="90" y1="67.5" x2="354" y2="67.5"
            stroke="#FF8B64" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            transition={{ ...draw, delay: 0.05 }}
          />
          <motion.path
            d="M90 77H115.008C121.034 77 125.918 81.8847 125.918 87.9104V105.09C125.918 111.115 130.803 116 136.829 116H354"
            stroke="#FF8B64" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            transition={{ ...draw, delay: 0.12 }}
          />
          <motion.path
            d="M90 59H115.008C121.034 59 125.918 54.1153 125.918 48.0896V30.9104C125.918 24.8847 130.803 20 136.829 20H354"
            stroke="#FF8B64" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            transition={{ ...draw, delay: 0.20 }}
          />
        </g>
        <defs>
          <clipPath id="clip0_838_52630">
            <rect width="440" height="136" fill="white"/>
          </clipPath>
        </defs>
      </motion.svg>
      <Image 
            src="/mlogo.png"
            width={264}
            height={264}
            alt="meet logo"
            className={styles.logo}
      />
      <Image 
            src="/brandlive.png"
            width={572}
            height={494}
            alt="meet logo"
            className={styles.top}
      />
      <Image 
            src="/gchat.png"
            width={552}
            height={568}
            alt="meet logo"
            className={styles.middle}
      />

      <Image 
            src="/chrome.png"
            width={768}
            height={768}
            alt="meet logo"
            className={styles.bottom}
      />   
      

      
    </div>
  );
}
