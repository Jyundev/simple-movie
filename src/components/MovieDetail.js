import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MovieDetail.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Movie({ coverImg, imdbId, homepage, title, overview, genres }) {
    return (
        <div className={styles.movie_container}>
            <img className={styles.movie_poster} src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>{overview}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank" rel="noopener noreferrer">IMDB</a>
                <a href={homepage} target="_blank" rel="noopener noreferrer">Homepage</a>
            </div>
        </div>
    );
}

Movie.propTypes = {
    imdbId: PropTypes.number.isRequired,
    homepage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Movie;
