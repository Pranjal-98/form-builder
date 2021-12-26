import { Form } from "react-bootstrap";

export function getSwitchConfig(setCurrentField, data) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>ID of switch</Form.Label>
        <Form.Control
          name="id"
          size="sm"
          type="text"
          placeholder="ID of switch"
          onChange={(e) => setCurrentField(e)}
          value={data?.["id"] || ""}
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
      <Form.Group
        className="mb-3"
        value={data?.["disabled"]}
        onChange={(e) => setCurrentField(e)}
      >
        <Form.Label>Disabled?</Form.Label>
        <Form.Check
          type={"radio"}
          name="disabled"
          label={"Yes"}
          value={"true"}
        />
        <Form.Check
          type={"radio"}
          name="disabled"
          label={"No"}
          value={"false"}
        />
      </Form.Group>
    </>
  );
}
