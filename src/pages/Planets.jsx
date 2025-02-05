import { useEffect } from "react";
import styles from "./planets.module.css";
import { useState } from "react";

function Planets() {
  const [planets, setPlanets] = useState([]);
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

    const fetchAllPlanets = async () => {
      const uniquePlanets = [];

      for (let page = 1; page <= totalPages; page++) {
        const data = await fetchCharacters(page);

        const characterPromises = data.items.map(async (character) => {
          const characterResponse = await fetch(
            `https://dragonball-api.com/api/characters/${character.id}`
          );
          const characterData = await characterResponse.json();
          const planet = characterData.originPlanet;

          if (planet) {
            console.log(`${character.id} - ${character.name} Planeta encontrado: ${planet.name}`);
            if (!uniquePlanets.some((p) => p.id === planet.id)) {
              uniquePlanets.push(planet);
            } 
          }
        });

        await Promise.all(characterPromises);
      }

      setPlanets(uniquePlanets);
      setLoading(false);
    };
    fetchAllPlanets().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Carregando planetas...</p>;
  }

  if (error) {
    return <p>Erro ao carregar planetas: {error}</p>;
  }

  return (
    <div className={styles.containerPlanets}>
      <h1 className={styles.h1Planet}>Planetas</h1>
      {planets.map((planet) => (
        <div key={planet.id} className={styles.planet}>
          <h2>{planet.name}</h2>
          <p>
            <strong className={styles.infoPlanet}>Destruído:</strong>
            {planet.isDestroyed ? "Sim" : "Não"}
          </p>
          <img
            src={planet.image}
            alt={planet.name}
            className={styles.imgPlanet}
          />
          <p>
            <strong className={styles.infoPlanet}>Descrição:</strong>{" "}
            {planet.description}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Planets;
