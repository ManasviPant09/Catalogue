import React from 'react';
import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';

const FetchData = () => {    
  const POKEMONS_QUERY = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      types
      image
    }
  }
`;
const { loading, error, data, fetchMore } = useQuery(POKEMONS_QUERY, {
    variables: {
      "first": 20,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {data.pokemons.map(pokemon => (
          <div key={pokemon.id} className="bg-gray-100 p-4 rounded-md">
            <img src={pokemon.image} alt={pokemon.name} className="w-48 h-52 object-contain mx-auto" />
            <h2 className="text-lg font-bold text-center mt-2 mb-1">{pokemon.name}</h2>
            <p className="text-gray-700 text-center">{pokemon.types.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FetchData;
