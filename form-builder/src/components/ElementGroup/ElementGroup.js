import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { elements } from "../../constants/consts";
import { ElementConfiguration } from "../ElementConfiguration";

export const ElementGroup = () => {
  const [modal, setModal] = useState(null);

  // updates state of modal
  function toggleModal(val) {
    if (modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  }
  return (
    <div className="h-100 p-3" style={{ overflow: "scroll" }}>
      {modal && (
        <ElementConfiguration modal={modal} toggleModal={toggleModal} />
      )}
      {elements.map((item, index) => {
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
      })}
    </div>
  );
};
