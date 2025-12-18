// Flowchart.tsx
"use client"

import { motion } from "motion/react"
import { cubicBezier} from "motion"; // add this
import styles from "./flowchart.module.css";
import Image from "next/image";

const T = 1.6;          // total cycle duration
const lead = 0.25;      // A leads by 250ms
const ease = cubicBezier(0.22, 1, 0.36, 1); // smooth ease


export default function Flowchart() {
  return (
    <div className={styles.holder}>
      <motion.svg 
        initial="hidden"
        animate="visible"
        width="848" 
        height="500" 
        viewBox="0 0 848 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{width: "100%", height: "auto", display: "block" }}
      >
        <g id="cleanedsvg">

        <g id="chatorb">
          <rect x="492.181" y="44.8393" width="219.637" height="93.3215" rx="30.8028" fill="white"/>
          <rect x="492.181" y="44.8393" width="219.637" height="93.3215" rx="30.8028" stroke="#E5E7EB" strokeWidth="2.6785"/>
        </g>
        <g id="chromeorb">
          <rect x="493.319" y="203.319" width="195.361" height="93.3611" rx="30.3472" fill="white"/>
          <rect x="493.319" y="203.319" width="195.361" height="93.3611" rx="30.3472" stroke="#E5E7EB" strokeWidth="2.63889"/>
        </g>
        <g id="eventsorb">
          <rect x="491.972" y="361.84" width="230.056" height="93.319" rx="30.8314" fill="white"/>
          <rect x="491.972" y="361.84" width="230.056" height="93.319" rx="30.8314" stroke="#E5E7EB" strokeWidth="2.68099"/>
        </g>

        <path
          id="line1"
          d="M240 233H285.228C305.11 233 321.228 216.882 321.228 197V128C321.228 108.118 337.346 92 357.228 92H491"
          stroke="#E5E7EB"
          strokeWidth="3"
        />
        <motion.path
          id="line1"
          d="M240 233H285.228C305.11 233 321.228 216.882 321.228 197V128C321.228 108.118 337.346 92 357.228 92H491"
          stroke="#FF8B64"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease:  cubicBezier(0.22, 1, 0.36, 1),
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 3,
          }}
        />



        <line
          x1="243" y1="248.5" x2="492" y2="248.5"
          stroke="#E5E7EB" strokeWidth="3"
        />

        <motion.line
          x1="240" y1="248.5" x2="492" y2="248.5"
          stroke="#FF8B64" strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease:  cubicBezier(0.22, 1, 0.36, 1),
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 3,
          }}
        />



        <path
          d="M240 267H284.228C304.11 267 320.228 283.118 320.228 303V372C320.228 391.882 336.346 408 356.228 408H490"
          stroke="#E5E7EB" strokeWidth="3"
        />

        <motion.path
          d="M240 267H284.228C304.11 267 320.228 283.118 320.228 303V372C320.228 391.882 336.346 408 356.228 408H490"
          stroke="#FF8B64" strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease:  cubicBezier(0.22, 1, 0.36, 1),
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 3,
          }}
        />



        

        <g id="googleorb">
          <path d="M94.8047 153.195H195.195C220.937 153.195 241.805 174.063 241.805 199.805V300.195C241.805 325.937 220.937 346.805 195.195 346.805H94.8047C69.063 346.805 48.1954 325.937 48.1953 300.195V199.805C48.1954 174.063 69.063 153.195 94.8047 153.195Z" fill="white"/>
          <path d="M94.8047 153.195H195.195C220.937 153.195 241.805 174.063 241.805 199.805V300.195C241.805 325.937 220.937 346.805 195.195 346.805H94.8047C69.063 346.805 48.1954 325.937 48.1953 300.195V199.805C48.1954 174.063 69.063 153.195 94.8047 153.195Z" stroke="#E5E7EB" 
          strokeWidth="2.39024"/>

        </g>



        </g>
      </motion.svg>
      <Image 
            src="/mlogo.png"
            width={264}
            height={264}
            alt="Google Meet logo"
            className={styles.logo}
      />
      <Image 
            src="/brandlive.png"
            width={572}
            height={494}
            alt="Brandlive logo"
            className={styles.top}
      />
      <Image 
            src="/gchat.png"
            width={552}
            height={568}
            alt="Google chat logo"
            className={styles.middle}
      />

      <Image 
            src="/chrome.png"
            width={768}
            height={768}
            alt="Google chrome logo"
            className={styles.bottom}
      />   

      <div className={styles.brandlive}>
        Brandlive events
      </div> 
      <div className={styles.chat}>
        Google chat
      </div> 

      <div className={styles.chrome}>
        Google Chrome
      </div> 
    </div>

  );
}
