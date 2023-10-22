import React from "react";
import LoginImage from "./../img/login_screen.jpg";
import comLogo from "./../img/company-logo.png";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const ForgotPage = () => {
  const navigate = useNavigate();
  return (
    <section className="login-screen">
      <div className="container-fluid" style={{ width: "100vw" }}>
        <div className="row">
          <div className="col p-0">
            <img src={LoginImage} alt="" className="login_image_container" />
          </div>
          <div className="col ">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <img
                src={comLogo}
                alt=""
                style={{ height: "50px", width: "180px" }}
              />
              <h1 className="mt-2 login_welcome_title">Forgot Password</h1>
              <h6 className="mb-5 login_welcome_subtitle">
                Back to Login Page{"  "}
                <span
                  className="mt-1 login_welcome_title"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Click here <LoginIcon />
                </span>
              </h6>
              <TextField
                id="outlined-basic"
                label="Email ID"
                variant="outlined"
                style={{ width: "50%" }}
              />
              <button type="button" class="btn login_btn mt-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPage;
