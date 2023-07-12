import { Container, MovieList, Movie } from "./styles";

function Home() {

    const movies = [
        {
          id:1,
          title:'teste1',
          image_url: 'https://cdn.ome.lt/1_qR1Az7HVWQMd6X7jowZrV0ixQ=/770x0/smart/uploads/conteudo/fotos/marvels_spider-man_2_hq_capa_completa.jpg'
        },
        {
          id:2,
          title:'teste2',
          image_url: 'https://cdn.ome.lt/1_qR1Az7HVWQMd6X7jowZrV0ixQ=/770x0/smart/uploads/conteudo/fotos/marvels_spider-man_2_hq_capa_completa.jpg'
        },
        {
          id:3,
          title:'teste3',
          image_url: 'https://cdn.ome.lt/1_qR1Az7HVWQMd6X7jowZrV0ixQ=/770x0/smart/uploads/conteudo/fotos/marvels_spider-man_2_hq_capa_completa.jpg'
        }
    ]
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