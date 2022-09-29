import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./MovieSection.css";

const MovieSection = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movieData.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <section className="section movie-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 ">
                        <div className="movie-container">
                            <h4 className="mb-5">Select movies to generate total watch time</h4>
                            <div className="movies row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {movies.map((movie) => console.log(movie))}
                                {movies.map((movie) => (
                                    <Movie key={movie.id} movie={movie}></Movie>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">Watch container</div>
                </div>
            </div>
        </section>
    );
};

export default MovieSection;
