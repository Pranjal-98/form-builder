import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { spawnElemenConfig } from "../../spawner";

export const ModalBody = ({
  elementType,
  data,
  setCurrentField,
  addToFormConfiguration,
  options,
  setOptions,
}) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addToFormConfiguration();
      }}
    >
      {spawnElemenConfig(
        elementType,
        data,
        setCurrentField,
        options,
        setOptions
      )}
    </Form>
  );
};

ModalBody.propTypes = {};
