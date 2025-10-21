import shared from "../Tiles.module.css"
import individual from "./TileTwo.module.css"
import AiCards from "../../Aicards/Aicards"
import Link from "next/link"
export default function TileTwo() {
    return(
    <div className={`${shared.tile} ${individual.tile}`}>
    <Link 
        href="/projects/tiletwo" 
        className={`${shared.tiletwo} ${shared.tile}`} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className={shared.description}>
            <div className={shared.subtitle}>
                Working in AI
            </div>
            <div className={shared.title}>
            Reflections & anecdotes. I can't share current work.
            </div>
        </div>
        <div className={shared.thumbnail}>
          <AiCards />
                 
        </div>
        </Link>
    </div>
    )
}