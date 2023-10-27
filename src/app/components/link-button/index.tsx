import { ReactNode } from "react";
import styles from "./link-button.module.css";

interface LinkButtonProps {
  link: string;
  children: ReactNode;
}
const LinkButton = ({ link, children }: LinkButtonProps) => {
  return (
    <section className={styles.link_area}>
      <a href={link}>
        <p className={styles.link_text}>{children}</p>
      </a>
    </section>
  );
};

export default LinkButton;
