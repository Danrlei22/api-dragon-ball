import { useEffect, useState } from "react";
import styles from "./Sides.module.css";

import gokuNormal from "../assets/gokuNormal.png";
import vegetaNormal from "../assets/vegetaNormal.png";
import goku from "../assets/goku.png";
import vegeta from "../assets/vegeta.png";

import PropTypes from "prop-types";

function Sides({ theme }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsHidden(true);
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [theme]);


  return (
    <div className={styles.containerSides}>
      <div className={`${styles.image} ${isHidden ? styles.hidden : ""}`}>
        <img
          src={`${theme === "light" ? gokuNormal : goku}`}
          alt="Goku"
        />
      </div>
      <div className={`${styles.image} ${isHidden  ? styles.hidden : ""}`}>
        <img
          src={`${theme === "light" ? vegetaNormal : vegeta}`}
          alt="Vegeta normal"
        />
      </div>
    </div>
  );
}
Sides.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Sides;
