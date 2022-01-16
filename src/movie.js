import React from 'react';
import PropTypes from 'prop-types';
import "./movie.css";

function Movie({year,title,summery,poster,genres}){
    return(
        <div className="movies_movie">
             <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="moive_title">{title}</h3>
                <h5 className="moive_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre,index)=> (
                    <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="moive_summery">{summery}</p>
            </div>
        </div>
    )
}

Movie.propTypes  = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;