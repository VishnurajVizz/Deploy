import React from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <div className="events-page-container">
        <div className="left-container"></div>
        <div className="right-container"></div>
      </div>
    </>
  );
}
