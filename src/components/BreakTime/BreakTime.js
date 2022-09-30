import React from "react";
import "./BreakTime.css";

const BreakTime = ({ handleBreakTimeBtn }) => {
    const timers = [5, 15, 30, 45, 60];
    return (
        <div className="breaktime-container bg-white p-3 shadow-sm rounded mt-4">
            <h5 className="mb-4">Add a Time Break</h5>
            <div className="buttons d-flex flex-wrap gap-2 align-items-center">
                {timers.map((time) => (
                    <button
                        key={Date.now() + Math.random()}
                        onClick={() => handleBreakTimeBtn(time)}
                        className="btn btn-secondary rounded-circle shadow-sm p-2">
                        {time}m
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BreakTime;
