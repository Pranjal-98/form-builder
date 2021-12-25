import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormConfigurationContext } from "../../App";
import { ElementConfiguration } from "../../components/ElementConfiguration";
import { ElementWrapperEditMode } from "../../components/ElementWrapperEditMode/ElementWrapperEditMode";
import { spawnFormElement } from "../../spawner";

export const FormGenerator = () => {
  const formConfiguration = useContext(FormConfigurationContext);
  const [modal, setModal] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  function toggleModal(val) {
    if (modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  }
  function handleDelete(index) {
    let formConfigCopy = [...formConfiguration.formConfiguration];
    formConfigCopy.splice(index, 1);
    formConfiguration.setFormConfiguration(formConfigCopy);
  }
  function handleEdit(item, index) {
    setCurrentData(item.attributes);
    setCurrentIndex(index);
    toggleModal(item.fieldType);
  }
  function renderFormElements() {
    return formConfiguration.formConfiguration.map((item, index) => {
      return (
        <Row className="justify-content-center m-3" key={index}>
          <Col xs={8}>
            <ElementWrapperEditMode
              item={item}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            >
              {spawnFormElement(item)}
            </ElementWrapperEditMode>
          </Col>
        </Row>
      );
    });
  }
  return (
    <Container fluid>
      {modal && (
        <ElementConfiguration
          modal={modal}
          toggleModal={toggleModal}
          currentData={currentData}
          currentIndex={currentIndex}
        />
      )}
      {renderFormElements()}
    </Container>
  );
};
