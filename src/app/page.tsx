import Image from "next/image";
import styles from "./page.module.css";
import LinkButton from "./components/link-button";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Abreu Softweres</h1>
      <span>Veja meus links! 👇</span>

      <main className={styles.links}>
        <LinkButton link="#">Canal do Youtube</LinkButton>
        <LinkButton link="#">Instagram</LinkButton>
        <LinkButton link="#">Linkedin</LinkButton>
      </main>
    </div>
  );
}
