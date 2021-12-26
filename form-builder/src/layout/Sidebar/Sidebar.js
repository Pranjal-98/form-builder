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
        size="sm"
        className="p-2"
        style={{
          position: "absolute",
          right: -20,
          top: "45%",
          borderRadius: "50%",
        }}
        onClick={toggleSidebar}
      >
        {showSidebar ? (
          <ArrowLeftCircle color="black" size={25} />
        ) : (
          <ArrowRightCircle color="black" size={25} />
        )}
      </Button>
      {showSidebar && <LeftNav />}
    </nav>
  );
};
