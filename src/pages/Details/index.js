//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4401a05246d2db2b249eb9f3f5eef25a&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, release_date, overview } = data
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='release-date'>
            Data de lançamento: {movie.releaseDate}</span>
          <Link to="/"><button>Voltar</button></Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;