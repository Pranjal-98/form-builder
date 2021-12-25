import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ElementConfiguration } from "../ElementConfiguration";

export const ElementGroup = () => {
  const [modal, setModal] = useState(null);
  function toggleModal(val) {
    if (modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  }
  return (
    <div className="h-100 overflow-scroll p-3">
      {modal && (
        <ElementConfiguration modal={modal} toggleModal={toggleModal} />
      )}
      <Button
        variant="outline-info"
        className="w-100 mb-3"
        onClick={() => toggleModal("form-title")}
      >
        Form Title
      </Button>
      <Button
        variant="outline-info"
        className="w-100 mb-3"
        onClick={() => toggleModal("text-input")}
      >
        Text Input
      </Button>
    </div>
  );
};
