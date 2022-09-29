import React from "react";
import "./BreakTime.css";

const BreakTime = () => {
    return (
        <div className="breaktime-container bg-white p-3 shadow-sm rounded mt-4">
            <h5 className="mb-4">Add a Time Break</h5>
            <div className="buttons d-flex flex-wrap gap-2 align-items-center">
                <button className="btn btn-secondary rounded-circle shadow-sm p-2">5m</button>
                <button className="btn btn-secondary rounded-circle shadow-sm p-2">15m</button>
                <button className="btn btn-secondary rounded-circle shadow-sm p-2">30m</button>
                <button className="btn btn-secondary rounded-circle shadow-sm p-2">45m</button>
                <button className="btn btn-secondary rounded-circle shadow-sm p-2">60m</button>
            </div>
        </div>
    );
};

export default BreakTime;
