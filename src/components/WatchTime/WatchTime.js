import React from "react";
import "./WatchTime.css";

const WatchTime = (props) => {
    const { selectedMovies, breakTime } = props;
    // console.log(selectedMovies);

    let runtime = 0;
    for (const movie of selectedMovies) {
        runtime = runtime + movie.runtime;
    }
    return (
        <div className="watchtime-container bg-white p-3 shadow-sm rounded mt-4">
            <h5 className="mb-4">Watch Time Details</h5>
            <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between mb-3">
                <span className="fw-semibold">Selected movies: </span>
                <span className="text-danger fs-5 fw-bold">{selectedMovies.length}</span>
            </div>
            <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between mb-3">
                <span className="fw-semibold">Total Watch Time: </span>
                <span>
                    <span className="text-danger fs-5 fw-bold">{runtime}</span> minutes
                </span>
            </div>
            <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between">
                <span className="fw-semibold">Break Time: </span>
                <span>
                    <span className="text-danger fs-5 fw-bold">{breakTime}</span> minutes
                </span>
            </div>
        </div>
    );
};

export default WatchTime;
