import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const HomeServices = ({ services }) => {
  return (
    <section className="py-5 bg-blue-500">
      <Container>
        <div className="text-center">
          <h5 className="text-info">How Our Services Works</h5>
          <h1 className="text-navy">Our Top Most Priority Services</h1>
          <p className="text-secondary w-75 mx-auto">
            A responsive Emergency Department and Minor Emergency Care Unit
            treats more than 50,000 patients annually. In recent years, a robust
            array of online services and portals have been.
          </p>
          <Row lg={3} xs={1} className="g-4 py-5">
            {services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HomeServices;
