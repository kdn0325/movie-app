import React from 'react';
import PropTypes from 'prop-types';
import "./movie.css";
import {Link} from "react-router-dom";

function Movie({year,title,summery,poster,genres}){
    return(
        <Link to={{
            pathname: "/movie-detail",
            state:{
                year,
                title,
                summery,
                poster,
                genres
            }
        }}>
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
        </Link>
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