"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Nudgewidget.module.css";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { inView, animate } from "motion"; // ⬅️ from "motion"




export default function NudgeWidget() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const clip = useMotionValue(100); // start fully hidden
    const clipTpl = useMotionTemplate`inset(0px ${clip}% 0px 0px)`;
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!revealRef.current) return;
        const stop = inView(revealRef.current, () => {
          animate(clip, 0, { duration: 0.8, ease: "easeOut", delay: 0.1 });
        }, { amount: 0.3 }); // ~30% visible
      
        // return () => stop(); // cleanup observer
      }, [clip]);







  return (
    <div className={styles.sideby}>
        <div className={styles.sect}>
            <div className={styles.head}> 
                <div className={styles.big}>
                    2x the click through rate
                </div>
                <div className={styles.body}>
                Twice as many people engage with this promo vs a standard one for the same feature
                </div>
            </div>
            
            <div className={styles.graph}>
                <div className={styles.row}>
                    <div className={styles.bar1}>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.bar2}>
                    </div>
                    <div className={styles.spacer}>
                    </div>
                </div>
            </div>
            

        </div>
        <div className={styles.divider}></div>

        <div className={styles.sect}>
            <div className={styles.head}> 
                <div className={styles.big}>
                    Double-digit increase in usage
                </div>
                <div className={styles.body}>
                    Directly drove an over 15% increase in overall feature usage
                </div>
            </div>
            <motion.div
                ref={revealRef}
                className={styles.line}
                style={{ clipPath: clipTpl }}   // ⬅️ animated clip-path
                >
                <Image
                    src="/grapp.png"
                    alt="Line graph showing 15% increase"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </motion.div>
                
        </div>



    </div>
  );
}
