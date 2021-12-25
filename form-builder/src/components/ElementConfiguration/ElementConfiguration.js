import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { FormConfigurationContext } from "../../App";
import { MODALHEADING } from "../../constants/consts";
import { ModalBody } from "../ModalBody/ModalBody";

export const ElementConfiguration = ({
  modal,
  toggleModal,
  currentData,
  currentIndex,
  currentOptions,
}) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    currentOptions && setOptions(currentOptions);
  }, [currentOptions]);

  useEffect(() => {
    currentData && setData(currentData);
  }, [currentData]);

  // Sets the value of attributes of selected elements
  function setCurrentField(event) {
    const { name, value } = event.target;
    const dataCopy = { ...data };
    dataCopy[name] = value;
    setData(dataCopy);
  }

  // Context
  const formConfiguration = useContext(FormConfigurationContext);

  // Adds the data to context
  function addToFormConfiguration() {
    const elementConfig = {
      fieldType: modal,
      attributes: data,
    };
    if (options) {
      elementConfig.attributes.options = options;
    }
    let formConfigCopy = [...formConfiguration.formConfiguration];
    formConfigCopy.push(elementConfig);
    formConfiguration.setFormConfiguration(formConfigCopy);
    toggleModal();
  }

  // Updates the data in context
  function updateFormConfiguration() {
    const elementConfig = {
      fieldType: modal,
      attributes: data,
    };
    if (options) {
      elementConfig.attributes.options = options;
    }
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
          options={options}
          setOptions={setOptions}
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
