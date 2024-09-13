import React, { useState } from "react";
import { Container, Image, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import "./scss/zoomableImage.scss";

export const ZoomableImage = ({ imageSrc, altText, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <Container fluid className="p-0 position-relative">
      <Container
        fluid
        className="p-0 img-mask d-flex justify-content-center align-items-center bg-light"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={imageSrc}
          alt={altText}
          className="position-relative w-100"
          fluid
        />
        <Container
          fluid
          className="zoomableImageOverlay d-flex justify-content-center align-items-center"
        >
          <Plus size={50} className="text-light" />
        </Container>
      </Container>
      <Modal
        show={isZoomed}
        fullscreen={true}
        onHide={() => setIsZoomed(false)}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        contentClassName="bg-transparent border-0 p-0"
        data-bs-backdrop="static"
        data-bs-theme="dark"
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body
          className="m-0 p-0 d-flex justify-content-center"
          onClick={() => setIsZoomed(false)}
        >
          <Container
            className={`zoomedImg p-0 d-flex ${className} justify-content-center mw-xl-75`}
          >
            <Image
              fluid
              src={imageSrc}
              alt={altText}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
