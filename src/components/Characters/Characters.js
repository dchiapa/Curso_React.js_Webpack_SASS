import { useEffect, useState } from "react";
import "./Characters.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <div className="container">
      <div className="characters">
        {characters.map((character) => (
          <div className="box" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="character">
              <h3 className="name">{character.name}</h3>
              <p className="specie">{character.species}</p>
              <p className="status">{character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
