import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../../images/doctor1.jpg";
import doctor2 from "../../../images/doctor2.jpg";
import doctor3 from "../../../images/doctor3.jpg";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const MeetDoctors = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">
          <h5 className="text-info">Our Doctors</h5>
          <h1 className="text-navy">Meet With Our Doctor</h1>
          <p className="text-secondary w-75 mx-auto">
            Since its founding Brivona has been providing its patients with the
            full medical care, encompassing outpatients services, is neurology,
            laboratory, imaging diagnostics and more.
          </p>
        </div>
        <Row lg={3} xs={1} className="g-4 py-5 mb-5">
          <SingleDoctor
            name="Dr. Ryley Mueller"
            passion="Cardiology"
            doctorImage={doctor1}
          ></SingleDoctor>
          <SingleDoctor
            name="Dr. Elisa Hodges"
            passion="Dentist"
            doctorImage={doctor2}
          ></SingleDoctor>
          <SingleDoctor
            name="Dr. Carlo Hilton"
            passion="General Doctor"
            doctorImage={doctor3}
          ></SingleDoctor>
        </Row>
      </Container>
    </section>
  );
};

export default MeetDoctors;
