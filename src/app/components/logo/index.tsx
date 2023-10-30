import Link from "next/link";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className={styles.logo}>
        Link<span className={styles.logo_text}>Tree</span>
      </h2>
    </Link>
  );
};

export default Logo;
