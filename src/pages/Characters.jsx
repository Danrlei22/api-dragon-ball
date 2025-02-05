import { useEffect, useState } from "react";
import styles from "./Characters.module.css";
import { Link, useLocation } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const location = useLocation();
  const [notFoundMessage, setNotFoundMessage] = useState('');

  useEffect(() => {
    const fetchCharacters = async (page) => {
      const apiUrl = `https://dragonball-api.com/api/characters?page=${page}&limit=10`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      return response.json();
    };

    const fetchAllCharacters = async () => {
      const allCharacters = [];
      const totalPages = 6;

      for (let page = 1; page <= totalPages; page++) {
        const data = await fetchCharacters(page);

        allCharacters.push(...data.items);
      }

      setCharacters(allCharacters);
      setLoading(false);
    };

    fetchAllCharacters().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchForm = queryParams.get("search");

    if (searchForm) {
      const filtered = characters.filter(
        (character) =>
          character.name.toLowerCase().includes(searchForm.toLowerCase()) ||
          String(character.id) === searchForm
      );
      setFilteredCharacters(filtered);

      if(filtered.length === 0){
        setNotFoundMessage('Personagem não encontrado.');
      }else{
        setNotFoundMessage('');
      }
    }else{
      setFilteredCharacters(characters);
      setNotFoundMessage('')
    }
  }, [location.search, characters]);


  if (loading) {
    return <p>Carregando personagens...</p>;
  }

  if (error) {
    return <p>Erro ao carregar personagens: {error}</p>;
  }

  return (
    <div className={styles.containerCharacters}>
      <h1 className={styles.h1Character}>Characters</h1>

      {notFoundMessage && <p className={styles.errorMessage}>{notFoundMessage}</p>}

      <div className={styles.characterCard}>
        {filteredCharacters.map(
          (character) =>
            character && (
              <Link to={`/characters/${character.id}`} key={character.id} className={styles.character}>
                <div className={styles.characterImage}>
                  <img src={character.image} alt={character.name} />
                </div>
                <div className={styles.characterInfo}>
                  <h2 className={styles.characterName}>{character.name}</h2>
                  <div className={styles.characterDetails}>
                    {character.race} - {character.gender}
                  </div>
                  <div className={styles.characterLabel}>KI base:</div>
                  <div className={styles.characterDetails}>{character.ki}</div>
                  <div className={styles.characterLabel}>KI total:</div>
                  <div className={styles.characterDetails}>
                    {character.maxKi}
                  </div>
                  <div className={styles.characterLabel}>Afiliação:</div>
                  <div className={styles.characterDetails}>
                    {character.affiliation}
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Characters;
