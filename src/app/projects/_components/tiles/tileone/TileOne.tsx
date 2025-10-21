"use client"

import shared from "../Tiles.module.css"
import individual from "./Tileone.module.css"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react";

const MotionImage = motion(Image);

export default function TileOne() {
  const [hover, setHover] = useState(false)
    return(
    <div className={`${shared.tile} ${individual.tile}`}>
      <Link 
        href="/projects/tileone" 
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        className={`${shared.tileone} ${shared.tile}`} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
      
        <div className={shared.description}>
            <div className={shared.subtitle}>
                Chrome pip
            </div>
            <div className={shared.title}>
                 Seamless presenting and multitasking
            </div>
        </div>
        <div className={shared.thumbnail}>
          <Image
            src="/CWindow.png"
            alt="test"
            width={3840}
            height={2661}
            className={individual.chromeWindow}
            quality={90}
            priority
          />
          <MotionImage
            src="/pip.png"
            alt=""
            width={351}
            height={657}
            className={individual.pip}
            aria-hidden="true"
            quality={90}
            animate={{ y: hover ? -12 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </Link>
    </div>
    )
}