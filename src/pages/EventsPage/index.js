import React from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";
import { usePageView } from "../../customHooks/usePageView";

export default function EventsPage() {
  usePageView();
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
