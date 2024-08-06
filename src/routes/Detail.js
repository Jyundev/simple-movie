import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Movie from '../components/MovieDtail/MovieDetail';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState(null);

    const getMovies = async () => {
        try {
            const json = await (await (fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`))).json();
            setMovies(json);
            console.log(json)
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                movie && (
                    <Movie
                        coverImg={movie.poster_path}
                        imdbId={movie.imdb_id}
                        homepage={movie.homepage}
                        title={movie.title}
                        overview={movie.overview}
                        genres={movie.genres}
                    />
                )
            )}
        </div>
    );
}


export default Detail;