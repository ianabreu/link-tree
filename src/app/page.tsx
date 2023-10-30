import styles from "./page.module.css";
import LinkButton from "./components/link-button";
import SocialButton from "./components/social-button";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Abreu Softweres</h1>
      <span>Veja meus links! 👇</span>

      <main className={styles.links}>
        <LinkButton link="#">Canal do Youtube</LinkButton>
        <LinkButton link="#">Instagram</LinkButton>
        <LinkButton link="#">Linkedin</LinkButton>
        <footer className={styles.social_area}>
          <SocialButton
            icon="facebook"
            url="https://www.facebook.com/ianabreudev"
          />
          <SocialButton icon="youtube" url="https://www.youtube.com/" />
          <SocialButton
            icon="instagram"
            url="https://www.instagram.com/ianabreu.dev/"
          />
        </footer>
      </main>
    </div>
  );
}
