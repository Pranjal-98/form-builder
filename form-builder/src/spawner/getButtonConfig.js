import { Form } from "react-bootstrap";
import { buttonVariants } from "../constants/consts";

export function getButtonConfig(setCurrentField, data) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>ID of button</Form.Label>
        <Form.Control
          name="id"
          size="sm"
          type="text"
          placeholder="ID of drop down"
          onChange={(e) => setCurrentField(e)}
          value={data?.["id"] || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          size="sm"
          type="text"
          name="text"
          placeholder="Button text"
          onChange={(e) => setCurrentField(e)}
          value={data?.["text"] || ""}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Variant</Form.Label>
        <Form.Select name="variant" onChange={(e) => setCurrentField(e)}>
          {buttonVariants.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </Form.Select>
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
