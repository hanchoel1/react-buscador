import { useState } from "react"
import { searchMovies } from "../services/fecht_mapped"


export function useMovies({search}){
  const [movies,setmovies] = useState([])


  const getmovies = async () => {
    const newMovies = await searchMovies({search})
    setmovies(newMovies)
   
  }
  
    return {movies,getmovies}
  }