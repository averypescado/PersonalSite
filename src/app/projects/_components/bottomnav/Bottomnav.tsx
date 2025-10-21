import styles from "./bottomnav.module.css";
import Link from "next/link";

interface Props {
    previous?: string; // or whatever type 'previous' should be
    prevref?:string;
    next?: string; // optional prop
    nextref?: string;
    
  }

export default function Bottomnav({previous, prevref, next, nextref}: Props) {
    return (
        <div className={styles.bar}>
            {previous && prevref ?
                    <Link href={prevref} >
                        <div className={styles.prev}>
                            <div className={styles.precede}>previously:</div>
                            <div className={styles.but}>
                                    <div>
                                       {previous}
                                    </div>


                            </div>
                        </div>

                    </Link>
            :null}

            {next && nextref ?
                <Link href={nextref} >
                    <div className={styles.next}>
                    <div className={styles.precede}>next:</div>
                        <div className={styles.but}>
                            {next}

                        </div>
                    </div>

            </Link>
            
            :null}
            
        </div>
    )
}