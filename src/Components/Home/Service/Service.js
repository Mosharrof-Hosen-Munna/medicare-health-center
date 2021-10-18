import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Service = ({ service }) => {
  console.log(service);
  const history = useHistory();
  const handleServiceDetails = () => {
    history.push(`/service/${service.id}`);
  };
  return (
    <Col>
      <Card className="h-100 bg-white border-0 shadow">
        <Card.Img variant="top" src={service.serviceUrl} />
        <Card.Body>
          <Card.Title className="text-success">
            {service.serviceName}
          </Card.Title>
          <Card.Text className="text-secondary">
            {service.descriptions}
          </Card.Text>
          <Button
            onClick={handleServiceDetails}
            variant="success"
            className="w-100 rounded-pill"
          >
            {"Read More ->"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
