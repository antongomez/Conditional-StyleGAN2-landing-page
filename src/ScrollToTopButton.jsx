import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CaretUpFill } from "react-bootstrap-icons";

export const ScrollToTopButton = () => {
  const [showButton, setshowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para un desplazamiento suave
    });
  };

  const handleSrollToTopButton = () => {
    const currentPosition = window.scrollY;

    const scrollLimit = 70;

    // Si la posición del scroll supera el límite, cambia el estado
    if (currentPosition > scrollLimit) {
      setshowButton(true);
    } else {
      setshowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSrollToTopButton);

    // Limpia el evento de scroll al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener("scroll", handleSrollToTopButton);
    };
  }, []);

  return (
    <Button
      variant="light"
      className="position-fixed end-0 m-3 p-0 pb-1 rounded-circle"
      style={{
        width: "50px",
        height: "50px",
        transition: "opacity 0.4s, bottom 0.9s",
        opacity: showButton ? "1" : "0",
        bottom: showButton ? "0" : "-100px",
        zIndex: "1000",
      }}
      onClick={scrollToTop}
      aria-label="Ir arriba"
    >
      <CaretUpFill size={25} />
    </Button>
  );
};
