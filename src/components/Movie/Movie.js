import React from "react";
import "./Movie.css";

const Movie = (props) => {
    // console.log(props.movie);
    const { title, image, plot, runtime } = props.movie;
    return (
        <div className="col movie">
            <div className="card movie-card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Runtime: {runtime} min</p>
                    <p className="text-muted">{plot}</p>
                    <a href="/" className="btn btn-primary">
                        Select Movie
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Movie;
