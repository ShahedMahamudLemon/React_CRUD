import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const navigate = useNavigate();
  localStorage.removeItem("userId");
  useEffect(() => {
    alert("Logout success!");
    navigate("/");
  });
};

export default LogoutPage;
