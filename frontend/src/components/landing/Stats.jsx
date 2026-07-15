import {
  FaUsers,
  FaMapMarkerAlt,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    number: "50K+",
    title: "Happy Farmers",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    number: "1500+",
    title: "Villages Connected",
  },
  {
    id: 3,
    icon: <FaLeaf />,
    number: "100+",
    title: "Supported Crops",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    number: "100%",
    title: "Secure & Trusted",
  },
];

const Stats = () => {
  return (
    <section className="stats">

      <div className="stats-title">

        <span>📊 Our Impact</span>

        <h2>
          Empowering Farmers <br />
          Across India
        </h2>

      </div>

      <div className="stats-container">

        {stats.map((item) => (

          <div className="stat-card" key={item.id}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Stats;