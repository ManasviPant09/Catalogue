import React from 'react';
import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import FetchData from './FetchData';

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

const PAGE_SIZE = 20;
const PAGE_COUNT = 3;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  });

  const pages = [];
  for (let page = 1; page <= PAGE_COUNT; page++) {
    const { data } = await client.query({
      query: POKEMONS_QUERY,
      variables: {
        first: PAGE_SIZE * page,
      },
    });
    pages.push(data.pokemons.slice(0, PAGE_SIZE * page));
  }

  return {
    props: {
      pages,
    },
  };
};

const Homepage = ({ pages }) => {
  return (
    <div>
      {pages.map((paginatedPokemons, index) => (
        <div key={index} className="flex flex-col justify-center mt-0.5 w-full mr-2 bg-gray-200">
          <div className="pr-44 pl-44 pt-4 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {paginatedPokemons.map(pokemon => (
              <div key={pokemon.id} className="bg-white p-2 rounded-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
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
      ))}
      <FetchData pages={pages} />
    </div>
  );
};

export default Homepage;
