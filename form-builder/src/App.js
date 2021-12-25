import React, { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Sidebar } from "./layout/Sidebar";
import { FormDisplay } from "./screens/FormDisplay";
import { FormGenerator } from "./screens/FormGenerator";
import "./App.css";

const formConfiguration = {};

export const FormConfigurationContext = createContext(formConfiguration);

function FormConfigurationContextProvider({ children }) {
  const [formConfiguration, setFormConfiguration] = React.useState([
    {
      fieldType: "form-title",
      attributes: {
        title: "sd",
      },
    },
    {
      fieldType: "form-title",
      attributes: {
        title: "fddsa",
      },
    },
    {
      fieldType: "form-title",
      attributes: {
        title: "asd",
      },
    },
    {
      fieldType: "form-title",
      attributes: {
        title: "ofspfidso",
      },
    },
  ]);

  return (
    <FormConfigurationContext.Provider
      value={{ formConfiguration, setFormConfiguration }}
    >
      {children}
    </FormConfigurationContext.Provider>
  );
}

function App() {
  return (
    <FormConfigurationContextProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ height: "100vh", overflow: "scroll", width: "100%" }}>
          <Routes>
            <Route path="/" element={<FormGenerator />} />
            <Route path="/display" element={<FormDisplay />} />
          </Routes>
        </div>
      </div>
    </FormConfigurationContextProvider>
  );
}

export default App;
