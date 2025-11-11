import Link from "next/link";
import styles from "./page.module.css";
import OrbReveal from "./projects/_components/orb/OrbReveal";
import Image from "next/image";
import Marquee from "./projects/_components/marquee/Marquee";
import AiCards from "./projects/_components/Aicards/Aicards";
import MiniFlowchart from "./projects/_components/miniflowchart/MiniFlowchart";
import TileOne from "./projects/_components/tiles/tileone/TileOne";
import TileTwo from "./projects/_components/tiles/tiletwo/TileTwo";
import TileThree from "./projects/_components/tiles/tilethree/TileThree";
import TileFour from "./projects/_components/tiles/tilefour/TileFour";
import TileFive from "./projects/_components/tiles/tilefive/TileFive";
import TileSix from "./projects/_components/tiles/tilesix/TileSix";

export default function Home() {
  return (
    <>
      {/* Show Orb after scrolling 240px */}
      <OrbReveal threshold={240} />
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <main className={styles.main}>
        <div className={styles.flex}>
            <h1 className={styles.heading}>Avery Fisher</h1>
            <p className={styles.paragraph}>Designer that loves to code</p>
        </div>

        <div className={styles.blurb}>
        I enjoy understanding technical details and prototyping in code. I&apos;ve shipped large, cross product features used by millions at Google Meet, and features that are critical to school district administrators work at Informedk12.
        <br></br>
        <br></br>
        Currently, I am focused on how AI can make meetings better, before, during, and after the meeting itself.
        </div>

        <div className={styles.currently}>
          <div className={styles.container}>
            <div className={styles.flexside}>
              <img src="/meetlogo.png" alt="Google Meet Logo" width={24} height={24} />
              <div className={styles.logomark}>Google Meet</div>
            </div>
            <div className={styles.tiles}>
              <div className={`${styles.tileone} ${styles.tile}`}>
                  <TileOne />
              </div>
              <div className={`${styles.tiletwo} ${styles.tile}`}>
              <TileTwo />


              </div>

              

  

              <div className={`${styles.tilethree} ${styles.tile}`}>
                <TileThree />
                </div>

              <div className={`${styles.tilefour} ${styles.tile}`}>
                <TileFour />
             
              </div>

              <div className={`${styles.tilefive} ${styles.tile}`}>
                <TileFive />
              </div>


              
              {/* Skinny tile that spans full width within the tiles grid
              <Link href="/projects/chromeextension" className={`${styles.skinnytile} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Leadership
                  </div>
                  <div className={styles.title}>
                    Teaching my teammates to make React prototypes
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>

<div className={styles.previously}>
          <div className={styles.flexside}>
                <img src="/iktwelve.jpg" alt="Informedk12 Logo" width={24} height={24} />
                <div className={styles.logomark}>Informedk12</div>
          </div>
    <div className={`${styles.informedtile} ${styles.tile}`}>
    <TileSix />
    </div>
</div>


      </main>
    </>
  );
}
