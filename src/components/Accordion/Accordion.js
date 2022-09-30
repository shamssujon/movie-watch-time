import React from "react";
import "./Accordion.css";

const Accordion = () => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item rounded overflow-hidden">
                <h4 className="accordion-header" id="flush-headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne">
                        How does React works?
                    </button>
                </h4>
                <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p className="lead">
                            React JS is a Javascript library for building User Interfaces of Web or
                            Mobile Apps.
                        </p>
                        <p>
                            React make a duplicate of the real DOM to determine and update changes
                            quickly. It allows us to write HTML in JS code. It is called JSX. It
                            divides a application into multiple components with its own state. The
                            components are just Javascript Functions. Components returns HTML like
                            JSX and React renders them to the UI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item rounded overflow-hidden">
                <h4 className="accordion-header" id="flush-headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                        Props vs State
                    </button>
                </h4>
                <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        props (short for “properties”) and state are both plain JavaScript objects.
                        While both hold information that influences the output of render, they are
                        different in one important way: props get passed to the component (similar
                        to function parameters) whereas state is managed within the component
                        (similar to variables declared within a function).
                    </div>
                </div>
            </div>
            <div className="accordion-item rounded overflow-hidden">
                <h4 className="accordion-header" id="flush-headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Usage of useEffect
                    </button>
                </h4>
                <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p className="lead">
                            The <code>useEffect</code> Hook allow us to perform side effects in our
                            components.
                        </p>
                        <p>
                            A functional React component uses props and/or state to calculate the
                            output. If the functional component makes calculations that don't target
                            the output value, then these calculations are named side-effects.
                        </p>
                        <p>
                            Examples of side-effects are fetch requests, manipulating DOM directly,
                            using timer functions like setTimeout, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
