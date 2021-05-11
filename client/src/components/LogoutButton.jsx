import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="loginButton">
        <button
          className="loginButton"
          onClick={() =>
            logout({ returnTo: "https://digital-bookmark.herokuapp.com/" })
          }
        >
          {" "}
          Log Out
        </button>
      </div>
    )
  );
};

export default LogoutButton;
