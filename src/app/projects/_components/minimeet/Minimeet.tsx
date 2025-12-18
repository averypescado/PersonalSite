"use client"
import styles from "./minimeet.module.css"
import Image from "next/image"; 
import { motion } from "motion/react";

import {useState} from "react";

type TabKey = 0 | 1 | 2;

const TABS = [
  { key: 0 as TabKey, label: "Brandlive events" },
  { key: 1 as TabKey, label: "Google Chat" },
  { key: 2 as TabKey, label: "Chrome picture in picture" },
];



export default function Minimeet() {
    const [selected, setSelected] =useState<TabKey>(0);

    const getMenuItemClass = (index: number): string => {
      return selected === index 
          ? `${styles.menuItem} ${styles.active}` 
          : styles.menuItem;
    }

    const setBrandlive = () => {
      setSelected(0);
    }

    const setChat = () => {
      setSelected(1);
    }

    const setChrome = () => {
      setSelected(2);
    }

    function Brandlive() {
      return (
        <div className={styles.content}>
          <div className={styles.subhead}>Customizable large events</div>
          <p>
            <b>The Meet and Brandlive partnership gives Meet customers a solution for hosting online events with up to one million participants. </b>
            I worked with Brandlive to understand their product and large event needs, and collaborated with the Meet team on platform first ways to make a great large event experience.
          </p>
          <video
                width="800"
                height="450"
                autoPlay
                muted
                
                preload="metadata"
                className={styles.Blivevideo}>
              <source src="/Brandlive.mp4" type="video/mp4" />

          </video>
          
        </div>
      )
    }

    function Chat() {
      return (
        <div className={styles.content}>
          <div className={styles.subhead}>Meet in a single click</div>
          <p>
            <b>Huddles in Google Chat supports quick, audio first conversations.</b> This closed a key competitive gap with Slack and other messaging apps.
          </p>
          <div className={styles.chat}>
            <Image
              src="/startinghuddleingooglechat.gif"
              alt="start huddle"
              width={1278}
              height={797}
              className={styles.chatimage}
            />

          </div>
 
          
        </div>
      )
    }

    function Chrome() {
      return (
        <div className={styles.content}>
          <div className={styles.subhead}>Multitask seamlessly</div>
          <p>
            <b>Chrome picture in picture enables seamless presenting and multitasking from Meet.</b> It has millions of daily active users. I go into more details here.

          </p>
          <video
                width="1760"
                height="1080"
                autoPlay
                muted
      
                preload="metadata"
                className={styles.autopip}>
              <source src="/Autopip.mp4" type="video/mp4" />

          </video>
 
          
        </div>
      )
    }

  return (
    <div className={styles.demo}>
      <ul className={styles.cases}>
        {TABS.map((t) => {
          const isActive = selected === t.key;
          return (
            <li
              key={t.key}
              onClick={() => setSelected(t.key)}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                className={styles.activePill}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
              <span className={`${styles.menuLabel} ${isActive ? styles.activetext : ""}`}>{t.label}</span>
            </li>
          );
        })}
      </ul>


        <div className={styles.interac}>
          {selected == 0 ? <Brandlive /> : null}
          {selected == 1 ? <Chat /> : null}
          {selected == 2 ? <Chrome /> : null}
        </div>
    </div>

  );
} 