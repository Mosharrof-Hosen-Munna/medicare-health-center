import React from "react";
import { Col } from "react-bootstrap";
import medicareLogo from "../../../../images/medicare-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <Col className="rounded  bg-white">
      <img className="img-fluid" src={medicareLogo} alt="" />
      <p className="text-secondary my-3 text-align-justify">
        High-quality health care helps prevent diseases and improve quality of
        life. Healthy People 2030 focuses on improving health care quality and
        making sure all people get the health care services they need.
      </p>
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
          {" "}
          <FontAwesomeIcon className="fa-2x  text-info" icon={faInstagram} />
        </a>
      </div>
    </Col>
  );
};

export default Social;
