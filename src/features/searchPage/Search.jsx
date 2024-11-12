import React from 'react'
import Header from '../../components/Header.jsx';
import Navigation from '../../components/Navigation.jsx';
import SearchResults from '../../components/SearchResults.jsx';

function Search() {
  return (
    <>
    <Header />
    <div className='flex'>
    <Navigation />
    <SearchResults />
    </div>
    </>
  )
}

export default Search;