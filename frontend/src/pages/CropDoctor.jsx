import "../CropDoctor.css";

import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaBell,
  FaUserCircle,
  FaCloudUploadAlt,
  FaCamera,
  FaImages,
  FaLeaf,
} from "react-icons/fa";

import farmer from "../assets/farmer.png";

const CropDoctor = () => {

  return (

    <div className="crop-doctor">

      {/* ================= NAVBAR ================= */}

      <nav className="crop-navbar">

        <div className="nav-left">

          <Link to="/dashboard" className="back-btn">

            <FaArrowLeft />

            Dashboard

          </Link>

        </div>

        <div className="nav-center">

          <FaLeaf />

          <h2>AI Crop Doctor</h2>

        </div>

        <div className="nav-right">

          <div className="notify">

            <FaBell />

            <span>2</span>

          </div>

          <div className="user-box">

            <img
              src={farmer}
              alt="Farmer"
            />

            <div>

              <h4>Ram Kumar</h4>

              <small>Small Farmer</small>

            </div>

          </div>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="doctor-hero">

        <div className="hero-left">

          <span className="hero-badge">

            🌿 AI Powered Crop Diagnosis

          </span>

          <h1>

            Scan Your Crop

            <br />

            Detect Diseases

            <br />

            Instantly

          </h1>

          <p>

            Upload a clear photo of your crop leaf.

            Our Artificial Intelligence will analyze

            the image and provide disease detection,

            health score and treatment recommendations.

          </p>

          <div className="hero-buttons">

            <button className="upload-main">

              <FaCloudUploadAlt />

              Upload Image

            </button>

            <button className="camera-main">

              <FaCamera />

              Open Camera

            </button>

          </div>

        </div>

        <div className="hero-right">

          <img

            src={farmer}

            alt="Farmer"

          />

        </div>

      </section>

      {/* ================= IMAGE UPLOAD ================= */}

      <section className="upload-section">

        <div className="upload-card">

          <div className="upload-icon">

            <FaCloudUploadAlt />

          </div>

          <h2>

            Upload Crop Image

          </h2>

          <p>

            Drag & Drop your crop image

            or select from your device.

          </p>

          <div className="upload-actions">

            <button>

              <FaImages />

              Gallery

            </button>

            <button>

              <FaCamera />

              Camera

            </button>

          </div>

          <span>

            Supported:

            JPG • PNG • JPEG

          </span>

        </div>

        <div className="preview-card">

          <h3>

            Image Preview

          </h3>

          <div className="preview-box">

            <FaImages />

            <p>

              No Image Selected

            </p>

          </div>

        </div>

      </section>

      {/* ================= AI DIAGNOSIS ================= */}

<section className="diagnosis-section">

  <div className="diagnosis-header">

    <h2>🤖 AI Diagnosis Report</h2>

    <span>Analysis completed successfully</span>

  </div>

  <div className="diagnosis-grid">

    {/* Left */}

    <div className="diagnosis-card">

      <div className="disease-status">

        <div className="disease-icon">
          🌿
        </div>

        <div>

          <h3>Leaf Blight</h3>

          <p>Detected Disease</p>

        </div>

      </div>

      <div className="diagnosis-item">

        <span>Confidence</span>

        <strong>98%</strong>

      </div>

      <div className="progress">

        <div
          className="progress-fill green"
          style={{ width: "98%" }}
        ></div>
      </div>

      <div className="diagnosis-item">

        <span>Risk Level</span>

        <strong className="low-risk">
          🟢 Low
        </strong>

      </div>

      <div className="progress">

        <div
          className="progress-fill yellow"
          style={{ width: "25%" }}
        ></div>
      </div>

      <div className="diagnosis-item">

        <span>Crop Health</span>

        <strong>92%</strong>

      </div>

      <div className="progress">

        <div
          className="progress-fill health"
          style={{ width: "92%" }}
        ></div>
      </div>

    </div>

    {/* Right */}

    <div className="summary-card">

      <h3>📋 AI Summary</h3>

      <p>

        The uploaded crop appears healthy with only
        minor symptoms of <strong>Leaf Blight</strong>.
        Immediate treatment is not required, but
        regular monitoring is recommended.

      </p>

      <div className="summary-points">

        <div className="point">

          ✅ Disease detected successfully

        </div>

        <div className="point">

          🌱 Plant health is excellent

        </div>

        <div className="point">

          💧 Maintain proper irrigation

        </div>

        <div className="point">

          🌤 Continue monitoring for 5–7 days

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= SYMPTOMS ================= */}

<section className="symptoms-section">

  <div className="section-title">

    <h2>🩺 Symptoms Detected</h2>

    <span>Observed by AI</span>

  </div>

  <div className="symptoms-grid">

    <div className="symptom-card">

      🌿

      <h4>Yellow Spots</h4>

      <p>Small yellow patches found on leaf surface.</p>

    </div>

    <div className="symptom-card">

      🍂

      <h4>Brown Edges</h4>

      <p>Leaf edges show minor browning.</p>

    </div>

    <div className="symptom-card">

      🍃

      <h4>Leaf Curl</h4>

      <p>Very slight inward leaf curling detected.</p>

    </div>

    <div className="symptom-card">

      💧

      <h4>Moisture Level</h4>

      <p>Soil moisture appears adequate.</p>

    </div>

  </div>

</section>

{/* ================= TREATMENT SECTION ================= */}

<section className="treatment-section">

  <div className="section-title">

    <h2>🌱 AI Treatment Recommendations</h2>

    <span>Personalized suggestions for your crop</span>

  </div>

  <div className="treatment-grid">

    {/* Organic Solution */}

    <div className="treatment-card organic">

      <div className="treatment-icon">
        🌿
      </div>

      <h3>Organic Treatment</h3>

      <ul>

        <li>Neem Oil Spray (5ml/L)</li>

        <li>Use Trichoderma Bio Fungicide</li>

        <li>Remove infected leaves</li>

        <li>Improve field ventilation</li>

      </ul>

      <button>
        Learn More
      </button>

    </div>

    {/* Chemical Solution */}

    <div className="treatment-card chemical">

      <div className="treatment-icon">
        🧪
      </div>

      <h3>Chemical Treatment</h3>

      <ul>

        <li>Mancozeb 75% WP</li>

        <li>Spray every 7–10 days</li>

        <li>Follow label dosage</li>

        <li>Wear protective equipment</li>

      </ul>

      <button>
        View Details
      </button>

    </div>

    {/* Irrigation */}

    <div className="treatment-card water">

      <div className="treatment-icon">
        💧
      </div>

      <h3>Irrigation Advice</h3>

      <ul>

        <li>Avoid overwatering</li>

        <li>Irrigate early morning</li>

        <li>Maintain proper drainage</li>

        <li>Check soil moisture daily</li>

      </ul>

      <button>
        Water Schedule
      </button>

    </div>

  </div>

</section>

{/* ================= ENVIRONMENT ================= */}

<section className="environment-section">

  <div className="section-title">

    <h2>🌤 Ideal Growing Conditions</h2>

    <span>Recommended environmental values</span>

  </div>

  <div className="environment-grid">

    <div className="environment-card">

      <div className="env-icon">
        🌡
      </div>

      <h3>Temperature</h3>

      <h2>24°C - 30°C</h2>

      <p>Best range for healthy growth.</p>

    </div>

    <div className="environment-card">

      <div className="env-icon">
        💧
      </div>

      <h3>Humidity</h3>

      <h2>60% - 75%</h2>

      <p>Maintain moderate humidity.</p>

    </div>

    <div className="environment-card">

      <div className="env-icon">
        ☀️
      </div>

      <h3>Sunlight</h3>

      <h2>6–8 Hours</h2>

      <p>Provide adequate daily sunlight.</p>

    </div>

    <div className="environment-card">

      <div className="env-icon">
        🌱
      </div>

      <h3>Fertilizer</h3>

      <h2>NPK 19:19:19</h2>

      <p>Apply as recommended by experts.</p>

    </div>

  </div>

</section>

{/* ================= PREVENTION ================= */}

<section className="prevention-section">

  <div className="section-title">

    <h2>🛡 Preventive Measures</h2>

    <span>Reduce future disease risk</span>

  </div>

  <div className="prevention-list">

    <div className="prevention-item">

      ✅ Rotate crops every season.

    </div>

    <div className="prevention-item">

      🌿 Remove infected plant residues.

    </div>

    <div className="prevention-item">

      💧 Avoid water stagnation.

    </div>

    <div className="prevention-item">

      ☀️ Ensure sufficient sunlight and airflow.

    </div>

    <div className="prevention-item">

      🧪 Inspect crops weekly for early symptoms.

    </div>

  </div>

</section>

{/* ================= AGRICULTURE EXPERT ================= */}

<section className="expert-section">

  <div className="section-title">

    <h2>👨‍🌾 Nearby Agriculture Expert</h2>

    <span>Need human assistance?</span>

  </div>

  <div className="expert-card">

    <div className="expert-left">

      <img
        src={farmer}
        alt="Agriculture Expert"
        className="expert-image"
      />

      <div>

        <h3>Dr. Rajesh Sharma</h3>

        <p>Senior Agriculture Officer</p>

        <span>⭐ 4.9 (520 Reviews)</span>

      </div>

    </div>

    <div className="expert-right">

      <div className="expert-info">

        <div>

          <h4>📍 Distance</h4>

          <p>2.4 km</p>

        </div>

        <div>

          <h4>🕒 Available</h4>

          <p>09:00 AM - 05:00 PM</p>

        </div>

      </div>

      <div className="expert-buttons">

        <button className="call-btn">

          📞 Call Expert

        </button>

        <button className="chat-btn">

          💬 Chat

        </button>

      </div>

    </div>

  </div>

</section>

{/* ================= SCAN HISTORY ================= */}

<section className="history-section">

  <div className="section-title">

    <h2>📜 Recent Scan History</h2>

    <span>Last 5 AI analyses</span>

  </div>

  <div className="history-table">

    <table>

      <thead>

        <tr>

          <th>Date</th>

          <th>Crop</th>

          <th>Disease</th>

          <th>Health</th>

          <th>Status</th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>11 Jul</td>

          <td>🌾 Wheat</td>

          <td>Healthy</td>

          <td>98%</td>

          <td className="healthy-status">Healthy</td>

        </tr>

        <tr>

          <td>08 Jul</td>

          <td>🍅 Tomato</td>

          <td>Leaf Blight</td>

          <td>90%</td>

          <td className="warning-status">Treated</td>

        </tr>

        <tr>

          <td>05 Jul</td>

          <td>🌽 Maize</td>

          <td>Healthy</td>

          <td>99%</td>

          <td className="healthy-status">Healthy</td>

        </tr>

        <tr>

          <td>02 Jul</td>

          <td>🥔 Potato</td>

          <td>Early Blight</td>

          <td>87%</td>

          <td className="warning-status">Monitoring</td>

        </tr>

        <tr>

          <td>28 Jun</td>

          <td>🌾 Paddy</td>

          <td>Healthy</td>

          <td>96%</td>

          <td className="healthy-status">Healthy</td>

        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* ================= FARMER TIPS ================= */}

