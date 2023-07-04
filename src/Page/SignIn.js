import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
// import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleSignIn = () => {
    history("home");
  };
  // async function handleSignIn(e) {
  // e.preventDefault();
  // try {
  //   await axios
  //     .post("http://localhost:8000/", {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       if (res.data == "exist") {
  //         history("/home", { state: { id: email } });
  //       } else if (res.data == "notexist") {
  //         alert("User have not sign up");
  //       }
  //     })
  //     .catch((e) => {
  //       alert("wrong details");
  //       console.log(e);
  //     });
  // } catch (e) {
  //   console.log("error is ", e);
  // }
  //}

  const handleSignUp = () => {
    history("/signup"); // Redirect to the sign-up page
  };

  return (
    <div className="main">
      <div className="auth-form-container">
        <h1>Sign In</h1>
        <form action="POST">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
        <p className="sign-up-link">
          Don't have an account? <span onClick={handleSignUp}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
