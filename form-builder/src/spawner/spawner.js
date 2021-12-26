import { Button, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { getFileUploadConfig } from "./getFileUploadConfig";
import { getRadioConfig } from "./getRadioConfig";
import { getButtonConfig } from "./getButtonConfig";
import { getDropDownConfig } from "./getDropDownConfig";
import { getFormTitleConfig } from "./getFormTitleConfig";
import { getTextAreaConfig } from "./getTextAreaConfig";
import { getTextInputConfig } from "./getTextInputConfig";
import { getCheckboxConfig } from "./getCheckboxConfig";
import { getSwitchConfig } from "./getSwitchConfig";

// Add or remove options for Dropdown, Radio, Checkbox elements
export function getDropdownOptions(options, setOptions) {
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

// Element display look in Form Generator
export const spawnFormElement = (item) => {
  const { fieldType, attributes } = item;
  switch (fieldType) {
    case "text-input":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Control
            name={attributes.id}
            size="sm"
            type={attributes["input-type"]}
            placeholder={attributes.placeholder}
            disabled={attributes.disabled === "true"}
          />
        </Form.Group>
      );
    case "form-title":
      return (
        <>
          <h2>{attributes.title}</h2>
          <h6 className="text-muted">{attributes.subheading}</h6>
        </>
      );
    case "text-area":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name={attributes.id}
            size="sm"
            placeholder={attributes.placeholder}
            disabled={attributes.disabled === "true"}
          />
        </Form.Group>
      );
    case "drop-down":
      return (
        <Form.Group>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Select disabled={attributes.disabled === "true"}>
            {attributes.options.map((item) => {
              return <option key={item.id}>{item.value}</option>;
            })}
          </Form.Select>
        </Form.Group>
      );

    case "button":
      return (
        <Form.Group>
          <Button
            disabled={attributes.disabled === "true"}
            variant={attributes.variant}
            size={attributes.size}
          >
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
              <Form.Check
                disabled={attributes.disabled === "true"}
                type={"radio"}
                id={item.id}
                label={item.value}
              />
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
              <Form.Check
                disabled={attributes.disabled === "true"}
                type={"checkbox"}
                id={item.id}
                label={item.value}
              />
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
            disabled={attributes.disabled === "true"}
          />
        </>
      );

    case "file-upload":
      return (
        <Form.Group controlId={attributes.id}>
          <Form.Label>{attributes.label}</Form.Label>
          <Form.Control disabled={attributes.disabled === "true"} type="file" />
        </Form.Group>
      );
  }
};

// Add the data for element after selection from Sidebar
export const spawnElemenConfig = (
  type,
  data,
  setCurrentField,
  options,
  setOptions
) => {
  switch (type) {
    case "text-input":
      return getTextInputConfig(setCurrentField, data);
    case "form-title":
      return getFormTitleConfig(setCurrentField, data);
    case "text-area":
      return getTextAreaConfig(setCurrentField, data);
    case "drop-down":
      return getDropDownConfig(setCurrentField, data, options, setOptions);
    case "button":
      return getButtonConfig(setCurrentField, data);
    case "radio":
      return getRadioConfig(setCurrentField, data, options, setOptions);
    case "check-box":
      return getCheckboxConfig(setCurrentField, data, options, setOptions);
    case "switch":
      return getSwitchConfig(setCurrentField, data);
    case "file-upload":
      return getFileUploadConfig(setCurrentField, data);
  }
};
