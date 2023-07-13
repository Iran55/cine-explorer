import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect  } from "react";

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() =>{

      fetch('https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1')

    })

    return (
        <Container>
            <h1>Filmes</h1>
            <MovieList>

              {movies.map(movie => {
                  return (
                    <Movie key={movie.id}>
                      <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title} /></a>
                    <span>{movie.title}</span>
                    </Movie>
                  )
                })}
         
            </MovieList>
        </Container>
    )
}

export default Home;