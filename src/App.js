import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";
import Front from "./Page/Front";
import Scanner from "./Page/Scanner";

// import Render from "./Page/Render";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Front />} />
        <Route path="/scan" element={<Scanner />} />
        {/* <Route path="/result" element={<Render />} /> */}
        {/* <Route
          exact
          path="/resultscan.html"
          render={() => {
            window.location.href = "/result.html";
            return null;
          }}
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
