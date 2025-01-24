import { FaSun, FaMoon } from "react-icons/fa";
import logoDG from "../assets/logoDG.png";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoArrowUndoCircle } from "react-icons/io5";

function NavBar({ toggleTheme, theme }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handBack = () => {
    navigate("/");
  };

  return (
    <nav id="navBar">
      {location.pathname !== "/" && (
        <button onClick={handBack} className={styles.btnBack}>
          <IoArrowUndoCircle className={styles.iconBack} />
        </button>
      )}
      <div className={styles.left}>
        <Link to="/">
          <img
            className={styles.logo}
            src={logoDG}
            alt="Logo do Dragon Ball Z"
          />
        </Link>
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
