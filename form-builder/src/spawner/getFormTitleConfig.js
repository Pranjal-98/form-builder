import { Form } from "react-bootstrap";

export function getFormTitleConfig(setCurrentField, data) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Form Title</Form.Label>
        <Form.Control
          name="title"
          size="sm"
          type="text"
          placeholder="Add form title"
          onChange={(e) => setCurrentField(e)}
          value={data?.["title"] || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subheading</Form.Label>
        <Form.Control
          name="subheading"
          size="sm"
          type="text"
          placeholder="Add subheading"
          onChange={(e) => setCurrentField(e)}
          value={data?.["subheading"] || ""}
        />
      </Form.Group>
    </>
  );
}
