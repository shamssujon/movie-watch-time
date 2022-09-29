import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer py-3 bg-light">
            <div className="container">
                <p className="text-center mb-0">
                    &copy; Copyright {" "}
                    <a href="https://shamssujon.com/" target="_blank" rel="noreferrer">
                        Shams Sujon
                    </a>
                    , 2022 | Some rights reserved.{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
