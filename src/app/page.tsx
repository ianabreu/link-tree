import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Abreu Softweres</h1>
      <span>Veja meus links! 👇</span>

      <main className={styles.links}>
        <section className={styles.link_area}>
          <a href="#">
            <p className={styles.link_text}>Canal do Youtube</p>
          </a>
        </section>
        <section className={styles.link_area}>
          <a href="#">
            <p className={styles.link_text}>Canal do Youtube</p>
          </a>
        </section>
        <section className={styles.link_area}>
          <a href="#">
            <p className={styles.link_text}>Canal do Youtube</p>
          </a>
        </section>
      </main>
    </div>
  );
}
