import React from "react";
import { Button } from "react-bootstrap";
import { elements } from "../../constants/consts";

export const NavElementsList = ({ toggleModal }) => {
  return elements.map((item, index) => {
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
  });
};
