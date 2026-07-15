import {
  FaLeaf,
  FaMicrophone,
  FaCloudSunRain,
  FaStore,
  FaArrowRight,
} from "react-icons/fa";

const featureData = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Crop Doctor",
    desc: "Upload a crop image and instantly detect diseases with AI-powered recommendations.",
    color: "#E8F5E9",
  },
  {
    id: 2,
    icon: <FaMicrophone />,
    title: "Agri Voice Bot",
    desc: "Talk naturally in your local language and receive voice-based farming guidance.",
    color: "#E3F2FD",
  },
  {
    id: 3,
    icon: <FaCloudSunRain />,
    title: "Weather & Mandi",
    desc: "Get live weather forecasts and nearby mandi prices for your crops.",
    color: "#FFF8E1",
  },
  {
    id: 4,
    icon: <FaStore />,
    title: "Kisan Bazaar",
    desc: "Sell crops, rent farm equipment and connect with local buyers easily.",
    color: "#FFF3E0",
  },
];

const FeatureSection = () => {
  return (
    <section className="features" id="features">

      <div className="section-title">

        <span>🌿 Our Services</span>

        <h2>
          Everything You Need <br />
          In One Platform
        </h2>

        <p>
          AI-powered tools designed specifically for farmers to increase
          productivity and improve decision-making.
        </p>

      </div>

      <div className="feature-grid">

        {featureData.map((item) => (

          <div
            className="feature-card"
            key={item.id}
            style={{ background: item.color }}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Explore
              <FaArrowRight />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeatureSection;