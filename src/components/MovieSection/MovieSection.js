import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Profile from "../Profile/Profile";
import BreakTime from "../BreakTime/BreakTime";
import "./MovieSection.css";
import WatchTime from "../WatchTime/WatchTime";

const MovieSection = () => {
    // Load movies
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("movieData.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    // Movie Selection
    const [selectedMovies, setSelectedMovies] = useState([]);
    const handleWatchBtnClick = (movie) => {
        const newSelectedMovies = [...selectedMovies, movie];
        setSelectedMovies(newSelectedMovies);
    };

    // Break time
    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTimeBtn = (time) => {
        setBreakTime(time);
    };

    return (
        <section className="section movie-section py-5">
            <div className="container">
                <h4 className="mb-5">Select movies to generate total watch time</h4>
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="movie-container">
                            <div className="movies row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                                {movies.map((movie) => (
                                    <Movie
                                        key={movie.id}
                                        movie={movie}
                                        handleWatchBtnClick={handleWatchBtnClick}></Movie>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="calculation-container bg-light rounded h-100 p-3 shadow-sm border">
                            <div className="position-sticky">
                                <Profile></Profile>
                                <BreakTime handleBreakTimeBtn={handleBreakTimeBtn}></BreakTime>
                                <WatchTime
                                    selectedMovies={selectedMovies}
                                    breakTime={breakTime}></WatchTime>
                                <div className="d-grid mt-5">
                                    <button className="btn btn-lg btn-primary rounded shadow-sm">
                                        Activity Completed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieSection;
