import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.containerMenu}>
      <h1>API Dragon Ball</h1>

      <form>
        <label>
          <input
            className={styles.inputCharacter}
            type="text"
            placeholder="Personagem ou ID"
          />
        </label>
        <button className={styles.BtnCharacter} type="submit">
          Pesquisar
        </button>
      </form>

      <div className={styles.menuOptions}>
        <ul>
          <li>
            <Link to="/allcharacters">Todos personagens</Link>
          </li>
          <li>
            <Link to="/transformations">Transformações</Link>
          </li>
          <li>
            <Link to="/planets">Planetas</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
