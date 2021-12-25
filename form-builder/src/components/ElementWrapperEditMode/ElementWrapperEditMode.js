import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import "./styles.css";

export const ElementWrapperEditMode = ({
  children,
  item,
  index,
  handleDelete,
  handleEdit,
}) => {
  return (
    <Row className="d-flex justify-content-space-between w-100 py-4 px-2 elementWrapper">
      <Col xs={1}></Col>
      <Col xs={9}>{children}</Col>
      <Col xs={2}>
        <div className="d-flex justify-content-center">
          <Button
            variant="secondary"
            className="controlButton"
            size="sm"
            onClick={() => {
              handleEdit(item, index);
            }}
          >
            <Pencil />
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            variant="danger"
            className="controlButton"
            size="sm"
            onClick={() => {
              handleDelete(index);
            }}
          >
            <Trash />
          </Button>
        </div>
      </Col>
    </Row>
  );
};