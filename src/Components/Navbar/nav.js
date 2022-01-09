import React, { useState } from "react";
import "./nav.css";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const navLinks = [
    { to: "/home", catagory: "Home", id: 1 },
    { to: "/bollywood", catagory: "Bollywood", id: 2 },
    { to: "/technology", catagory: "Technology", id: 3 },
    { to: "/hollywood", catagory: "Hollywoood", id: 4 },
    { to: "/fitness", catagory: "Fitness", id: 5 },
    { to: "/food", catagory: "Food", id: 6 },
  ];

  let userLoggedIn = true;
  const user = localStorage.getItem("user");

  if (user == null) {
    userLoggedIn = false;
  }

  return (
    <>
      <nav>
        <div className="Logo">
          <h4 className="logo-head">The</h4>
          <span>Siren</span>
        </div>

        <div className="head-list">
          <ul className={showNavLinks ? "nav-links-mobile" : "nav-links"}>
            {navLinks.map((value, index) => {
              return (
                <li>
                  <NavLink
                    to={value.to}
                    key={index}
                    activeClassName="active"
                    exact
                  >
                    {value.catagory}{" "}
                  </NavLink>{" "}
                </li>
              );
            })}
            <NavLink to="/get-started">
              <button className="btn">
                {userLoggedIn ? "View Profile" : "Get Started"}
              </button>
            </NavLink>
          </ul>
          <div
            className="hamburg-menu"
            onClick={() => setShowNavLinks(!showNavLinks)}
          >
            {showNavLinks ? <HiOutlineX /> : <HiMenu />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
