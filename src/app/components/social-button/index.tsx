import styles from "./social-button.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface SocialButtonProps {
  icon: keyof typeof ICON;
  url: string;
}
const ICON = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  youtube: <FaYoutube />,
};
const SocialButton = ({ icon, url }: SocialButtonProps) => {
  return (
    <a
      className={styles.social}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {ICON[icon]}
    </a>
  );
};

export default SocialButton;
