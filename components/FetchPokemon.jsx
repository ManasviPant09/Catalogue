import React,{useState} from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { gql } from 'graphql-tag';

const POKEMONS_QUERY = gql`
  query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      image
      evolutions{
        ...RecursivePokemonFragment
      }
    }
  }
  
  fragment RecursivePokemonFragment on Pokemon {
    id
    name
    number
    image
    types
    maxCP
    maxHP
    evolutions {
      id
      name
      number
      image
      types
      maxCP
      maxHP
    }
  }
`;

const FetchPokemon = () => {
  const router = useRouter();
  const { id, name } = router.query;
  const { loading, error, data } = useQuery(POKEMONS_QUERY, {
    variables: { id, name },
  });
  const [showEvolution, setShowEvolution] = useState(false);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  
  const { pokemon } = data;
  const renderEvolution = (evolution) => {
    return (
      <div key={evolution.id} className="flex flex-col items-center">
        <img src={evolution.image} alt={evolution.name} className="h-24" />
        <p className="text-center">{evolution.name} #{evolution.number}</p>
        {evolution.evolutions && (
          <div className="flex">
            {evolution.evolutions.map((e) => renderEvolution(e))}
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="flex h-24 -mt-12 w-full bg-gray-600"></div>
      <div className="flex flex-col justify-center items-center w-112 bg-gray-300">
        <h1 className="flex justify-center text-3xl text-gray-700 font-semibold mt-4 mb-6">{pokemon.name}&#xa0;&#xa0;#0{pokemon.number}</h1>
        <div className="flex justify-center mt-4">
        <img
        className="rounded-md h-112 object-contain mx-auto p-12 px-6 rounded-lg bg-white ml-64" 
        src={pokemon.image}
        alt={pokemon.name}/>
        <div className="flex flex-col mr-64">
        <div className="flex flex-col bg-blue-500 p-8 rounded rounded-lg text-white font-medium text-l">
        <p className="p-2">Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
        <p className="p-2">Height: {pokemon.height.minimum} - {pokemon.height.maximum}</p>
        <p className="p-2">Classification: {pokemon.classification}</p>
        </div>
        <div className="flex flex-col w-full bg-gray-300 mt-12">
        <p className="flex flex-col text-gray-700 text-xl font-medium mb-2">Type</p>
        <p className="flex flex-col bg-green-500 p-2 rounded rounded-lg text-white font-medium mb-4">{pokemon.types.join(', ')}</p>
        <p className="flex flex-col text-gray-700 text-xl font-medium mb-2">Resistant</p>
        <p className="flex flex-col bg-violet-500 p-2 rounded rounded-lg text-white font-medium mb-4">{pokemon.resistant.join(', ')}</p>
        <p className="flex flex-col text-gray-700 text-xl font-medium mb-2">Weaknesses</p>
        <p className="flex flex-col bg-orange-500 p-2 rounded rounded-lg text-white font-medium mb-4">{pokemon.weaknesses.join(', ')}</p>
        </div>
        </div>
        </div>
        <button onClick={() => setShowEvolution(!showEvolution)} 
        className="flex justify-center items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded rounded-lg w-32">Show Evolution</button>
        {showEvolution && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-8 rounded-lg">
                {pokemon.evolutions && renderEvolution(pokemon)}
                <button onClick={() => setShowEvolution(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
                Close</button>
            </div>
        </div>
        )}
      </div>
    </>
  );
};

export default FetchPokemon;
