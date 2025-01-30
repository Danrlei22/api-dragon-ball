import { useEffect, useState } from "react";
import styles from "./Characters.module.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalPages = 6;

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

  if (loading) {
    return <p>Carregando personagens...</p>;
  }

  if (error) {
    return <p>Erro ao carregar personagens: {error}</p>;
  }

  return (
    <div className={styles.containerCharacters}>
      <h1 className={styles.h1Character}>Characters</h1>
      <div className={styles.characterCard}>
        {characters.map(
          (character) =>
            character && (
              <div key={character.id} className={styles.character}>
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
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Characters;
