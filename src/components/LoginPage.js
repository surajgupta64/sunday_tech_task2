import React, { useState } from "react";
import LoginImage from "./../img/login_screen.jpg";
import comLogo from "./../img/company-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    console.log(users);
    const matchingUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    console.log(matchingUser);
    if (matchingUser) {
      toast.success("😊 Login Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("😥 So sad login failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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
                <h1 className="mt-2 login_welcome_title">Welcome</h1>
                <h6 className="mb-5 login_welcome_subtitle">
                  Login to Labs Monitoring System{" "}
                  <span
                    className="mt-1 login_welcome_title"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("register-page")}
                  >
                    Register <PersonAddAltIcon />
                  </span>
                </h6>
                <TextField
                  id="outlined-basic"
                  label="Email ID"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{ width: "50%" }}
                />
                <FormControl sx={{ m: 3, width: "50%" }} variant="outlined">
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
                  type="button"
                  class="btn login_btn"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div
                  className="d-flex flex-row-reverse"
                  style={{ width: "50%" }}
                >
                  <NavLink
                    exact
                    to="/forgot-page"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 className="mt-1 login_welcome_title">
                      Forgot password?
                    </h6>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
