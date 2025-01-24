import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.information}>
        <strong className={styles.info}>PERSONAGENS: 58 </strong>
        <strong className={styles.info}>TRANSFORMAÇÕES: 49</strong>
        <strong className={styles.info}>PLANETAS: 20</strong>
      </p>
      <hr />

      <div className={styles.icons}>
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/in/danrlei-vieira-85b335231/"
          target="_blank"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          className={styles.github}
          href="https://github.com/Danrlei22"
          target="_blank"
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>

      <p className={styles.dev}>
        &copy; Desenvolvido por: <strong>Danrlei 2025</strong>
      </p>
    </footer>
  );
}

export default Footer;
