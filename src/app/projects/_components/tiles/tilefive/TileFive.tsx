"use client"

import shared from "../Tiles.module.css"
import individual from "./TileFive.module.css"
import AiCards from "../../Aicards/Aicards"
import MiniExtension from "../../miniextension/MiniExtension"
import { useState } from "react"
import Link from "next/link"

export default function TileFive() {
    const [hover, setHover] = useState(false)

    return(
    <div className={`${shared.tile} ${individual.tile}`}>
        <Link
            href="/projects/extension"
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
        <div className={shared.description}>
            <div className={shared.subtitle}>
            Chrome Extension
            </div>
            <div className={shared.title}>
            One click simple explanations
            </div>
        </div>
        <div className={shared.thumbnail}>
          <MiniExtension hover= {hover}  />
                 
        </div>
        </Link>
    </div>
    )
}