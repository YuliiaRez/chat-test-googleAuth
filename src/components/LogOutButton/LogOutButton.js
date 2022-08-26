import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../index";
import "./LogOutButton.css";

function LogOutButton() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user?.displayName && (
        <NavLink to="/">
          <button className="logout-button" onClick={handleSignOut}>
            Log Out
          </button>
        </NavLink>
      )}
    </>
  );
}

export default LogOutButton;
