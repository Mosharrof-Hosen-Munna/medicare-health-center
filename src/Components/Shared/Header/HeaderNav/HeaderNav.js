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
import { Link, useHistory } from "react-router-dom";
import logo from "../../../../images/medicare-logo.png";
const HeaderNav = () => {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/login");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <img className="w-75 d-block d-lg-none" src={logo} alt="" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Link className="nav-link" to="/home">
              HOME
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT US
            </Link>
            <Link className="nav-link" to="/services">
              SERVICES
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </Nav>
          <div>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x me-3 text-primary"
                icon={faFacebook}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x me-3 text-success"
                icon={faTwitter}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x me-3 text-danger"
                icon={faYoutube}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x  text-info"
                icon={faInstagram}
              />
            </a>
            <Button
              onClick={handleLoginClick}
              variant="danger"
              className="rounded-pill px-5 fw-bold d-block d-lg-none mt-3"
            >
              <FontAwesomeIcon
                className="fa-1x me-3 text-white"
                icon={faLock}
              />
              Log In
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNav;
