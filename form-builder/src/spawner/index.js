import { Form } from "react-bootstrap";

export const spawnFormElement = (item) => {
  const { fieldType, attributes } = item;
  switch (fieldType) {
    case "text-input":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Control
            name={attributes.id}
            size="sm" // todo
            type="text" // todo
            placeholder={attributes.placeholder}
            autoFocus
          />
        </Form.Group>
      );
    case "form-title":
      return <h2>{attributes.title}</h2>;
  }
};

export const spawnElemenConfig = (type, data, setCurrentField) => {
  switch (type) {
    case "text-input":
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>ID of text input</Form.Label>
            <Form.Control
              name="id"
              size="sm"
              type="text"
              placeholder="ID of text input"
              onChange={(e) => setCurrentField(e)}
              value={data?.["id"] || ""}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Label </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="label"
              placeholder="Label"
              onChange={(e) => setCurrentField(e)}
              value={data?.["label"] || ""}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Placeholder</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Placeholder"
              name="placeholder"
              onChange={(e) => setCurrentField(e)}
              value={data?.["placeholder"] || ""}
            />
          </Form.Group>
        </>
      );
    case "form-title":
      return (
        <Form.Group className="mb-3">
          <Form.Label>Form Title</Form.Label>
          <Form.Control
            name="title"
            size="sm"
            type="text"
            placeholder="Add form title"
            onChange={(e) => setCurrentField(e)}
            value={data?.["title"] || ""}
            autoFocus={true}
          />
        </Form.Group>
      );
  }
};
