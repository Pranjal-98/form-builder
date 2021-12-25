import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FormConfigurationContext } from "../../App";
import { ElementConfiguration } from "../../components/ElementConfiguration";
import { ElementWrapperEditMode } from "../../components/ElementWrapperEditMode/ElementWrapperEditMode";
import { spawnFormElement } from "../../spawner";

export const FormGenerator = () => {
  const formConfiguration = useContext(FormConfigurationContext);
  const [modal, setModal] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);

  function toggleModal(val) {
    if (modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  }
  // updates context on updation of elements
  function handleDelete(index) {
    let formConfigCopy = [...formConfiguration.formConfiguration];
    formConfigCopy.splice(index, 1);
    formConfiguration.setFormConfiguration(formConfigCopy);
  }

  // updates value on click of edit element
  function handleEdit(item, index) {
    setCurrentData(item.attributes);
    if (item.attributes.options) {
      setCurrentOptions(item.attributes.options);
    }
    setCurrentIndex(index);
    toggleModal(item.fieldType);
  }

  // reorders elements post drag in context
  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  // renders form elements after selection from side-bar
  function renderFormElements() {
    return formConfiguration.formConfiguration.map((item, index) => {
      return (
        <Draggable key={index} draggableId={index.toString()} index={index}>
          {(provided, snapshot) => (
            <>
              <Row
                className="justify-content-center m-3"
                key={index}
                ref={provided.innerRef}
                {...provided.draggableProps}
              >
                <Col xs={8}>
                  <ElementWrapperEditMode
                    item={item}
                    index={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    provided={provided}
                  >
                    {spawnFormElement(item)}
                  </ElementWrapperEditMode>
                </Col>
              </Row>
              {provided.placeholder}
            </>
          )}
        </Draggable>
      );
    });
  }
  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) {
          return;
        }
        let formConfigCopy = [...formConfiguration.formConfiguration];
        const reordered = reorder(
          formConfigCopy,
          result.source.index,
          result.destination.index
        );

        formConfiguration.setFormConfiguration(reordered);
      }}
    >
      <Droppable droppableId="container">
        {(provided, snapshot) => (
          <>
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
              fluid
              id="container"
            >
              {modal && (
                <ElementConfiguration
                  modal={modal}
                  toggleModal={toggleModal}
                  currentData={currentData}
                  currentIndex={currentIndex}
                  currentOptions={currentOptions}
                />
              )}
              {renderFormElements()}
            </Container>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
};
