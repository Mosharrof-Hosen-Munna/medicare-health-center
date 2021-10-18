import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Col } from "react-bootstrap";
const SingleDoctor = ({ doctorImage, name, passion }) => {
  return (
    <Col>
      <div className="position-relative">
        <div>
          <img className="img-fluid rounded-3" src={doctorImage} alt="" />
        </div>
        <div
          style={{ top: "80%", left: "5%" }}
          className="text-center bg-navy rounded rounded-3 p-4 w-90 mx-auto position-absolute"
        >
          <h6 className="text-info">{passion}</h6>
          <h3 className="text-white">{name}</h3>
          <div className=" mt-4">
            <a href="">
              <FontAwesomeIcon
                className="fa-2x text-white me-3 p-2 bg-info rounded-circle"
                icon={faFacebook}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x text-white me-3 p-2 bg-info rounded-circle"
                icon={faTwitter}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x text-white me-3 p-2 bg-info rounded-circle"
                icon={faYoutube}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="fa-2x text-white p-2 bg-info rounded-circle"
                icon={faInstagram}
              />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDoctor;
