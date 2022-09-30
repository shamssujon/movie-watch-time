import React from "react";
import Accordion from "../Accordion/Accordion";

const BlogSection = () => {
    return (
        <section className="section movie-section py-5">
            <div className="container">
                <div className="text-bg-primary p-5 rounded">
                    <h4 className="text-center mb-5">Frequently Asked Questions</h4>
                    <Accordion></Accordion>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
