import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Movie.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Movie({ id, coverImg, title, overview, vote }) {

    return (
        <div>
            <img className={styles.movie_poster} src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p className={styles.overview_font}>{overview}</p>
            {/* <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul> */}
            <p>평점 : {vote}</p>
            <hr className={styles.horizontal_line} />
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote: PropTypes.number
    // genres: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Movie;
