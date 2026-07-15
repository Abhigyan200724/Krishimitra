import React from 'react';
import '../Register.css';
import { Link } from 'react-router-dom';

export default function Register(){
  return (
    <section className="register-page">
      <div className="register-card">
        <h1>KrishiMitra AI</h1>
        <h2>Create Account</h2>

        <div className="grid">
          <input placeholder="Full Name *" />
          <input placeholder="Phone Number *" />
          <input placeholder="Email (Optional)" />
          <select>
            <option>Farmer Type</option>
            <option>Small Farmer</option>
            <option>Marginal Farmer</option>
            <option>Medium Farmer</option>
            <option>Large Farmer</option>
          </select>

          <input placeholder="State *" />
          <input placeholder="District *" />

          <select>
            <option>Preferred Language</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Marathi</option>
            <option>Tamil</option>
          </select>

          <input type="password" placeholder="Password *" />
          <input type="password" placeholder="Confirm Password *" />
        </div>

        <label className="upload">
          Profile Image (Optional)
          <input type="file" accept="image/*"/>
        </label>

        <label className="terms">
          <span><input type="checkbox"/> </span>I agree to the Terms & Conditions
        </label>

        <button>Create Account</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </section>
  );
}
