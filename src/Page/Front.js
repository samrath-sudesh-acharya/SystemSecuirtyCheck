import React from "react";
import "./Front.css";
// import { useNavigate } from "react-router-dom";

const Front = () => {
  // const navigate = useNavigate();

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = process.env.PUBLIC_URL + "/Files/generated.pdf";
  //   link.download = "generated.pdf";
  //   link.click();
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Files/main.exe";
    link.download = "main.exe";
    link.click();
  };

  const handleScan = () => {
    window.open(`${process.env.PUBLIC_URL}/scan.html`);
  };

  // const handleScan = () => {
  //   navigate("/scan");
  // };

  return (
    <div className="container">
      <div className="background-image" />
      <button className="button download-button" onClick={handleDownload}>
        Download File
      </button>
      <button className="button" onClick={handleScan}>
        Click to Scan
      </button>
    </div>
  );
};

export default Front;
