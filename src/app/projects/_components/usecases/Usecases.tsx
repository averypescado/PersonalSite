"use client"
import styles from "./usecases.module.css"
import {useState} from "react";
import Image from "next/image";
import { CirclePlus } from 'lucide-react';



export default function UseCases() {
  const [selected, setSelected] =useState(0)



    return (
        <div className={styles.usecases}>
            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/collab.jpg"
                alt="A ballet dancer being held up by instructor"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Collaborating </div>
            </div>

            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/juggle.webp"
                alt="Man with 8 hands smoking cigarette, reading, and doing other teasks"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Multitasking </div>
            </div>

            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/view.webp"
                alt="Man in hat looking out at a beautiful lake and park"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Presenting </div>
            </div>

        </div>
    )



}


