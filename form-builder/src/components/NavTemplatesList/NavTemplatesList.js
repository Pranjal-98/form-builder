import React from "react";
import { Button } from "react-bootstrap";
import { templates } from "../../constants/consts";

export const NavTemplatesList = ({ toggleModal }) => {
  return templates.map((item, index) => {
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
