import {
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-box">

          <div className="footer-logo">
            <FaLeaf />
            <h2>KrishiMitra AI</h2>
          </div>

          <p>
            Smart AI-powered farming assistant helping farmers diagnose crop
            diseases, check weather, monitor mandi prices and connect with
            buyers across India.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#features">Features</a></li>

            <li><a href="#languages">Languages</a></li>

            <li><a href="#">Marketplace</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>

            <li>🌿 Crop Doctor</li>

            <li>🎤 Voice Assistant</li>

            <li>🌦 Weather Updates</li>

            <li>💰 Mandi Prices</li>

            <li>🛒 Kisan Bazaar</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Varanasi, Uttar Pradesh
          </p>

          <p>
            <FaPhoneAlt />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope />
            support@krishimitra.ai
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your Email"
            />

            <button>
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 KrishiMitra AI | Made with ❤️ for Farmers

      </div>

    </footer>
  );
};

export default Footer;