import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VENDOR_LOGIN, VENDOR_PROFILE } from "../../settings/constants";
import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const [errorConfirmMsg, setErrorConfirmMsg] = useState(false);

  const onSubmit = (data) => {
    if (data.pwd !== data.confirmPwd) {
      setErrorConfirmMsg(true);
    } else {
      setErrorConfirmMsg(false);
      console.log(data);
    }
    window.location.href = VENDOR_PROFILE;
  };

  return (
    <div className="container">
      <div className="signup-section">
        <div className="signup-header"></div>
        <div className="signup-body">
          <div className="text-center mb-4">
            <h2>Join PremaFirm</h2>
            <hr />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errorConfirmMsg && <p className="errors-section">Password is not matched!</p>}
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

            <div className="form-group mt-4">
              <input
                type="password"
                className={`form-control ${errors.confirmPwd && "errors-outline"}`}
                placeholder="Confirm Password"
                name="confirmPwd"
                ref={register({ required: true })}
              />
            </div>

            {errors.confirmPwd && <p className="errors-section">Confirm Password is required.</p>}

            <div className="d-flex justify-content-center mt-5 mb-5">
              <button type="submit" className="btn btn-primary btn-submit">
                Continue
              </button>
            </div>
          </form>
          <div className="to-register text-center">
            <hr />
            <div className="d-flex justify-content-center mt-5">
              <span>Already a vendor?</span> <Link to={VENDOR_LOGIN}>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
