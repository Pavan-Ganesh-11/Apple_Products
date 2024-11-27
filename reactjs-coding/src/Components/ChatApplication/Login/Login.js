import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-logo">KSH</h1>
      <form className="login-form-container">
        <div className="input-container">
          <label htmlFor="Email" className="label-email">Email</label>
          <input
            type="text"
            id="Email"
            // placeholder="Email"
            className="input-email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="Password" className="label-password">Password</label>
          <input
            type="password"
            id="Password"
            // placeholder="Password"
            className="input-password"
            required
          />
        </div>
        <button type="button" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
