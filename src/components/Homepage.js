import React from "react";

const HomePage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "90vh",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    backgroundColor: "#73CA17",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const mainStyle = {
    flex: "1",
    padding: "20px",
    overflowY: "auto", // Allows content to be scrollable if it overflows
  };

  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
    flexShrink: 0, // Prevents the footer from shrinking
  };

  return (
    <div style={containerStyle}>
    
      <main style={mainStyle}>
       
      </main>
      <footer style={footerStyle}>
        <p>
          Developed by Ajinkya &copy; 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
