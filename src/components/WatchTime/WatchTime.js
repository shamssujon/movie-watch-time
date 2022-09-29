import React from "react";
import "./WatchTime.css";

const WatchTime = () => {
    return (
        <div className="watchtime-container bg-white p-3 shadow-sm rounded mt-4">
            <h5 className="mb-4">Watch Time Details</h5>
            <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between mb-3">
                <span className="fw-semibold">Total Watch Time: </span>
                <span>
                    <span className="text-primary fs-5 fw-bold">100</span> minutes
                </span>
            </div>
            <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between">
                <span className="fw-semibold">Break Time: </span>
                <span>
                    <span className="text-primary fs-5 fw-bold">10</span> minutes
                </span>
            </div>
        </div>
    );
};

export default WatchTime;
