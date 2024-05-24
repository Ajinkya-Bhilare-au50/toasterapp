import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="Notfoundcontainer">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="display-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
