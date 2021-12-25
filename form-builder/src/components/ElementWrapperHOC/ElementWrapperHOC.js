import React from "react";
import { ElementWrapperEditMode } from "../ElementWrapperEditMode/ElementWrapperEditMode";

export const ElementWrapperHOC = ({
  children,
  preview,
  item,
  index,
  handleDelete,
  handleEdit,
  provided,
  snapshot,
}) => {
  return !preview ? (
    <ElementWrapperEditMode
      item={item}
      index={index}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      provided={provided}
      snapshot={snapshot}
    >
      {children}
    </ElementWrapperEditMode>
  ) : (
    <div>{children}</div>
  );
};
