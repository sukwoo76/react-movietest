import {useParams} from "react-router-dom"
import {useEffect} from "react";

function Detail(){
    const { id } = useParams()
    console.log(id)

    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`

    const getMovie = async () =>{
       const json = await( await fetch(url) ).json();
       console.log(json)
    }

    useEffect( () => {
        getMovie();
    },[]
    );

    return <h1>detail</h1>
}

export default Detail;