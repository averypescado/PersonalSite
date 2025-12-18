import Link from "next/link";
import styles from "./page.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>My Projects</h1>
      <p className={styles.paragraph}>Here you&apos;ll find a selection of my work. More projects coming soon!</p>
      <ul className={styles.projectList}>
        {/* Example project link, replace or add more as needed */}
        <li>
          <Link href="/projects/example-project" className={styles.navLink}>
            Example Project
          </Link>
        </li>
      </ul>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          ← Back to Home
        </Link>
      </nav>
    </main>
  );
} 