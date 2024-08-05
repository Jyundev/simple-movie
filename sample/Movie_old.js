import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css"

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // async/await를 사용한 비동기 함수 방식
    const getMovies = async () => {
        try {
            const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
            const json = await response.json();
            setMovies(json);
            console.log(json);


        } catch (error) {
            console.error("Failed to fetch movies:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // then 메서드를 사용한 프로미스 체인 방식
        // fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        //     .then(response => response.json())
        //     .then((json) => {
        //         setMovies(json);
        //         setLoading(false);
        //     })
        getMovies();
    }, [])

    return <div>
        {loading ? <h1>Loading...</h1> :
            (<div>
                {movies.map((movie, index) => (
                    <div key={index}>
                        <img className={styles.movie_poster} src={movie.poster_path}></img>
                        <h2><a href = {`https://nomad-movies.nomadcoders.workers.dev/movies/${movie.id}`}>{movie.title}</a></h2>
                        <p>{movie.overview}</p>
                        <ul>
                            {movie.genre_ids.map((genre) => (
                                <li key={genre}>{genre}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            )};
    </div>
}

export default Movie