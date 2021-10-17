import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faEnvelopeOpen,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

const ContactDetails = () => {
  return (
    <Col className="rounded text-white pt-4 bg-skyBlue">
      <h5>Contact Details</h5>
      <hr className="w-50 text-white p-1" />
      <p className="d-flex align-items-center">
        <FontAwesomeIcon
          className="fa-1x text-info me-3"
          icon={faLocationArrow}
        />
        Jl. Raya Kuta No.70, Kuta
      </p>
      <p className="d-flex align-items-center">
        <FontAwesomeIcon
          className="fa-1x text-warning me-3"
          icon={faEnvelopeOpen}
        />
        support@domain.com
      </p>
      <p className="d-flex align-items-center">
        <FontAwesomeIcon className="fa-1x text-white me-3" icon={faClock} />8 AM
        - 5 PM , Monday - Saturday
      </p>
      <p className="d-flex align-items-center">
        <FontAwesomeIcon className="fa-1x text-danger me-3" icon={faPhone} />
        (+021) 2336 278
      </p>
    </Col>
  );
};

export default ContactDetails;
