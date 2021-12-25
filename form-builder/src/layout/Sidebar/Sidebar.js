import React from "react";
import { LeftNav } from "../../components/LeftNav";

export const Sidebar = () => {
  return (
    <nav
      className="shadow-lg p-3"
      style={{
        backgroundColor: "#000",
        width: "25%",
        height: "100vh",
      }}
    >
      <LeftNav />
    </nav>
  );
};
