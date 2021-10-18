import React from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";
import {
  faEye,
  faUserMd,
  faTooth,
  faXRay,
  faVials,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
const HealthcareServices = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">
          <h5 className="text-info">Medical Services</h5>
          <h1 className="text-navy">Our Healthcare Service</h1>
          <p className="text-secondary w-75 mx-auto">
            Since its founding Brivona has been providing its patients with the
            full medical care, encompassing outpatients services, is neurology,
            laboratory, imaging diagnostics and more.
          </p>
        </div>
        <Row lg={3} xs={1} className="g-4 py-4">
          <ServiceCard title="Eye Care" icon={faEye}></ServiceCard>
          <ServiceCard title="Medical Checkup" icon={faUserMd}></ServiceCard>
          <ServiceCard title="Dental Care" icon={faTooth}></ServiceCard>
          <ServiceCard title="Cardiology" icon={faXRay}></ServiceCard>
          <ServiceCard
            title="Laboratory Service
"
            icon={faVials}
          ></ServiceCard>
          <ServiceCard title="Vaccination" icon={faSyringe}></ServiceCard>
        </Row>
      </Container>
    </section>
  );
};

export default HealthcareServices;
