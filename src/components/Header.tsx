import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header: React.FC = () => {
  return (
    <header
      className="top-0 left-0 w-full"
      style={{
        background: "rgba(0, 0, 0, 0)", // Transparent background
        padding: "10px 250px", // Consistent padding for navbar height
        color: "white", // Ensures text stands out
        backdropFilter: "blur(10px)", // Adds a subtle blur effect
        position: "relative", // Set navbar position to relative for absolute positioning of logo
        height: "60px", // Fixed navbar height
        width: "100%", // Ensure the header takes full width
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      <div className="navbar-container w-full flex justify-between items-center" style={{ width: '100%' }}>
        {/* Logo */}
        <Link to="/" className="site-brand w-nav-brand" style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", paddingTop: "115px" }}>
          <video
            src="/crackiit.mp4"
            className="site-logo"
            alt="CrackIIT logo"
            style={{
              height: "180px", // Increase height of the logo
              width: "auto", // Maintain aspect ratio
              borderRadius: "50%", // Circular logo
              objectFit: "cover", // Ensures proper cropping of video
            }}
            autoPlay
            loop
            muted
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="nav-menu flex justify-center items-center space-x-8">
          <Link to="/" className="nav-link text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="nav-link text-white hover:text-yellow-300">
            About
          </Link>
          <Link to="/mentors" className="nav-link text-white hover:text-yellow-300">
            Mentor Booking
          </Link>
          <Link to="/pricing" className="nav-link text-white hover:text-yellow-300">
            Courses
          </Link>
          <Link to="/studybuddy" className="nav-link text-white hover:text-yellow-300">
            Study Buddy
          </Link>
        </nav>

        {/* Sign In Button */}
        <Link
          to="/login"
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg shadow-md hover:from-purple-800 hover:to-purple-600 transition duration-300 transform hover:scale-105"
          style={{ position: "relative", left: "20px" }} // Move Sign-In button slightly to the right
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;