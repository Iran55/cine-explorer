import { useParams } from "react-router-dom"

function Details(){

    const params = useParams()
    return (
        <h1>Página de detalhes</h1>
    )
}

export default Details