import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import notFound from "../../images/notFound.svg";
const NotFound = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <div className="text-center py-5 mt-4">
        <img className="w-75" src={notFound} alt="" />
        <h1>Page Not Found !</h1>
        <Button onClick={handleGoBack} className="px-5 mt-3" variant="success">
          Go back!
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
