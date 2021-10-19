import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Button, Container, Form, Row } from "react-bootstrap";
import registerImage from "../../images/register.svg";
import "./Register.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleEmailPasswordRegister,
    setUserName,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const signInGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        history.push(location.state?.from || "/home");
      })
      .catch((error) => console.log(error.message));
  };

  const signInGithub = () => {
    handleGithubSignIn().then((result) => {
      history.push(location.state?.from || "/home");
    });
  };

  const handleEmailRegistration = (e) => {
    e.preventDefault();
    handleEmailPasswordRegister(email, password, name).then((result) => {
      setUserName(name);
      history.push(location.state?.from || "/home");
    });

    console.log(email, password);
  };

  return (
    <section
      style={{ minHeight: "650px" }}
      className="bg-transparent d-flex py-3 align-items-center"
    >
      <Container>
        <Row lg={2} xs={1} className="g-3">
          <Col>
            <div className="rounded rounded-3 shadow-lg bg-light p-3 py-5 p-lg-4 py-xl-5">
              <h2 className="text-navy mb-3 text-center">
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faLock}
                />
                Register
              </h2>
              <Form onSubmit={handleEmailRegistration}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <div className="divider text-center my-3 fs-5">
                <span className="divider-content">Or</span>
              </div>
              <Row lg={2} xs={1} className="g-3">
                <Col>
                  <Button
                    onClick={signInGoogle}
                    variant="info"
                    className="w-100 text-white fw-bold"
                  >
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faGoogle}
                    />
                    Google Sign In
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={signInGithub}
                    variant="primary"
                    className="w-100 fw-bold"
                  >
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faGithub}
                    />
                    Github Sign In
                  </Button>
                </Col>
              </Row>
              <div className="text-center mt-3">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="m-auto">
              <img className="w-100" src={registerImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
