import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faBuilding } from "@fortawesome/free-solid-svg-icons";
const ContactMessage = () => {
  return (
    <Col className="d-flex align-items-center">
      <div className="rounded rounded-3 shadow-lg bg-light p-3 p-lg-4 p-xl-4">
        <div className="mb-4">
          <h5 className="text-info">Contact Us</h5>
          <h1 className="text-navy mb-4">Let's Ge In Touch</h1>
          <p className="text-secondary mb-5 text-align-justify">
            Medhelp Center Hospital is a 162-bed facility founded in 1990 and
            located in coastal North Carolina. With the exception of Brynn Marr
            Psychiatric Hospital and the Naval Hospital at Camp Lejeune
          </p>
        </div>
        <div>
          <Row lg={2} xs={1} className="g-4">
            <Col>
              <div className="d-flex align-items-center">
                <div className=" me-3 bg-info rounded-3 p-3">
                  <FontAwesomeIcon className="fa-2x" icon={faBuilding} />
                </div>
                <div>
                  <h6 className="text-navy">Pk, Kishoreganj</h6>
                  <h6 className="text-secondary">
                    Jl. Raya Kuta No.70, Kuta - Bali Renon,
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default ContactMessage;
