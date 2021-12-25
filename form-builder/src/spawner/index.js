import { Button, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { buttonVariants } from "../constants/consts";

function getDropdownOptions(options, setOptions) {
  return (
    <div>
      <div>
        {options.map((val, index) => {
          return (
            <Form.Group className="mb-3 d-flex justify-content-between">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter option"
                name={`option${val.id}`}
                onChange={(e) => {
                  let optionsCopy = [...options];
                  options[index].value = e.target.value;
                  setOptions(optionsCopy);
                }}
                value={options[index].value || ""}
              />
              <Button
                variant="outline-danger"
                size="sm"
                className="ml-1"
                onClick={() => {
                  let optionsCopy = [...options];
                  optionsCopy.splice(index, 1);
                  setOptions(optionsCopy);
                }}
              >
                <Trash />
              </Button>
            </Form.Group>
          );
        })}
      </div>
      <div className="d-grid gap-2">
        <Button
          variant="info"
          size="sm"
          onClick={() => {
            let optionsCopy = [...options];
            let currId = optionsCopy.length;
            optionsCopy.push({ id: currId });
            setOptions(optionsCopy);
          }}
        >
          Add Option
        </Button>
      </div>
    </div>
  );
}

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
    case "text-area":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name={attributes.id}
            size="sm" // todo
            placeholder={attributes.placeholder}
            autoFocus
          />
        </Form.Group>
      );
    case "drop-down":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Select>
            {attributes.options.map((item) => {
              return <option key={item.id}>{item.value}</option>;
            })}
          </Form.Select>
        </Form.Group>
      );

    case "button":
      console.log(attributes.variant, "*** hvs");
      return (
        <Form.Group>
          <Button variant={attributes.variant} size={attributes.size}>
            {attributes.text}{" "}
          </Button>
        </Form.Group>
      );
    case "radio":
      return (
        <>
          <Form.Label>{attributes.label}</Form.Label>

          {attributes.options.map((item) => {
            return (
              <Form.Check type={"radio"} id={item.id} label={item.value} />
            );
          })}
        </>
      );
    case "check-box":
      return (
        <>
          <Form.Label>{attributes.label}</Form.Label>

          {attributes.options.map((item) => {
            return (
              <Form.Check type={"checkbox"} id={item.id} label={item.value} />
            );
          })}
        </>
      );
    case "switch":
      return (
        <>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={attributes.label}
          />
        </>
      );
  }
};

export const spawnElemenConfig = (
  type,
  data,
  setCurrentField,
  options,
  setOptions
) => {
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

    case "text-area":
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>ID of text area</Form.Label>
            <Form.Control
              name="id"
              size="sm"
              type="text"
              placeholder="ID of text area"
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

    case "drop-down":
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>ID of dropdown</Form.Label>
            <Form.Control
              name="id"
              size="sm"
              type="text"
              placeholder="ID of drop down"
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
          {getDropdownOptions(options, setOptions)}
        </>
      );

    case "button":
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
              autoFocus
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
        </>
      );

    case "radio":
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>ID of radio</Form.Label>
            <Form.Control
              name="id"
              size="sm"
              type="text"
              placeholder="ID of radio"
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
          {getDropdownOptions(options, setOptions)}
        </>
      );
    case "check-box":
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>ID of checkbox</Form.Label>
            <Form.Control
              name="id"
              size="sm"
              type="text"
              placeholder="ID of checkbox"
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
          {getDropdownOptions(options, setOptions)}
        </>
      );
    case "switch":
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
        </>
      );
  }
};
