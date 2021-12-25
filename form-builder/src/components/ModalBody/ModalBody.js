import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { spawnElemenConfig } from "../../spawner";

export const ModalBody = ({
  elementType,
  data,
  setCurrentField,
  addToFormConfiguration,
}) => {
  switch (elementType) {
    case "text-input":
      return (
        <Form
          onSubmit={(e) => {
            console.log("here");
            e.preventDefault();
            addToFormConfiguration();
          }}
        >
          {spawnElemenConfig(elementType, data, setCurrentField)}
        </Form>
      );
    case "form-title":
      return (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addToFormConfiguration();
          }}
        >
          {spawnElemenConfig(elementType, data, setCurrentField)}
        </Form>
      );
  }
};

ModalBody.propTypes = {};
