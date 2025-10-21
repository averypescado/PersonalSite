"use client"

import shared from "../Tiles.module.css"
import individual from "./TileSix.module.css"
import AiCards from "../../Aicards/Aicards"
import MiniExtension from "../../miniextension/MiniExtension"
import { useState } from "react"
import Link from "next/link"
import Marquee from "../../marquee/Marquee"

export default function TileSix() {
    const [hover, setHover] = useState(false)

    return(
    <div className={`${shared.tile} ${individual.tile}`}>
        <Link 
            href="/projects/informedk12"
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
        <div className={individual.gradient}></div>
        <div className={individual.gradientright}></div>
        <div className={shared.description}>
            <div className={shared.subtitle}>
            School district workflows
            </div>
            <div className={shared.title}>
            Helping school districts manage digital forms & workflows
            </div>
        </div>
        <div className={shared.thumbnail}>
          <Marquee />
                 
        </div>
        </Link>
    </div>
    )
}