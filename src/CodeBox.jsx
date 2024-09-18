import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

export const CodeBox = ({ children }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children).then(
      () => setCopySuccess("Copied!"),
      () => setCopySuccess("Failed to copy!")
    );
  };

  return (
    <Container fluid className="text-black rounded px-0">
      {/* <Container
        fluid
        className="bg-secondary rounded-top d-flex justify-content-end py-1 px-1"
      >
        <Button
          variant="transparent"
          onClick={copyToClipboard}
          className="fw-lighter p-0"
        >
          Copy to clipboard
        </Button>
        {copySuccess && (
          <span className="position-absolute top-0 start-0 m-0 bg-primary">
            {copySuccess}
          </span>
        )}
      </Container> */}
      <pre className="bg-light rounded px-2 py-2">
        <code>{children}</code>
      </pre>
    </Container>
  );
};
