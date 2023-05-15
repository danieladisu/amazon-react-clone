/** @format */

import React, { useState } from "react";
import "../css/Login.css";
import loginLogo from "../images/icons/Amazon_login_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Demo-Login-Funktion
  const demoLogin = () => {
    setEmail("demo-user@example.com");
    setPassword("demo-password");
  };

  const signIn = (e) => {
    e.preventDefault();
    if (password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          if (authUser) {
            navigate("/");
          }
        })
        .catch((error) => {
          alert(error.message);
          // console.log(error.message);
        });
    } else {
      // Geben Sie dem Benutzer eine Aufforderung, das Passwort einzugeben
      alert(
        "Please enter your email and password or use the demo-user and password to login "
      );
    }
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((authUser) => {
        if (authUser) {
          navigate("/login");
          alert(authUser.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        {" "}
        <img className="login__logo" src={loginLogo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign In
        </button>
        <br></br>

        <button onClick={demoLogin} className="login__demoButton">
          Demo-Login
        </button>
        <p>
          By singning-in you agree to the AMAZON FAKE CLONE Conditions of Use
          Sale. please see our Privavy Notice, our Cookies Notice and our
          Interest-Based ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
