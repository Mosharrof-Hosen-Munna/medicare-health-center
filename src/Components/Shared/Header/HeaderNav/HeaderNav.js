import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../../../images/medicare-logo.png";
import useAuth from "../../../../hooks/useAuth";
const HeaderNav = () => {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/login");
  };

  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <img className="w-75 d-block d-lg-none" src={logo} alt="" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" fw-bold">
            <NavLink
              exact
              activeClassName="text-info"
              className="nav-link"
              to="/home"
            >
              HOME
            </NavLink>
            <NavLink
              exact
              activeClassName="text-info"
              className="nav-link"
              to="/about"
            >
              ABOUT US
            </NavLink>
            <NavLink
              exact
              activeClassName="text-info"
              className="nav-link"
              to="/services"
            >
              SERVICES
            </NavLink>
            <NavLink
              exact
              activeClassName="text-info"
              className="nav-link"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </Nav>
          <div className={user ? "mx-auto" : "ms-auto"}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100028489011065"
            >
              <FontAwesomeIcon
                className="fa-2x me-3 text-primary"
                icon={faFacebook}
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100028489011065"
            >
              <FontAwesomeIcon
                className="fa-2x me-3 text-success"
                icon={faTwitter}
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100028489011065"
            >
              <FontAwesomeIcon
                className="fa-2x me-3 text-danger"
                icon={faYoutube}
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100028489011065"
            >
              <FontAwesomeIcon
                className="fa-2x  text-info"
                icon={faInstagram}
              />
            </a>
          </div>
          {user && (
            <div className="d-flex ms-auto align-items-center">
              <h5 className="fw-bold text-secondary me-3">
                {user.displayName}
              </h5>
              <img
                width="50px"
                className="rounded-circle"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                }
                alt=""
              />
            </div>
          )}
          {user ? (
            <Button
              onClick={logOut}
              variant="danger"
              className="rounded-pill d-block d-lg-none px-5 fw-bold"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLoginClick}
              variant="primary"
              className="rounded-pill d-block d-lg-none px-5 fw-bold"
            >
              <FontAwesomeIcon
                className="fa-1x me-3 text-white"
                icon={faLock}
              />
              Log In
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNav;
