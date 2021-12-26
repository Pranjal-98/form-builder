import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { templates } from "../../constants/consts";
import { ElementConfiguration } from "../ElementConfiguration";
import { NavElementsList } from "../NavElementsList";
import { NavTemplatesList } from "../NavTemplatesList";

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
    <div className="p-3" style={{ overflow: "scroll", height: "85vh" }}>
      {modal && (
        <ElementConfiguration modal={modal} toggleModal={toggleModal} />
      )}
      <p className="text-white">Basic Elements</p>

      <NavElementsList toggleModal={toggleModal} />
      <p className="text-white">Templates</p>
      <NavTemplatesList toggleModal={toggleModal} />
    </div>
  );
};
