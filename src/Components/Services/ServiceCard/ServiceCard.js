import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ServiceCard = ({ title, icon }) => {
  return (
    <Col>
      <div className="shadow bg-light rounded p-3 p-lg-4">
        <div>
          <FontAwesomeIcon className="fa-3x text-info" icon={icon} />
        </div>
        <h3 className="text-navy my-3">{title}</h3>
        <p className="text-secondary">
          Behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in
          Bookmarks grove right
        </p>
        <p>
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
    </Col>
  );
};

export default ServiceCard;
