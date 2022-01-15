import React from 'react';
import PropTypes from 'prop-types';

function Movie({id,year,title,summery,poster}){
    return(
        <h4>{title}</h4>
    )
}

Movie.propTypes  = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;