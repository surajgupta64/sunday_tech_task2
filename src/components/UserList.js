import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const UserList = () => {
  const [userList, setUserList] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [singleUser, setSingleUser] = useState(null);
  const [page, setPage] = useState(0);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUserList(response.data.users);
        console.log(response.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <section>
        <div
          className="container-fluid p-5 m-0"
          style={{
            width: "98.9vw",
            height: "100vh",
            backgroundColor: "#f4f5f9",
          }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="mt-2 login_welcome_title">Users</h3>
              <h6 className="mb-4 login_welcome_subtitle">
                Here are all the users for this project
              </h6>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  color: "#4f2c90",
                  fontWeight: "bold",
                  border: "2px solid #4f2c90",
                }}
                startIcon={<AddIcon />}
              >
                Add User
              </Button>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                borderRadius: "50px",
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>

            <button
              type="button"
              class="btn"
              style={{
                backgroundColor: "transparent",
                color: "#abacad",
                fontWeight: "bolder",
              }}
            >
              <FilterAltIcon /> Filter
            </button>
          </div>
          <div className="mt-3">
            <div
              className="d-flex  table-head mb-3"
              style={{ width: "100%", paddingRight: "70px" }}
            >
              <div className="col-3">
                <span style={{ paddingLeft: "10px" }}>Name</span>
              </div>
              <div className="col-2">
                <span style={{ paddingLeft: "15px" }}>Image</span>
              </div>
              <div className="col-3">
                <span style={{ paddingLeft: "25px" }}>Gender</span>
              </div>
              <div className="col-3">
                <span style={{ paddingLeft: "35px" }}>Email ID</span>
              </div>
              <div className="col-1"> </div>
            </div>

            {userList?.slice(page, page + 5).map((item, index) => (
              <div
                key={index}
                className="d-flex table-body"
                style={{
                  width: "100%",
                  paddingRight: "30px",
                  borderLeft: `5px solid ${item.eyeColor}`,
                }}
              >
                <div className="col-3 d-flex align-items-center gap-2">
                  <span>
                    {item.firstName} {item.maidenName} {item.lastName}
                  </span>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <img
                    src={item.image}
                    alt="profile img"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>{item.gender}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>{item.email}</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconButton
                    aria-label="fingerprint"
                    onClick={() => {
                      toggleVisibility();
                      setSingleUser(item);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="mb-4 login_welcome_subtitle">
                Showing {page + 1}-{page + 5} of {userList?.length / 5}
              </h6>
              <div className="flex ">
                <IconButton
                  aria-label="fingerprint"
                  onClick={() =>
                    page === 0 ? setPage(page) : setPage(page - 5)
                  }
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  aria-label="fingerprint"
                  onClick={() =>
                    page + 5 === userList.length
                      ? setPage(page)
                      : setPage(page + 5)
                  }
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isVisible && (
        <div class="position-fixed fixed-top user-details-container">
          <div
            onClick={toggleVisibility}
            style={{ width: "68%", height: "100%" }}
          ></div>
          <div className={`animated-div ${isVisible ? "visible" : ""}`}>
            <div className="d-flex flex-column p-4 m-3">
              <div className="d-flex justify-content-between align-items-center mt-3 ">
                <h4 className="login_welcome_subtitle">User Details</h4>
                <IconButton aria-label="fingerprint" onClick={toggleVisibility}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="d-flex gap-3 align-items-center mt-3 ">
                <img
                  src={singleUser.image}
                  alt="profile img"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h5>
                    {singleUser.firstName} {singleUser.maidenName}{" "}
                    {singleUser.lastName}
                  </h5>
                  <span>Email ID: {singleUser.email}</span>
                  <div className="d-flex gap-4">
                    <div>User ID: {singleUser.id}</div>
                    <div>Gender : {singleUser.gender}</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column p-4 m-3 mt-2 pt-2 mb-2 pb-2">
              <h6 className="login_welcome_subtitle">
                Basic & account details
              </h6>
              <h5>
                {singleUser.firstName} {singleUser.maidenName}{" "}
                {singleUser.lastName}
              </h5>
              <span>Full Name</span>

              <h5 className="mt-3">
                {singleUser.address.address}, {singleUser.address.city},{" "}
                {singleUser.address.state}, {singleUser.address.postalCode}.
              </h5>
              <span>Address</span>
            </div>
            <hr />
            <div className="d-flex flex-column p-4 m-3 mt-2 pt-2 mb-2 pb-2">
              <h6 className="login_welcome_subtitle">Company</h6>
              <h5>{singleUser.company.name}</h5>
              <span>
                {singleUser.company.title}, {singleUser.company.department}
              </span>

              <h5 className="mt-3">
                {singleUser.company.address.address},{" "}
                {singleUser.company.address.city},{" "}
                {singleUser.company.address.state},{" "}
                {singleUser.company.address.postalCode}.
              </h5>
              <span>Address</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
