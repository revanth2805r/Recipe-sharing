import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import food from "./images/food.png";




const Home = () => {


  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom, #FFCC99, #FFFFFF)",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "8px 15px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          height: "70px",
          zIndex: 1000,
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Foody App Logo"
            style={{ height: "75px", width: "auto", marginRight: "10px" }}
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#ff6600",
              fontFamily: '"Times New Roman", serif',
            }}
          >
           Maran Parotta Kadaai
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ marginTop: "90px", width: "100%", maxWidth: "1200px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            textAlign: "left",
          }}
        >
          {/* Image Section */}
          <div style={{ marginRight: "30px" }}>
            <img
              src={food}
              alt="Delicious Food"
              style={{
                width: "350px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ maxWidth: "550px" }}>
            <h1
              style={{
                fontSize: "36px",
                color: "#333",
                fontFamily: '"Times New Roman", serif',
                fontWeight: "bold",
              }}
            >
              Welcome to Foody App!
            </h1>
            <p
              style={{
                fontSize: "22px",
                color: "#555",
                fontFamily: '"Times New Roman", serif',
                marginBottom: "12px",
              }}
            >
              Discover a world of flavors with our collection of delicious
              recipes. From traditional dishes to modern cuisine, find recipes
              that suit your taste. Join our community and share your love for
              cooking with others. Start your culinary adventure today!
            </p>

            <a
              href="/login"
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "14px 30px",
                backgroundColor: "white",
                color: "#ff6600",
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: '"Times New Roman", serif',
                border: "2px solid #ff6600",
                borderRadius: "8px",
                transition: "0.3s ease-in-out",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ff6600";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#ff6600";
              }}
            >
              Ready to Cook?
            </a>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;