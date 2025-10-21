import Link from "next/link";
import styles from "./layout.module.css";
import Orb from "../_components/orb/Orb";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <div className={styles.fadeTop} />
     <div className={styles.fadeBottom} />
     <Orb use="project" />

    <main className={styles.main}>

      <div className={styles.content}>{children}</div>

    </main>
    </>
  );
} 