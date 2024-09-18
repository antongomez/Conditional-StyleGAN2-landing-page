import React, { useState, useRef } from "react";
import { Container, Navbar, Nav, Offcanvas, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleButtonRef = useRef(null);

  return (
    <Navbar
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="border-bottom m-0 mw-100"
    >
      <Container fluid className="bg-dark px-5 py-2">
        <Col xs="auto" xxl={2} className="p-0">
          <Navbar.Brand href="#" className="me-xl-0">
            Conditional StyleGAN2
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle
          ref={toggleButtonRef}
          aria-controls="offcanvasNavbar-expand-md"
          onClick={() => setShowOffcanvas(!showOffcanvas)}
        />

        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          restoreFocus={false}
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
              <Nav.Link
                onClick={() => setShowOffcanvas(false)}
                href="#description"
              >
                Description
              </Nav.Link>
              <Nav.Link
                onClick={() => setShowOffcanvas(false)}
                href="#features"
              >
                Features
              </Nav.Link>
              <Nav.Link onClick={() => setShowOffcanvas(false)} href="#results">
                Results
              </Nav.Link>
              <Nav.Link onClick={() => setShowOffcanvas(false)} href="#usage">
                Usage
              </Nav.Link>
              <Nav.Link
                onClick={() => setShowOffcanvas(false)}
                href="#applications"
              >
                Applications
              </Nav.Link>
              <Nav.Link
                onClick={() => setShowOffcanvas(false)}
                href="#contributing"
              >
                Contributing
              </Nav.Link>
              <Nav.Link onClick={() => setShowOffcanvas(false)} href="#license">
                License
              </Nav.Link>
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
