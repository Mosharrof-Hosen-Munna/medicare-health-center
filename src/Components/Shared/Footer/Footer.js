import React from "react";
import { Container, Row } from "react-bootstrap";
import Appointment from "./Appointment/Appointment";
import ContactDetails from "./ContactDetails/ContactDetails";
import Social from "./Social/Social";

const Footer = () => {
  return (
    <footer className="bg-light pt-5">
      <Container>
        <Row lg={3} xs={1} className="g-4">
          <Social></Social>
          <ContactDetails></ContactDetails>
          <Appointment></Appointment>
        </Row>
      </Container>
      <hr />
      <p className=" p-3 m-0 bg-light text-center">
        Develop by
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100028489011065"
        >
          MH Munna
        </a>
        | &copy; 2021 all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
