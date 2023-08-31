import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  const footerStyle = {
    backgroundColor: "#f8f9fa", // Set your desired background color
    color: "black", // Set your desired text color
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
    width: "100%",
  };

  return (
    <div className="container" style={footerStyle}>
      {/* Your page content here */}
      <footer>
        <p style={{marginBottom: "-1px"}}>
          &copy; {currentYear} Shradhanjali Posters, Inc. All rights reserved,
          Created by Dharm Solanki.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
