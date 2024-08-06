import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';
import styles from './Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // async/await를 사용한 비동기 함수 방식
    const getMovies = async () => {
        try {
            const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
            const json = await response.json();
            setMovies(json);
            console.log(json);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) :
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            id={movie.id}
                            coverImg={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            vote={movie.vote_average}
                            releaseDate={movie.release_date}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
