import React from "react";
import "./Movie.css";

const Movie = (props) => {
    // console.log(props.movie);
    const { title, image, plot, runtime } = props.movie;
    return (
        <div className="col movie">
            <div className="card movie-card bg-light shadow-sm h-100 overflow-hidden">
                <div className="ratio">
                    <img src={image} className="card-img-top" alt={title + " Movie Poster"} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {title.length > 16 ? title.slice(0, 16) + "..." : title}
                    </h5>
                    <p>Runtime: {runtime} min</p>
                    <p className="text-muted">
                        {plot.length > 80 ? plot.slice(0, 80) + "..." : plot}
                    </p>
                </div>
                <div className="card-footer d-grid p-0">
                    <a href="/" className="btn btn-lg btn-danger rounded-0">
                        Add to watchlist
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Movie;
