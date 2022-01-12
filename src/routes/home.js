import Movie from "../components/Movie";
import {useEffect, useState} from "react";


function Home(){
    const [loading, setLoading] = useState(true)
    const [ movies, setMovies] = useState([])
    const getMovies = async () =>{
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')

        const json = await response.json()
        setMovies(json.data.movies)
        setLoading(false)

    }

    useEffect(()=>{
        getMovies()
        // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        //     .then(response => response.json())
        //     .then(json => {
        //         setMovies(json.data.movies)
        //         setLoading(false)
        //     })
    }, [])

    console.log('2222', movies)

    return <div>
        {loading ? <h1>Loading...</h1> : <div>{ movies.map( movie =>
            <Movie key={movie.id} coverImg={movie.medium_cover_image} id={movie.id} title={movie.title} summary={movie.summary} genres={movie.genres} />
        )
        }</div>
        }
    </div>
}


export default Home;