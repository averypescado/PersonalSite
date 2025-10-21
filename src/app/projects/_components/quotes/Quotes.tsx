// components/Quotes.tsx
import Image from "next/image";
import styles from "./quotes.module.css";

type QuoteItem = {
  text: string;
  author: string;
  avatarSrc: string;
  avatarAlt?: string;
};

type QuotesProps = {
  items: QuoteItem[];
  className?: string;
};

function QuoteCard({ text, author, avatarSrc, avatarAlt }: QuoteItem) {
  return (
    <div className={styles.quote}>
      <div className={styles.general}>{text}</div>

      <div className={styles.attribution}>
        <div className={styles.head}>
          <Image
            src={avatarSrc}
            alt={avatarAlt || `${author} headshot`}
            fill
            sizes="40px"
            style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
          />
        </div>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default function Quotes({ items, className }: QuotesProps) {
  return (
    <div className={`${styles.quotes} ${className ?? ""}`}>
      {items.map((q, i) => (
        <QuoteCard key={i} {...q} />
      ))}
    </div>
  );
}
