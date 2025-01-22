import { FaSun, FaMoon } from "react-icons/fa";
import logoDG from "../assets/logoDG.png";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

function NavBar({ toggleTheme, theme }) {
  return (
    <nav id="navBar">
      <div className={styles.left}>
        <img className={styles.logo} src={logoDG} alt="Logo do Dragon Ball Z" />
      </div>
      <div className={styles.right}>
        <button className={styles.iconButton} onClick={toggleTheme}>
          {theme === "light" ? (
            <FaMoon className={styles.icon} />
          ) : (
            <FaSun className={styles.icon} />
          )}
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default NavBar;
