import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/home");
      console.log("hello");
    }
  });
  let userId;
  const getUserId = () => {
    userId = document.getElementById("userID").value;
    console.log(userId);
    if (userId >= 1 && userId <= 10) {
      localStorage.setItem("userId", userId);
      navigate("/home");
    } else {
      alert("User id should be between 1 to 10");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={4}></Col>
          <Col lg={4} md={4} sm={4}>
            <form className="bg-danger p-5 m-auto">
              <div className="form-group mx-sm-3 mb-2">
                <label for="userID" className="text-dark text-bold h5">
                  User Id:
                </label>
                <input
                  type="number"
                  className="form-control my-2"
                  id="userID"
                  placeholder="e.g. 1, 2, 3.....10"
                  required
                ></input>
                <button
                  type="sumbit"
                  className="btn btn-primary mb-2"
                  onClick={() => {
                    getUserId();
                  }}
                >
                  Confirm id
                </button>
              </div>

              <p className="text-dark">Choose id between 1 to 10</p>
            </form>
          </Col>
          <Col lg={4} md={4} sm={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
