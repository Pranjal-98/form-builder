import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import { LeftNav } from "../../components/LeftNav";

export const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <nav
      className="shadow-lg p-3"
      style={{
        backgroundColor: "#000",
        width: showSidebar ? "400px" : "0px",
        height: "100vh",
        position: "relative",
        transition: "all 0.3s",
      }}
    >
      <Button
        variant="info"
        size="lg"
        style={{ position: "absolute", right: -30, top: "45%" }}
        onClick={toggleSidebar}
      >
        {showSidebar ? (
          <ArrowLeftCircle color="black" />
        ) : (
          <ArrowRightCircle color="black" />
        )}
      </Button>
      {showSidebar && <LeftNav />}
    </nav>
  );
};
