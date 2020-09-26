import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";

function Header(props) {
  const { user, firebase } = React.useContext(FirebaseContext);

  return (
    <div className="header">
      <div className="flex">
        <NavLink to="/" className="header-title">
          <i
            className="material-icons"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            home
          </i>
          <span className="ml2">EEEB371 Labs</span>
        </NavLink>
      </div>
      <div className="flex">
        {user ? (
          <>
            <div className="header-name">{user.displayName}</div>
            <div className="divider">|</div>
            <div
              className="header-button"
              onClick={() => {
                firebase.logout();
                props.history.push("/login");
              }}
            >
              logout
            </div>
          </>
        ) : (
          <NavLink to="/login" className="header-link">
            login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default withRouter(Header);
