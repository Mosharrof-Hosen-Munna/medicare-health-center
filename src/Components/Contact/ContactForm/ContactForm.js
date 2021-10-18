import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Col>
      <div className="rounded rounded-3 shadow-lg bg-light p-3 py-5 p-lg-4 py-xl-5">
        <h2 className="text-navy mb-3 text-center">Message</h2>
        <Form>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="email" placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default ContactForm;
