import styles from "./problem.module.css"
import Image from "next/image"

export default function Problem() {
    return (
    <div className={styles.layout}>
        <div className={styles.tile}>
            <div className={styles.pic}>
                <Image 
                src="/fomo.jpg"
                alt="People in office space wearing happy maskys"
                fill
                className={styles.cov}
                />

            </div>
            <div className={styles.head}>
                People waste time in irrelevant meetings due to FOMO
            </div>

            {/* <div className={styles.body}>
                Users attend meetings less relevant for them due to fear of missing out. They rely on hosts for key information.
            </div> */}



        </div>
        <div className={styles.math}>

        <div>+</div>
        </div>

        <div className={styles.tile}>
            <div className={styles.pic}>
                <Image 
                src="/paperwork.jpg"
                alt="Man looking at a large person made of paper"
                fill
                className={styles.cov}
                />

            </div>
            <div className={styles.head}>
                When they do miss a meeting, catching up is time consuming
            </div>
{/* 
            <div className={styles.body}>
                Finding and sifting through transcripts, scattered notes, or watching recordings takes time.
            </div> */}



        </div>
        <div className={styles.math}>
            <div>=</div>

        </div>
        <div className={styles.tile}>
            <div className={styles.pic}>
                <Image 
                src="/burnout.webp"
                alt="Man melting flat over the back of his desk chair"
                fill
                className={styles.cov}
                />

            </div>
            <div className={styles.head}>
                This leads to fatigue and lower productivity
            </div>

            {/* <div className={styles.body}>
                People struggle to limit their meetings, leading to working longer hours and more stress.
            </div> */}



        </div>


        

    </div>
    )

}