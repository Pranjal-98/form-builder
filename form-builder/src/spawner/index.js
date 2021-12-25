import { Button, Form } from "react-bootstrap";

function getDropdownOptions(options, setOptions) {
  return (
    <div>
      <div>
        {options.map((val, index) => {
          return (
            <Form.Group className="mb-3 d-flex justify-content-between">
              <Form.Label>Option</Form.Label>
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
                variant="outline-info"
                size="sm"
                className="ml-3"
                onClick={() => {
                  let optionsCopy = [...options];
                  optionsCopy.splice(index, 1);
                  setOptions(optionsCopy);
                }}
              >
                Remove
              </Button>
            </Form.Group>
          );
        })}
      </div>
      <div className="d-grid gap-2">
        <Button
          variant="outline-info"
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
  }
};
