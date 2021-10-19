import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import logo from "../../../../images/medicare-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhoneSquareAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const TopHeader = () => {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/login");
  };

  const { user, logOut } = useAuth();

  return (
    <Row>
      <Col lg={3} className="d-none d-lg-block ">
        <img className="w-75" src={logo} alt="" />
      </Col>
      <Col lg={3} className="d-none d-lg-block ">
        <div className="d-flex align-items-center justify-content-end">
          <div>
            <FontAwesomeIcon
              className="fa-2x me-3 text-warning"
              icon={faEnvelopeOpenText}
            />
          </div>
          <div>
            <h6>
              <span>Mail Us</span>
            </h6>
            <h6>
              <span className="text-secondary">Info@domain.com</span>
            </h6>
          </div>
        </div>
      </Col>
      <Col lg={3} className="d-none d-lg-block">
        <div className="d-flex align-items-center justify-content-end">
          <div>
            <FontAwesomeIcon
              className="fa-2x me-3 text-success"
              icon={faPhoneSquareAlt}
            />
          </div>
          <div>
            <h6>
              <span>Call Us</span>
            </h6>
            <h6>
              <span className="text-secondary">(+021) 2336 278</span>
            </h6>
          </div>
        </div>
      </Col>
      <Col lg={3} className="d-none d-lg-block my-auto ">
        <div className="d-flex align-items-center justify-content-end">
          {user ? (
            <Button
              onClick={logOut}
              variant="danger"
              className="rounded-pill px-5 fw-bold"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLoginClick}
              variant="primary"
              className="rounded-pill px-5 fw-bold"
            >
              <FontAwesomeIcon
                className="fa-1x me-3 text-white"
                icon={faLock}
              />
              Log In
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default TopHeader;
