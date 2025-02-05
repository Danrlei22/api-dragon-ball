import { useEffect, useState } from "react";
import styles from "./CharacterDetail.module.css";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://dragonball-api.com/api/characters/${id}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do personagem.");
      }

      const data = await response.json();
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter().catch((error) => {
        setError(error.message);
        setLoading(false);
    })
  }, [id]);

  if(loading){
    return <p>Carregando detalhes do personagem...</p>
  }

  if(error){
    return <p>Erro ao carregar personagem: {error}</p>
  }

  return (
    <div className={styles.CharacterDetail}>
      <h1 className={styles.characterDetailH1}>{character.name}</h1>
      <div className={styles.characterImage}>
        <img src={character.image} alt={character.name}/>
      </div>
    <p className={styles.CharacterDescription}>
        {character.description}
    </p>
    </div>
  );
}

export default CharacterDetail;