<section className="tips-section">

  <div className="section-title">

    <h2>💡 Smart Farming Tips</h2>

    <span>AI-powered daily recommendations</span>

  </div>

  <div className="tips-grid">

    <div className="tip-card">

      🌱

      <h3>Healthy Soil</h3>

      <p>

        Add organic compost every season to improve soil fertility.

      </p>

    </div>

    <div className="tip-card">

      💧

      <h3>Smart Irrigation</h3>

      <p>

        Water crops early in the morning to reduce evaporation.

      </p>

    </div>

    <div className="tip-card">

      🐛

      <h3>Pest Monitoring</h3>

      <p>

        Inspect leaves twice a week for early pest detection.

      </p>

    </div>

    <div className="tip-card">

      ☀️

      <h3>Weather Planning</h3>

      <p>

        Check forecasts before applying fertilizer or pesticides.

      </p>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="doctor-cta">

  <div className="cta-content">

    <h2>

      🌾 Keep Your Crops Healthy with AI

    </h2>

    <p>

      Scan crops regularly, monitor disease progression, and receive
      expert guidance to improve yield and protect your farm.

    </p>

    <div className="cta-buttons">

      <button>

        📷 Scan Another Crop

      </button>

      <button>

        📊 View Full Report

      </button>

    </div>

  </div>

</section>

    </div>

  );

};

export default CropDoctor;