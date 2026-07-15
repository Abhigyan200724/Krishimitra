import "../Contact.css";
import {
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="hero-tag">
            🌿 Contact KrishiMitra AI
          </span>

          <h1>
            We're Here To Help
            <br />
            Every Farmer
          </h1>

          <p>
            Need assistance with crop diagnosis, AI farming guidance,
            weather updates, or marketplace support?
            Our team is ready to help you.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="contact-info">

        <div className="section-heading">

          <span>CONTACT DETAILS</span>

          <h2>Get In Touch</h2>

          <p>
            Reach us anytime through phone, email or visit
            our office.
          </p>

        </div>

        <div className="contact-grid">

          {/* Phone */}

          <div className="contact-card">

            <div className="contact-icon">

              <FaPhoneAlt />

            </div>

            <h3>Call Us</h3>

            <p>+91 98765 43210</p>

            <small>Mon - Sat (9 AM - 6 PM)</small>

          </div>

          {/* Email */}

          <div className="contact-card">

            <div className="contact-icon">

              <FaEnvelope />

            </div>

            <h3>Email</h3>

            <p>support@krishimitra.ai</p>

            <small>24×7 Email Support</small>

          </div>

          {/* Address */}

          <div className="contact-card">

            <div className="contact-icon">

              <FaMapMarkerAlt />

            </div>

            <h3>Office</h3>

            <p>
              Varanasi,
              Uttar Pradesh
            </p>

            <small>India</small>

          </div>

          {/* Timing */}

          <div className="contact-card">

            <div className="contact-icon">

              <FaClock />

            </div>

            <h3>Working Hours</h3>

            <p>Monday - Saturday</p>

            <small>09:00 AM - 06:00 PM</small>

          </div>

        </div>

      </section>

      {/* Contact Form Section starts in Part 2 */}
      {/* ================= Contact Form ================= */}

<section className="contact-form-section">

  <div className="contact-form-container">

    {/* Left */}

    <div className="contact-left">

      <span className="mini-title">
        Send Us A Message
      </span>

      <h2>
        We'd Love To Hear From You
      </h2>

      <p>
        Whether you have a question about crop diseases,
        weather updates, marketplace support or AI farming,
        our team is always ready to help.
      </p>

      <div className="contact-highlights">

        <div className="highlight">

          🌿 Expert Farming Guidance

        </div>

        <div className="highlight">

          ⚡ Quick Response

        </div>

        <div className="highlight">

          🌦 Weather Assistance

        </div>

        <div className="highlight">

          🤝 Marketplace Support

        </div>

      </div>

    </div>

    {/* Right */}

    <div className="contact-right">

      <form className="contact-form">

        <div className="input-row">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

        </div>

        <div className="input-row">

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Subject"
          />

        </div>

        <textarea
          rows="6"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">

          Send Message

        </button>

      </form>

    </div>

  </div>

</section>

{/* ================= Google Map ================= */}

<section className="map-section">

  <div className="section-heading">

    <span>OUR LOCATION</span>

    <h2>Visit Our Office</h2>

  </div>

  <div className="map-box">

    <iframe
      title="Google Map"
      src="https://www.google.com/maps?q=Varanasi&output=embed"
      loading="lazy"
      allowFullScreen
    ></iframe>

  </div>

</section>

{/* ================= FAQ Section ================= */}

<section className="faq-section">

  <div className="section-heading">

    <span>HELP CENTER</span>

    <h2>Frequently Asked Questions</h2>

    <p>
      Find quick answers to the most common questions asked by farmers.
    </p>

  </div>

  <div className="faq-container">

    <div className="faq-card">
      <h3>🌿 How does Crop Doctor work?</h3>

      <p>
        Upload a picture of your crop and our AI detects diseases,
        suggests treatments, and recommends preventive measures.
      </p>
    </div>

    <div className="faq-card">
      <h3>🎤 Can I use voice in Hindi?</h3>

      <p>
        Yes. KrishiMitra AI supports multiple Indian languages
        including Hindi, Marathi, Tamil, Telugu and more.
      </p>
    </div>

    <div className="faq-card">
      <h3>🌦 Where does weather data come from?</h3>

      <p>
        We use trusted weather APIs to provide real-time forecasts,
        rainfall alerts, and temperature updates.
      </p>
    </div>

    <div className="faq-card">
      <h3>🛒 Is Kisan Bazaar free?</h3>

      <p>
        Yes. Farmers can list crops, rent farming equipment,
        and connect with buyers without paying listing fees.
      </p>
    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="contact-cta">

  <div className="cta-content">

    <h2>Ready To Transform Farming?</h2>

    <p>
      Join thousands of farmers using AI to improve productivity,
      detect crop diseases, and grow smarter every season.
    </p>

    <div className="cta-buttons">

      <button className="primary-btn">
        Get Started
      </button>

      <button className="secondary-btn">
        Contact Support
      </button>

    </div>

  </div>

</section>

    </section>
  );
};

export default Contact;