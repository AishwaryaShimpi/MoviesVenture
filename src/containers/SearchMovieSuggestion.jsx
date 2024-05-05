import React from 'react';
import Suggestion from '../components/Suggestion';
import { useSelector } from 'react-redux';

function SearchMovieSuggestion() {
  
  const search = useSelector((state) => state.search);
  const {genres} = useSelector((store)=> store.genres)

  return (
    <Suggestion movies={search} genres={genres}/>
  );
}

export default SearchMovieSuggestion;
