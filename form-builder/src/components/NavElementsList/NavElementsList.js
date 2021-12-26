import React from "react";
import { Button } from "react-bootstrap";

export const NavElementsList = ({ toggleModal, elements }) => {
  return elements.length > 0 ? (
    elements.map((item, index) => {
      return (
        <Button
          key={index}
          variant="outline-info"
          className="w-100 mb-3"
          onClick={() => toggleModal(item.type)}
        >
          {item.buttonTitle}
        </Button>
      );
    })
  ) : (
    <div className="text-muted d-flex justify-content-center mt-5">
      <p>
        <small>Not matching element found</small>
      </p>
    </div>
  );
};
