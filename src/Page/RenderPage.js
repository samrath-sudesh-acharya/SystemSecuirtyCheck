import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Scan.css";

const FirewallRule = ({ rule }) => {
  return (
    <div className="box">
      {Object.entries(rule).map(([key, value]) => (
        <div key={key}>
          <h3>{getFieldName(key)}</h3>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

const getFieldName = (field) => {
  switch (field) {
    case "Rule Name":
      return "Rule Name";
    case "Enabled":
      return "Enabled";
    case "Direction":
      return "Direction";
    case "Profiles":
      return "Profiles";
    case "Grouping":
      return "Grouping";
    case "LocalIP":
      return "Local IP";
    case "RemoteIP":
      return "Remote IP";
    case "Protocol":
      return "Protocol";
    case "LocalPort":
      return "Local Port";
    case "RemotePort":
      return "Remote Port";
    case "Edge traversal":
      return "Edge Traversal";
    case "Action":
      return "Action";
    default:
      return field;
  }
};

const RenderPage = () => {
  const [firewallRules, setFirewallRules] = useState([]);

  useEffect(() => {
    fetchFirewallRules();
  }, []);

  const fetchFirewallRules = async () => {
    try {
      const response = await axios.get(
        "https://system-secuirty-api.onrender.com/firewall_rules"
      );
      setFirewallRules(response.data);
    } catch (error) {
      console.error("Error fetching firewall rules:", error);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        {firewallRules.map((rule, index) => (
          <FirewallRule key={index} rule={rule} />
        ))}
      </div>
    </div>
  );
};

export default RenderPage;
