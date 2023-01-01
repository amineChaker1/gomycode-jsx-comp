import guts from "./guts.jpg";
import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <header className="header">
        <div className="profileImg">
          <img src={guts} alt="" />
        </div>
        <div className="profileInfo">
          <h1>
            Name : <br /> Guts the protagoniste of Berserk
          </h1>
          <h3>
            Address : <br />
            Lives in our hearts as a representation of <br /> the continuous
            difficulties of existence
          </h3>
        </div>
      </header>
    </>
  );
};
export default Profile;
