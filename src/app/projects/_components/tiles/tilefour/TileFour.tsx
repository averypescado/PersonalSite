"use client"

import shared from "../Tiles.module.css"
import Link from "next/link"
import { useState } from "react"
import individual from "./Tilefour.module.css"
import MiniFlowchart from "../../miniflowchart/MiniFlowchart"
export default function TileFour() {
    const [hover, setHover] = useState(false)

    return(

            <div className={`${shared.tile} ${individual.tile}`}>
            <Link 
            href="/projects/tilefour"
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            style={{ textDecoration: 'none', color: 'inherit' }}
            >


                <div className={shared.description}>
                    <div className={shared.subtitle}>
                    Mini meet platform
                    </div>
                    <div className={shared.title}>
                    Expanding Meets reach and improving developer velocity
                    </div>
                </div>
                <div className={shared.thumbnail}>
                <MiniFlowchart hovered={hover} />    
                </div>
                </Link>
            </div>
                

    )
}