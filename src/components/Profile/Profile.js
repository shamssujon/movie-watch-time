import React from "react";
import "./Profile.css";
import photo from "./sujon_f2.png";

const Profile = () => {
    return (
        <div className="profile-info bg-white p-3 shadow-sm rounded">
            <div className="photo">
                <img src={photo} alt="" className="img-fluid" />
            </div>
            <div className="content">
                <h5 className="mb-0">Shamsul Islam Sujon</h5>
                <p className="text-muted mb-0">Frontend Developer</p>
            </div>
        </div>
    );
};

export default Profile;
