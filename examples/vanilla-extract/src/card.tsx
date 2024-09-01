import { ReactNode } from "react";
import * as styles from "./card.css";

interface CardProps {
  src: string;
  title: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { src, title, children } = props;
  return (
    <div className={`${styles.theme} ${styles.card}`}>
      <img src={src} />
      <h2>{title}</h2>
      {children}
    </div>
  );
}
