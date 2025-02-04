import { useState } from "react";
import styles from "./Menu.module.css";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const [searchForm, setSearchForm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchForm.trim() === "") {
      navigate("/characters");
    } else {
      navigate(`/characters?search=${searchForm}`);
    }
  };

  return (
    <div className={styles.containerMenu}>
      <h1>API Dragon Ball</h1>

      <form id="searchForm" onSubmit={handleSearch}>
        <label>
          <input
            className={styles.inputCharacter}
            type="text"
            placeholder="Personagem ou ID"
            value={searchForm}
            onChange={(e) => setSearchForm(e.target.value)}
          />
        </label>
        <button className={styles.BtnCharacter} type="submit">
          Pesquisar
        </button>
      </form>

      <div className={styles.menuOptions}>
        <ul>
          <li>
            <Link to="/characters">Personagens</Link>
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
