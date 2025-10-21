import styles from "./quotecontain.module.css"
import Image from "next/image"

export default function QuoteContain() {

    return (
        <div className={styles.contained}>
            {/* <div className={styles.chunk}>
                <Image 
                    fill
                    src="/reddit1.png"
                    alt="Picture of the author"
                    className={styles.meetchrome}
                />
            </div> */}

            <div className={styles.chunkone}>
                <Image 
                    fill
                    src="/headline.png"
                    alt="Picture of the author"
                    className={styles.picstyle}
                />
            </div>

            <div className={styles.chunktwo}>
                <Image 
                    fill
                    src="/reddit2.png"
                    alt="Picture of the author"
                    className={styles.picstyle}
                />
            </div>





        </div>
    )
}


