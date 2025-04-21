import React from "react";
import "./ClientsPortal.css";

const ClientsPortal = () => {
  return (
    <div className="clients-portal-container">
      <video
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source src="/Videos/Backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="login-box">
        <h2 className="login-title">Hey there,</h2>
        <form className="login-form">
          <input type="text" placeholder="Email or Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default ClientsPortal;
