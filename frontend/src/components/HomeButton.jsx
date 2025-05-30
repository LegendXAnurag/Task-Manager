import React from "react";
import { useNavigate } from "react-router-dom"; 

function HomeButton() {
  const navigate = useNavigate(); 

  return (
    <button
      className="btn btn-light"
      style={{ fontSize: "1.2rem" }}
      onClick={() => navigate("/")} 
    >
      <i className="bi bi-house-door-fill"></i>
    </button>
  );
}

export default HomeButton;


