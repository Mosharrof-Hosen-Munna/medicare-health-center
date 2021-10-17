import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
const Appointment = () => {
  return (
    <Col>
      <h5>Make Appointment</h5>
      <hr className="w-50 text-primary p-1" />
      <div className="bg-navy rounded py-3 px-2 text-white d-flex align-items-center">
        <FontAwesomeIcon
          className="fa-2x text-white me-3"
          icon={faPhoneSquareAlt}
        />
        <div>
          <h6>Call Us </h6>
          <h6>(+021) 2336 278</h6>
        </div>
      </div>
      <p className="text-secondary mt-4">
        High-quality health care helps prevent diseases and improve quality of
        life. Healthy People 2030 focuses on improving health care
      </p>
    </Col>
  );
};

export default Appointment;
