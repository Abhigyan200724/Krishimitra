import { FaLanguage, FaGlobeAsia } from "react-icons/fa";

const languages = [
  "हिन्दी",
  "English",
  "मराठी",
  "தமிழ்",
  "తెలుగు",
  "বাংলা",
  "ગુજરાતી",
  "ಕನ್ನಡ",
];

const Languages = () => {
  return (
    <section className="languages" id="languages">

      <div className="language-heading">

        <FaGlobeAsia className="globe-icon" />

        <span>Available in Multiple Languages</span>

        <h2>Choose Your Preferred Language</h2>

        <p>
          KrishiMitra AI supports multiple Indian languages so every farmer
          can interact comfortably using voice and text.
        </p>

      </div>

      <div className="language-grid">

        {languages.map((language, index) => (
          <button className="language-card" key={index}>
            <FaLanguage />
            {language}
          </button>
        ))}

      </div>

    </section>
  );
};

export default Languages;