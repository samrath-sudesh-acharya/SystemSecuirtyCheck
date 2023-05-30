import React from "react";

const Front = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Files/generated.pdf";
    link.download = "generated.pdf";
    link.click();
  };

  return (
    <div className="container">
      <div className="background-image" />
      <button className="button download-button" onClick={handleDownload}>
        Download File
      </button>
      <button className="button">Another Button</button>
    </div>
  );
};

export default Front;
