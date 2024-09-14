import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <Container
      fluid
      className="py-2 px-5 bg-dark text-white fw-lighter border-top"
    >
      <Row className="justify-content-md-between justify-content-center align-items-center d-flex flex-column flex-md-row">
        <Col xs="auto" className="order-2 order-md-1">
          <span>© 2024 Antón Gómez López, All rights reserved</span>
        </Col>
        <Col xs="auto" className="d-flex order-1 order-md-2 mb-2 mb-md-0">
          <Button
            variant="transparent"
            className="p-0 text-white me-2"
            href="https://github.com/antongomez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={25} />
          </Button>
          <Button
            variant="transparent"
            className="p-0 text-white mx-2"
            href="mailto:antongomez03@gmail.com"
          >
            <EnvelopeFill size={25} />
          </Button>
          <Button
            variant="transparent"
            className="p-0 text-white ms-2"
            href="https://www.linkedin.com/in/anton-gomez-lopez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={25} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
