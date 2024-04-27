import React from "react";
import IconUser from "../../images/user.svg"; // Make sure this path is correct
import "../../styles/style.css";

function NavBar(props) {
  const { fullName, isLoggedIn } = props;

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn profile-btn">
          <svg className="btn-icon__svg">
            <use href={IconUser + "sprite.svg#icon-user"}></use>{" "}
          </svg>
          {isLoggedIn && <span className="userName">{fullName}</span>}
        </button>
        <div className="dropdown-content profile-dropdown u-hidden">
          {isLoggedIn ? (
            <>
              <a href="/">User Profile</a>
              <a href="/">Logout</a>
            </>
          ) : (
            <a href="/">Login</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
