import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";

function Header(props) {
  const { user, firebase } = React.useContext(FirebaseContext);

  return (
    <div className="header">
      <div className="flex">
        <NavLink to="/" className="header-title">
          EEEB371 Labs
        </NavLink>
        {/* user && (
          <>
            <NavLink to="/add-lab1" className="header-link">
              Add Lab 1
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab2" className="header-link">
              Add Lab 2
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab3" className="header-link">
              Add Lab 3
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab4" className="header-link">
              Add Lab 4
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab5" className="header-link">
              Add Lab 5
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab6" className="header-link">
              Add Lab 6
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/add-lab7" className="header-link">
              Add Lab 7
            </NavLink>
            <div className="divider">|</div>
          </>
        ) */}
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
