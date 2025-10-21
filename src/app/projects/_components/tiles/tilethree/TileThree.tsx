"use client"

import shared from "../Tiles.module.css"
import individual from "./Tilethree.module.css"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react";

const MotionImage = motion(Image);

export default function TileThree() {
  const [hover, setHover] = useState(false)
    return(
    <div className={`${shared.tile} ${individual.tile}`}>
      <Link 
        href="/projects/tilethree"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
      

        <div className={`${shared.description} ${individual.description}`}>
            <div className={shared.subtitle}>
            Take notes with Gemini
            </div>
            <div className={shared.title}>
            Helping people who can&apos;t make the meeting
            </div>
        </div>
        <div className={shared.thumbnail}>
                <Image
                    src="/video@3x.png"
                    alt=""
                    width={1536}
                    height={1368}      // keep aspect; won't actually render this tall
                    className={individual.tnwg}
                    aria-hidden="true"
                    quality={90}
                  />

                <Image
                    src="/badges@3x.png"
                    alt=""
                    width={210}
                    height={102}
                      // keep aspect; won't actually render this tall
                    className={individual.badges}
                    aria-hidden="true"
                    quality={90}
                  />

                <MotionImage
                    src="/callout.png"
                    alt=""
                    width={480}
                    height={378}
                      // keep aspect; won't actually render this tall
                    className={individual.callout}
                    aria-hidden="true"
                    quality={90}
                    animate={{ scale: hover ? 1.05  : 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
        </Link>
      </div>
    )
}