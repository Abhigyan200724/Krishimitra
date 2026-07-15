import "../Dashboard.css";

import {

FaLeaf,
FaHome,
FaSeedling,
FaMicrophone,
FaCloudSun,
FaStore,
FaUserAlt,
FaCog,
FaSignOutAlt,
FaBell,
FaSearch,
FaBars

} from "react-icons/fa";

import farmer from "../assets/farmer.png";
import { Link } from "react-router-dom";

const Dashboard = () => {

return (

<div className="dashboard">

{/* ================= Sidebar ================= */}

<aside className="sidebar">

<div className="logo">

<FaLeaf />

<h2>KrishiMitra</h2>

</div>

<ul>

<li className="active">

<FaHome />

Dashboard

</li>

<li>

<FaSeedling />

Crop Doctor

</li>

<li>

<FaMicrophone />

Voice Assistant

</li>

<li>

<FaCloudSun />

Weather

</li>

<li>

<FaStore />

Marketplace

</li>

<li>

<FaUserAlt />

Profile

</li>

<li>

<FaCog />

Settings

</li>

<li>

<FaSignOutAlt />

Logout

</li>

</ul>

</aside>

{/* ================= Main ================= */}

<div className="dashboard-main">

{/* ================= Navbar ================= */}

<nav className="dashboard-navbar">

<div className="navbar-left">

<button className="menu-btn">

<FaBars />

</button>

<h3>

Good Morning 🌤

</h3>

</div>

<div className="navbar-right">

<div className="search-box">

<FaSearch />

<input

type="text"

placeholder="Search..."

/>

</div>

<div className="notification">

<FaBell />

<span>3</span>

</div>

<div className="profile-mini">

<img

src={farmer}

alt="Farmer"

/>

<div>

<h4>Ram Kumar</h4>

<p>Small Farmer</p>

</div>

</div>

</div>

</nav>

{/* ================= Welcome ================= */}

<section className="welcome">

<div className="welcome-left">

<span>

🌿 AI Powered Agriculture

</span>

<h1>

Welcome Back,

<br />

Ram Kumar 👋

</h1>

<p>

Manage your crops, weather updates,

market prices, and AI assistant

from one dashboard.

</p>

<div className="welcome-buttons">

<button className="primary">

Scan Crop

</button>

<button className="secondary">

Talk to AI

</button>

</div>

</div>

<div className="welcome-right">

<img

src={farmer}

alt="Farmer"

/>

</div>

</section>

{/* Statistics Cards will start here in Part 2 */}
{/* ================= Statistics ================= */}

<section className="dashboard-stats">

  <div className="stat-card">

    <div className="stat-icon crop">

      🌾

    </div>

    <div className="stat-content">

      <h2>58</h2>

      <p>Crops Diagnosed</p>

      <span>+12 this week</span>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon weather">

      🌦

    </div>

    <div className="stat-content">

      <h2>28°C</h2>

      <p>Today's Weather</p>

      <span>Cloudy</span>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon mandi">

      💰

    </div>

    <div className="stat-content">

      <h2>₹2,450</h2>

      <p>Wheat Price</p>

      <span>Per Quintal</span>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon ai">

      🤖

    </div>

    <div className="stat-content">

      <h2>126</h2>

      <p>AI Conversations</p>

      <span>Voice + Chat</span>

    </div>

  </div>

</section>

{/* ================= Farm Overview ================= */}

<section className="farm-overview">

  <div className="overview-card">

    <h3>🌱 Farm Health</h3>

    <div className="progress-circle">

      <div className="progress-value">

        92%

      </div>

    </div>

    <p>

      Excellent crop condition detected by AI.

    </p>

  </div>

  <div className="overview-card">

    <h3>📈 Monthly Growth</h3>

    <h1 className="growth">

      +18%

    </h1>

    <p>

      Better than last month's productivity.

    </p>

  </div>

  <div className="overview-card">

    <h3>🔔 Recent Alert</h3>

    <p>

      Heavy rainfall expected tomorrow.
      Protect harvested crops.

    </p>

    <button>

      View Details

    </button>

  </div>

</section>
{/* ================= WEATHER & MANDI ================= */}

<section className="weather-mandi">

  {/* Weather Section */}

  <div className="weather-card">

    <div className="section-title">

      <h2>🌦 Weather Forecast</h2>

      <span>Prayagraj, Uttar Pradesh</span>

    </div>

    <div className="current-weather">

      <div className="weather-icon">
        ☀️
      </div>

      <div className="weather-details">

        <h1>28°C</h1>

        <p>Cloudy with light breeze</p>

      </div>

    </div>

    <div className="forecast">

      <div className="forecast-day">
        <span>Mon</span>
        <h3>☀️</h3>
        <p>30°</p>
      </div>

      <div className="forecast-day">
        <span>Tue</span>
        <h3>🌤️</h3>
        <p>29°</p>
      </div>

      <div className="forecast-day">
        <span>Wed</span>
        <h3>🌦️</h3>
        <p>27°</p>
      </div>

      <div className="forecast-day">
        <span>Thu</span>
        <h3>🌧️</h3>
        <p>25°</p>
      </div>

      <div className="forecast-day">
        <span>Fri</span>
        <h3>☀️</h3>
        <p>31°</p>
      </div>

    </div>

  </div>

  {/* Mandi Prices */}

  <div className="mandi-card">

    <div className="section-title">

      <h2>💰 Today's Mandi Prices</h2>

      <span>Nearest Market</span>

    </div>

    <table>

      <thead>

        <tr>

          <th>Crop</th>

          <th>Price</th>

          <th>Status</th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>🌾 Wheat</td>

          <td>₹2450</td>

          <td className="up">▲ 4%</td>

        </tr>

        <tr>

          <td>🌽 Maize</td>

          <td>₹2100</td>

          <td className="down">▼ 2%</td>

        </tr>

        <tr>

          <td>🌾 Paddy</td>

          <td>₹1980</td>

          <td className="up">▲ 6%</td>

        </tr>

        <tr>

          <td>🥔 Potato</td>

          <td>₹1420</td>

          <td className="up">▲ 1%</td>

        </tr>

        <tr>

          <td>🧅 Onion</td>

          <td>₹1860</td>

          <td className="down">▼ 3%</td>

        </tr>

      </tbody>

    </table>

    <button className="view-all">

      View All Prices

    </button>

  </div>

</section>
{/* ================= AI SERVICES ================= */}

<section className="ai-services">

  {/* Crop Doctor */}

  <div className="ai-card">

    <div className="card-header">

      <h2>🌿 AI Crop Doctor</h2>

      <span className="status success">
        ● Online
      </span>

    </div>

    <p className="card-desc">
      Upload a crop image and let AI detect diseases,
      nutrient deficiencies, and suggest treatments.
    </p>

    <div className="upload-box">

      <div className="upload-icon">
        📷
      </div>

      <h3>Upload Crop Image</h3>

      <p>JPG, PNG (Max 5 MB)</p>
      
      <button className="upload-btn">
        Choose Image
      </button>

    </div>

    <div className="scan-result">

      <div className="result-row">
        <span>Disease Status</span>
        <strong className="healthy">
          Healthy 🌱
        </strong>
      </div>

      <div className="result-row">
        <span>Confidence</span>
        <strong>98%</strong>
      </div>

    </div>

  </div>

  {/* Voice Assistant */}

  <div className="ai-card">

    <div className="card-header">

      <h2>🎤 Agri Voice Assistant</h2>

      <span className="status success">
        ● Listening Ready
      </span>

    </div>

    <p className="card-desc">

      Ask your farming questions using your voice
      in Hindi or your preferred language.

    </p>

    <div className="voice-circle">

      🎤

    </div>

    <button className="voice-btn">

      Start Voice Chat

    </button>

    <div className="voice-info">

      <div>

        🌐 Language

        <strong>Hindi</strong>

      </div>

      <div>

        ⏱ Response

        <strong>Instant</strong>

      </div>

    </div>

  </div>

</section>

{/* ================= QUICK ACTIONS ================= */}

<section className="quick-actions">

  <div className="section-title">

    <h2>⚡ Quick Actions</h2>

    <span>Frequently Used Services</span>

  </div>

  <div className="action-grid">

    <Link
  to="/crop-doctor"
  className="action-card"
>

  <div className="action-icon">
    🌿
  </div>

  <h3>Crop Doctor</h3>

  <p>Scan crops for diseases.</p>

</Link>

    <div className="action-card">

      <div className="action-icon">
        🌦
      </div>

      <h3>Weather</h3>

      <p>Check today's forecast.</p>

    </div>

    <div className="action-card">

      <div className="action-icon">
        💰
      </div>

      <h3>Mandi Rates</h3>

      <p>View nearby market prices.</p>

    </div>

    <div className="action-card">

      <div className="action-icon">
        🛒
      </div>

      <h3>Marketplace</h3>

      <p>Buy & Sell farm products.</p>

    </div>

  </div>

</section>
{/* ================= Dashboard Bottom ================= */}

<section className="dashboard-bottom">

  {/* Left Side */}

  <div className="dashboard-left">

    {/* Marketplace */}

    <div className="dashboard-card">

      <div className="card-title">

        <h2>🛒 Kisan Bazaar</h2>

        <button>View All</button>

      </div>

      <div className="market-item">

        <div>

          <h4>🌾 Wheat (50 Quintals)</h4>

          <span>Posted Today</span>

        </div>

        <strong>₹2,450/Qtl</strong>

      </div>

      <div className="market-item">

        <div>

          <h4>🚜 Tractor for Rent</h4>

          <span>Available Tomorrow</span>

        </div>

        <strong>₹900/Day</strong>

      </div>

      <div className="market-item">

        <div>

          <h4>🥔 Potato (30 Bags)</h4>

          <span>Fresh Harvest</span>

        </div>

        <strong>₹1,550</strong>

      </div>

    </div>

    {/* Recent Activity */}

    <div className="dashboard-card">

      <div className="card-title">

        <h2>📈 Recent Activity</h2>

      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h4>Crop Diagnosis Completed</h4>

            <p>Tomato crop scanned successfully.</p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h4>Weather Alert</h4>

            <p>Heavy rainfall expected tomorrow.</p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h4>Marketplace Listing</h4>

            <p>Your wheat listing received 5 new views.</p>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Right Side */}

  <div className="dashboard-right">

    {/* Profile */}

    <div className="dashboard-card profile-card">

      <img
        src={farmer}
        alt="Farmer"
        className="profile-image"
      />

      <h3>Ram Kumar</h3>

      <span>🌾 Small Farmer</span>

      <p>
        Prayagraj, Uttar Pradesh
      </p>

      <div className="profile-stats">

        <div>

          <h4>3</h4>

          <p>Acres</p>

        </div>

        <div>

          <h4>58</h4>

          <p>Scans</p>

        </div>

        <div>

          <h4>126</h4>

          <p>Chats</p>

        </div>

      </div>

      <button className="profile-btn">

        View Profile

      </button>

    </div>

    {/* AI Recommendation */}

    <div className="dashboard-card">

      <div className="card-title">

        <h2>🤖 AI Recommendation</h2>

      </div>

      <div className="recommendation">

        <div className="recommend-item">

          🌧️ Rain expected tomorrow.

        </div>

        <div className="recommend-item">

          🌱 Apply Nitrogen fertilizer this week.

        </div>

        <div className="recommend-item">

          🐛 Monitor crops for leaf blight symptoms.

        </div>

        <div className="recommend-item">

          💰 Wheat prices are increasing.
          Selling this week is recommended.

        </div>

      </div>

    </div>

    {/* Farming Calendar */}

    <div className="dashboard-card">

      <div className="card-title">

        <h2>📅 Upcoming Tasks</h2>

      </div>

      <ul className="task-list">

        <li>

          🌾 Wheat Irrigation

          <span>Tomorrow</span>

        </li>

        <li>

          🌱 Fertilizer Application

          <span>12 July</span>

        </li>

        <li>

          🚜 Equipment Maintenance

          <span>15 July</span>

        </li>

      </ul>

    </div>

  </div>

</section>
</div>

</div>

);

};

export default Dashboard;