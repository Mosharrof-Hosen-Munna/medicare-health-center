import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Button, Container, Form, Row } from "react-bootstrap";
import loginImage from "../../images/login.svg";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleEmailLogin = () => {};
  return (
    <section
      style={{ minHeight: "650px" }}
      className="bg-transparent d-flex align-items-center"
    >
      <Container>
        <Row lg={2} xs={1} className="g-3">
          <Col>
            <div className="rounded rounded-3 shadow-lg bg-light p-5">
              <h2 className="text-navy mb-3 text-center">
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faLock}
                />
                Log In
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="divider text-center my-3 fs-5">
                <span className="divider-content">Or</span>
              </div>
              <Row lg={2} xs={1} className="g-3">
                <Col>
                  <Button variant="info" className="w-100 text-white fw-bold">
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faGoogle}
                    />
                    Google Sign In
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" className="w-100 fw-bold">
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faFacebook}
                    />
                    Facebook Sign In
                  </Button>
                </Col>
              </Row>
              <div className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <img className="w-100" src={loginImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
