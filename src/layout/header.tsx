import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../assets/images/logo.gif";

const Header = () => {
  return (
    <Container>
      <Row className="my-4 m-auto">
        <Col>
          <div className="d-flex align-items-center">
            <h1 className="text-uppercase logo-heading">Offers</h1>
            <img src={logo} width={100} alt="Christmas Offers" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
