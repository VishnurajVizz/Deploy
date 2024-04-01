import React from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";
import { usePageView } from "../../customHooks/usePageView";

const StatusPage = () => {
  usePageView();
  return (
    <div className="status-page-container">
      <Navbar></Navbar>
    </div>
  );
};

export default StatusPage;
