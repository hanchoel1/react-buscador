


export const searchMovies = async ({search})=>{

    if(search === '') return null

    try {
        const response = await fetch(`https://omdbapi.com/?apikey=4287ad07&s=${search}`)
        const json = await response.json()
        const movies = json.Search
        console.log(json,search);

        return movies?.map(movie =>({
            id: movie.imdID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster}))
        
    } catch (e) {
        throw new Error('error buscando');
        
    }   

}

