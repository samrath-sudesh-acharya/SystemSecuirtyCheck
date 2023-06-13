import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSignUp = () => {
    // Perform sign-up logic here
    // You can use libraries like Firebase, Auth0, or your own server-side authentication

    // Assuming sign-up is successful, redirect to sign-in page
    history("/signin");
  };

  // async function handleSignUp(e) {
  //   e.preventDefault();

  //   try {
  //     await axios
  //       .post("http://localhost:8000/signup", {
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         if (res.data == "exist") {
  //           alert("User already exists");
  //         } else if (res.data == "notexist") {
  //           history("/home", { state: { id: email } });
  //         }
  //       })
  //       .catch((e) => {
  //         alert("wrong details");
  //         console.log(e);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const handleSignIn = () => {
    history("/signin"); // Redirect to the sign-in page
  };

  return (
    <div className="home">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
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
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <p className="sign-in-link">
          Already have an account?{" "}
          <span className="span" onClick={handleSignIn}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
