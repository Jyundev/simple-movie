import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Movie({ id, coverImg, title, overview, vote, releaseDate }) {

    return (
        <div className={styles.movie}>
            <div className={styles.movie__imgContainer}>
                <img className={styles.movie__img} src={coverImg} alt={title} />
                <h3 className={styles.movie__date}>{releaseDate}</h3>
            </div>
            <div className={styles.movie__content}>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
                <p className={styles.movie__vote}>vote: {vote}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote: PropTypes.number,
    releaseDate: PropTypes.string.isRequired,
    };

export default Movie;
