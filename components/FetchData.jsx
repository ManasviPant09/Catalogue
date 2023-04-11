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
    <div className="flex justify-center mt-0.5 w-full ml-2 mr-2">
      <div className="pr-44 pl-44 pt-4 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 bg-gray-200">
        {data.pokemons.map(pokemon => (
          <div key={pokemon.id} className="bg-white p-4 rounded-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
            <img src={pokemon.image} alt={pokemon.name} className="rounded-md w-full h-52 object-contain mx-auto p-4 rounded-lg bg-white" />
            <div key={pokemon.id} className="bg-gray-200 pr-2 pl-2 pb-2 rounded-md">
            <h2 className="text-lg font-bold text-gray-700 mt-2 mb-1">#0{pokemon.number}</h2>
            <h2 className="text-lg font-bold text-gray-700 mt-2 mb-1">{pokemon.name}</h2>
            <p className="text-white rounded-md bg-gray-700 p-2">{pokemon.types.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FetchData;
