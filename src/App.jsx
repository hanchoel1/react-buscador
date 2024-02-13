import './App.css';
import React, { useState} from 'react';
import './components/movies'
import { Movies } from './components/movies';
import { useMovies } from './hooks/useMovies';



function App() {

  const [search, updateSearch] = useState('');
  const {movies, getmovies}= useMovies({search})


  const handlesubmit = (event) => {
    event.preventDefault()
    getmovies({search})
  }


  const handlechange= (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
   
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas TEST</h1>
        <form className="form" action="" onSubmit={handlesubmit}>
        <label >Put movie name: </label>
        <input  value={search}  onChange={handlechange} placeholder='Matrix...'/>
        <button  type='submit'>Buscar</button>
      </form>
      </header>

      <main>
          <Movies movies={movies}></Movies>
      </main>

    </div>
  )


}

export default App;
