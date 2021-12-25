import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { FormConfigurationContext } from "../../App";
import { MODALHEADING } from "../../utils/consts";
import { ModalBody } from "../ModalBody/ModalBody";

export const ElementConfiguration = ({
  modal,
  toggleModal,
  currentData,
  currentIndex,
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    currentData && setData(currentData);
  }, [currentData]);

  function setCurrentField(event) {
    const { name, value } = event.target;
    const dataCopy = { ...data };
    dataCopy[name] = value;
    setData(dataCopy);
  }

  const formConfiguration = useContext(FormConfigurationContext);

  function addToFormConfiguration() {
    const elementConfig = {
      fieldType: modal,
      attributes: data,
    };
    let formConfigCopy = [...formConfiguration.formConfiguration];
    formConfigCopy.push(elementConfig);
    formConfiguration.setFormConfiguration(formConfigCopy);
    toggleModal();
  }

  function updateFormConfiguration() {
    const elementConfig = {
      fieldType: modal,
      attributes: data,
    };
    let formConfigCopy = [...formConfiguration.formConfiguration];
    formConfigCopy[currentIndex] = elementConfig;
    formConfiguration.setFormConfiguration(formConfigCopy);
    toggleModal();
  }

  return (
    <Modal show={modal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{MODALHEADING[modal]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalBody
          data={data}
          setCurrentField={setCurrentField}
          elementType={modal}
          addToFormConfiguration={addToFormConfiguration}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        {currentData ? (
          <Button
            variant="primary"
            onClick={() => {
              updateFormConfiguration(currentData);
            }}
          >
            Update Changes
          </Button>
        ) : (
          <Button variant="primary" onClick={addToFormConfiguration}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

ElementConfiguration.propTypes = {};
