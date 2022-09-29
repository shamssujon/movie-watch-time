import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header py-3 bg-light">
            <div className="container">
                <div className="logo text-center">
                    <img src={logo} alt="" className="img-fluid mx-auto mb-2" />
                    <h4>Movie Watch Time</h4>
                </div>
            </div>
        </header>
    );
};

export default Header;
