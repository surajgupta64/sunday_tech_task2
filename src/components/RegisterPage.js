import React, { useState } from "react";
import LoginImage from "./../img/login_screen.jpg";
import comLogo from "./../img/company-logo.png";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(formData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("🥂 Registered Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/");
  };

  return (
    <>
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
                <h1 className="mt-2 login_welcome_title">
                  Welcome To Register{" "}
                </h1>
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
                  label="Username"
                  variant="outlined"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  style={{ width: "50%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email ID"
                  className="mt-3"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{ width: "50%" }}
                />
                <FormControl
                  className="mt-3 mb-3"
                  sx={{ width: "50%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <button
                  type="submit"
                  class="btn login_btn"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default RegisterPage;
