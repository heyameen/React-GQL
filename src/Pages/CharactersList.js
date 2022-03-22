import './CharactersList.css'

import { Link } from 'react-router-dom';
import React from "react";
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data });

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
