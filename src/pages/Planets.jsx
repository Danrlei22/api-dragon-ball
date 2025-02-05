import { useEffect, useState } from "react";
import styles from "./planets.module.css";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async (page) => {
      const apiUrl = `https://dragonball-api.com/api/planets?page=${page}&limit=10`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      return response.json();
    };

    const fetchAllPlanets = async () => {
      const allPlanets = [];
      const totalPages = 2;

      for (let page = 1; page <= totalPages; page++) {
        const data = await fetchPlanets(page);
        allPlanets.push(...data.items);
      }

      setPlanets(allPlanets);
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
