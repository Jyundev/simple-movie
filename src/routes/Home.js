import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from '../styles/Home.module.css'

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
        <div className={styles.homeContainer}>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1 className={styles.title}>현재 상영중인 영화</h1>
                    {movies.map((movie) => (
                        <Movie
                            id={movie.id}
                            coverImg={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            vote={movie.vote_average}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
