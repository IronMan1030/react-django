import React from "react";
import { Link } from "react-router-dom";
import { VENDOR_REGISTER, DASHBOARD } from "../../settings/constants";
import { useForm } from "react-hook-form";
import "./index.css";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    window.location.href = DASHBOARD;
  };
  const handleClickSignUp = () => {
    window.location.href = VENDOR_REGISTER;
  };

  return (
    <div className="container">
      <div className="login-section">
        <div className="login-header"></div>
        <div className="login-body">
          <div className="text-center mb-4">
            <h2>Login Vendor</h2>
            <hr />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                className={`form-control ${errors.email && "errors-outline"}`}
                placeholder="UserName or Email"
                name="email"
                ref={register({ required: true })}
              />
            </div>
            {errors.email && <p className="errors-section">Email is required.</p>}
            <div className="form-group mt-4">
              <input
                type="password"
                className={`form-control ${errors.pwd && "errors-outline"}`}
                placeholder="Password"
                name="pwd"
                ref={register({ required: true })}
              />
            </div>
            {errors.pwd && <p className="errors-section">Password is required.</p>}
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
              <button type="submit" className="btn btn-primary btn-submit">
                Log In
              </button>
            </div>
          </form>
          <div className="to-register text-center">
            <p>
              <span className="line-center">New to Vendor?</span>
            </p>
            <div className="d-flex justify-content-center mt-5">
              <button type="submit" className="btn btn-outline-primary btn-submit" onClick={handleClickSignUp}>
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
