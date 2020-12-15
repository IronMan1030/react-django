import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <div className="container">
      <div className="login-section">
        <div className="login-header"></div>
        <div className="login-body">
          <div className="text-center mb-4">
            <h2>Login Vendor</h2>
            <hr />
          </div>
          <form>
            <div className="form-group mb-4">
              <input type="email" className="form-control" placeholder="UserName or Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="loggedInCheck" />
                <label className="form-check-label" htmlFor="loggedInCheck">
                  keep me logged in
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/">Forgot Password?</Link>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-5">
              <button type="submit" class="btn btn-primary btn-submit">
                Log In
              </button>
            </div>
          </form>
          <div className="to-register text-center">
            <p>
              <span className="line-center">New to Vendor?</span>
            </p>
            <div className="d-flex justify-content-center mt-5">
              <button type="submit" class="btn btn-outline-primary btn-submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
