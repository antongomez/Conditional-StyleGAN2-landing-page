import React from "react";
import { Container, Navbar, Nav, Offcanvas, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const Header = () => {
  return (
    <Navbar
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="border-bottom"
    >
      <Container fluid className="bg-dark px-5 py-2">
        <Col xs="auto" xxl={2} className="p-0">
          <Navbar.Brand href="#" className="me-xl-0">
            Conditional StyleGAN2
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="start"
          className="bg-dark text-white"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="text-nowrap">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#description">Description</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#results">Results</Nav.Link>
              <Nav.Link href="#usage">Usage</Nav.Link>
              <Nav.Link href="#applications">Applications</Nav.Link>
              <Nav.Link href="#contributing">Contributing</Nav.Link>

              <Nav.Link href="#license">License</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Col
          xs="auto"
          xxl={2}
          className="p-0 text-white d-none d-lg-flex justify-content-end"
        >
          <Nav.Link
            href="https://github.com/antongomez/Conditional-StyleGAN2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={30} className="ms-2 ms-xl-0" />
          </Nav.Link>
        </Col>
      </Container>
    </Navbar>
  );
};
