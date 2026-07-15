import React from "react";
import {
  FaLeaf,
  FaMicrophone,
  FaCloudSun,
  FaArrowRight,
  FaCamera,
} from "react-icons/fa";

import farmer from "../../assets/farmer.png";

const HeroSection = () => {
  return (
    <section className="hero" id="home">

      {/* Background Blur Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <span className="tag">
            🌱 AI Powered Smart Agriculture
          </span>

          <h1>
            Smart Farming
            <br />
            Starts With
            <span> KrishiMitra AI</span>
          </h1>

          <p>
            Diagnose crop diseases instantly, get voice-based farming advice,
            check live weather updates, and sell your harvest directly from one
            intelligent platform.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
              <FaArrowRight />
            </button>

            <button className="secondary-btns">
              <FaMicrophone />
              Try Voice Assistant
            </button>

          </div>

          <div className="hero-features">

            <div className="feature">
              <FaLeaf />
              Crop Diagnosis
            </div>

            <div className="feature">
              <FaCloudSun />
              Live Weather
            </div>

            <div className="feature">
              <FaCamera />
              AI Detection
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">

          <img src={farmer} alt="Farmer" className="farmer-image" />

          {/* Floating Card 1 */}
          <div className="floating-card weather-card">
            ☀️
            <h4>31°C</h4>
            <p>Sunny Today</p>
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card voice-card">
            🎤 Voice Assistant
            <span>Listening...</span>
          </div>

          {/* Floating Card 3 */}
          <div className="floating-card crop-card">
            🌿 Crop Health
            <div className="health-bar">
              <div className="health-fill"></div>
            </div>
            Healthy
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;