import React from "react";

const Scanner = () => {
  const navigateToPage = (page) => {
    window.location.href = page;
  };

  return (
    <div
      style={{
        backgroundColor: "lightGreen",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",

            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFF5F7",
              borderRadius: "5px",
              height: "150px",
              padding: "20px",
              width: "45%",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              position: "relative",
              marginLeft: "10px",
              margin: "0 10px", // Add margin to create space between boxes
              border: "1px solid #E57373", // Add a border with a beautiful color
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                marginTop: "0",
                borderBottom: "1px solid #E57373",
                paddingBottom: "10px",
              }}
            >
              Firewall
            </h2>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              This checks the rules for the firewall configurations and analyses
              them, providing a detailed and systematic report of the keys such
              as Profiles, Grouping, Protocol and Local port, and much more
              information stored in MongoDB.
            </p>
            <button
              style={{
                backgroundColor: "#FF4081",
                color: "white",
                border: "none",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "block", // Change display to "block" to take full width of the box
                fontSize: "14px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "20%", // Adjust width to make the button wider
              }}
              onClick={() => navigateToPage("result.html")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F50057";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FF4081";
              }}
            >
              Click for Scan
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#E1F5FE",
              borderRadius: "5px",
              padding: "20px",
              width: "45%",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              position: "relative",
              margin: "0 10px", // Add margin to create space between boxes
              border: "1px solid #E57373", // Add a border with a beautiful color
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                marginTop: "0",
                borderBottom: "1px solid #E57373",
                paddingBottom: "10px",
              }}
            >
              Open Port
            </h2>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              This gets the system’s IP address and tries to establish a TCP
              connection with a specified range of ports on the system. If an
              open port is found, it is recorded in the database. If a port is
              open, we try to grab the banner of the port to find out about the
              service running on it.
            </p>
            <button
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "block", // Change display to "block" to take full width of the box
                fontSize: "14px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "20%", // Adjust width to make the button wider
              }}
              onClick={() => navigateToPage("openport.html")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1976D2";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#2196F3";
              }}
            >
              Click for Scan
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#F1F8E9",
              borderRadius: "5px",
              padding: "20px",
              width: "45%",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              position: "relative",
              margin: "0 12px", // Add margin to create space between boxes
              border: "1px solid #E57373", // Add a border with a beautiful color
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                marginTop: "0",
                borderBottom: "1px solid #E57373",
                paddingBottom: "10px",
              }}
            >
              ARP Table
            </h2>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              If we are running the scan on a Windows system, it calls the
              command "arp -a" in the command prompt, which brings up the ARP
              table. In the ARP table, we find all the MAC addresses (physical
              address) connected to our system. If we see duplicate MAC
              addresses or two same MAC addresses, it indicates a possible
              attempt to perform a man-in-the-middle attack.
            </p>
            <button
              style={{
                backgroundColor: "#8BC34A",
                color: "white",
                border: "none",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "block", // Change display to "block" to take full width of the box
                fontSize: "14px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                position: "absolute",
                bottom: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "20%", // Adjust width to make the button wider
              }}
              onClick={() => navigateToPage("mim.html")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#689F38";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#8BC34A";
              }}
            >
              Click for Scan
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#FFFDE7",
              borderRadius: "5px",
              padding: "20px",
              height: "165px",
              width: "45%",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              position: "relative",
              margin: "0 10px", // Add margin to create space between boxes
              border: "1px solid #E57373", // Add a border with a beautiful color
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                marginTop: "0",
                borderBottom: "1px solid #E57373",
                paddingBottom: "10px",
              }}
            >
              Virus Scan
            </h2>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              We use API calls to VirusTotal, an online service that provides a
              free, cloud-based platform for analyzing files and URLs to detect
              malware and other security threats on our system. By comparing the
              current files/folders with their virus database, we can uncover
              the existence of a virus.
            </p>
            <button
              style={{
                backgroundColor: "#FFC107",
                color: "white",
                border: "none",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "20%",
              }}
              onClick={() => navigateToPage("scn.html")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FFA000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFC107";
              }}
            >
              Click for Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
