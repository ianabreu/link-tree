import Link from "next/link";
import styles from "./not-found.module.css";
import Logo from "./components/logo";

const NotFound = () => {
  return (
    <div className={styles.error_container}>
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Essa página que está procurando não existe.</p>
      <Link className={styles.error_link} href={"/"}>
        Voltar à página inicial
      </Link>
    </div>
  );
};

export default NotFound;
