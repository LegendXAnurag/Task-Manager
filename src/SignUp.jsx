import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SignUp.css";

const SignUp = () => {
  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="card p-4 shadow-lg rounded-4 bg-secondary" style={{ minWidth: "350px", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Create Account</h2>

        <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control border-secondary" id="name" placeholder="Name" style={{ backgroundColor: "", color:"black"}}/>
            <label htmlFor="name"><i className="bi bi-person me-2"></i>Name</label>
          </div>

          <div className="form-floating mb-3">
            {/* <input type="email" className="form-control bg-dark text-light border-secondary" id="email" placeholder="Email" /> */}
            <input type="email" className="form-control border-secondary" id="email" placeholder="Email" />
            <label htmlFor="email"><i className="bi bi-envelope me-2"></i>Email address</label>
          </div>

          <div className="form-floating mb-4">
            {/* <input type="password" className="form-control bg-dark text-light border-secondary" id="password" placeholder="Password" /> */}
            <input type="password" className="form-control border-secondary" id="password" placeholder="Password" />
            <label htmlFor="password"><i className="bi bi-lock me-2"></i>Password</label>
          </div>

          <button type="submit" className="btn btn-light w-100 mb-3">
            <i className="bi bi-person-plus me-2"></i>Sign Up
          </button>

        </form>

        <div className="text-center mb-3">OR</div>

        <button className="btn btn-danger w-100" onClick={handleGoogleSignUp}>
          <i className="bi bi-google me-2"></i>Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
