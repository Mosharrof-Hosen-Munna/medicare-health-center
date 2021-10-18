import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactMessage from "./ContactMessage/ContactMessage";

const Contact = () => {
  return (
    <section>
      <Container>
        <Row lg={2} xs={1}>
          <ContactMessage></ContactMessage>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
