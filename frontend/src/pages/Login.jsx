import React, { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

import farmer from "../assets/farmer.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login">

      {/* Background Circles */}

      <div className="bg-circle circle-one"></div>
      <div className="bg-circle circle-two"></div>

      <div className="login-container">

        {/* Left Side */}

        <div className="login-left">

          <div className="logo">

            <FaLeaf />

            <h2>KrishiMitra AI</h2>

          </div>

          <span className="login-tag">
            🌱 Welcome Back Farmer
          </span>

          <h1>
            Smart Farming
            <br />
            Starts Here
          </h1>

          <p>
            Access AI crop diagnosis, weather updates,
            mandi prices and your farming dashboard.
          </p>

          <img
            src={farmer}
            alt="Farmer"
            className="farmer-image"
          />

        </div>

        {/* Right Side */}

        <div className="login-right">

          <div className="login-card">

            <h2>Login</h2>

            <p>
              Welcome back! Please login to continue.
            </p>

            {/* Phone */}

            <div className="input-box">

              <FaPhoneAlt />

              <input
                type="tel"
                placeholder="Phone Number"
              />

            </div>

            {/* Password */}

            <div className="input-box">

              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            {/* Remember */}

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            {/* Login */}

            <button className="login-btn">

              Login

              <FaArrowRight />

            </button>

            <div className="divider">

              <span>OR</span>

            </div>

            {/* Social */}

            <div className="social-login">

              <button>

                <FaGoogle />

                Google

              </button>

              <button>

                <FaFacebookF />

                Facebook

              </button>

            </div>

            {/* Register */}

            <div className="register-link">

              Don't have an account?

              <Link to="/register">

                Register

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;