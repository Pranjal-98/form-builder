import React, { useState, useEffect } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { elements } from "../../constants/consts";
import { ElementConfiguration } from "../ElementConfiguration";
import { NavElementsList } from "../NavElementsList";
import { NavTemplatesList } from "../NavTemplatesList";

export const ElementGroup = () => {
  const [modal, setModal] = useState(null);
  const [renderedElements, setRenderedElements] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchText.trim() === "") {
      setRenderedElements(elements);
    }
  }, [searchText]);

  useEffect(() => {
    setRenderedElements(elements);
  }, []);

  // updates state of modal
  function toggleModal(val) {
    if (modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  }

  let timer = null;
  function debounceWrapper(event) {
    setLoading(true);
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      searchElement(event);
    }, 500);
  }

  // search elements
  function searchElement(event) {
    let val = event.target.value;
    setSearchText(val);
    let filteredElem = elements.filter((item) =>
      item.buttonTitle.toLowerCase().includes(val)
    );
    setLoading(false);
    setRenderedElements(filteredElem);
  }

  return (
    <>
      <InputGroup>
        <InputGroup.Text className="bg-dark border-0">
          <Search size={10} color={"white"} />
        </InputGroup.Text>
        <Form.Control
          className="bg-dark border-0 text-white"
          size="sm"
          type="text"
          placeholder="Search"
          onChange={(e) => debounceWrapper(e)}
        />
        {loading && (
          <InputGroup.Text className="bg-dark border-0">
            <Spinner animation="border" variant="white" size="sm" />
          </InputGroup.Text>
        )}
      </InputGroup>
      <div className="p-3" style={{ overflow: "scroll", height: "85vh" }}>
        {modal && (
          <ElementConfiguration modal={modal} toggleModal={toggleModal} />
        )}
        <p className="text-white">Basic Elements</p>
        <NavElementsList
          toggleModal={toggleModal}
          elements={renderedElements}
        />
        {/* <p className="text-white">Templates</p>
        <NavTemplatesList toggleModal={toggleModal} /> */}
      </div>
    </>
  );
};
