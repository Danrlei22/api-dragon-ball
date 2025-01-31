import styles from "./Transformations.module.css";
import { useState, useEffect } from "react";

function Transformations() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const allCharacters = [];
        const totalPages = 6;

        for (let page = 1; page <= totalPages; page++) {
          const apiUrl = `https://dragonball-api.com/api/characters?page=${page}&limit=10`;
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error("Erro ao buscar dados");
          }

          const data = await response.json();
          allCharacters.push(...data.items);
        }

        const charactersWithTransformations = await Promise.all(
          allCharacters.map(async (character) => {
            const detailsResponse = await fetch(
              `https://dragonball-api.com/api/characters/${character.id}`
            );
            const detailData = await detailsResponse.json();
            return detailData;
          })
        );

        const filteredCharacters = charactersWithTransformations.filter(
          (character) =>
            character.transformations && character.transformations.length > 0
        );

        setCharacters(filteredCharacters);
        console.log(filteredCharacters);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <p>Carregando transformações...</p>;
  }

  if (error) {
    return <p>Erro ao carregar transformações: {error}</p>;
  }

  return (
    <>
      <h1 className={styles.h1Character}>Transformações</h1>

      {characters.map((character) => (
        <div key={character.id}>
          <div className={styles.characterTransformations}>
            <div className={styles.character}>
              <div className={styles.characterImage}>
                <img src={character.image} alt={character.name} />
              </div>
              <div className={styles.characterInfo}>
                <h2 className={styles.characterName}>{character.name}</h2>
                <div className={styles.characterLabel}>KI:</div>
                <div className={styles.characterDetails}>{character.ki}</div>
              </div>
            </div>

            {character.transformations.map((transformation) => (
              <div key={transformation.id} className={styles.character}>
                <div className={styles.characterImage}>
                  <img src={transformation.image} alt={transformation.name} />
                </div>
                <div className={styles.characterInfo}>
                  <h2 className={styles.characterName}>
                    {transformation.name}
                  </h2>

                  <div className={styles.characterLabel}>KI:</div>
                  <div className={styles.characterDetails}>
                    {transformation.ki}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Transformations;
