"user client"
import React from "react";
import "./FeatureSection.scss";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  buttonText: string;
  buttonText2: string;
  imageUrl: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  buttonText,
  buttonText2,
  imageUrl,
}) => {
  return (
    <section className="feature-section">
      <div className="text-content">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}><GiConfirmed className="iconL"/> {item}</li>
          ))}
        </ul>
        <p>{description}</p>
        <div className="bottomBox">
        <button>{buttonText} <FaWhatsapp className="icon"/></button>
        <button className="bt2">{buttonText2} <FaPhone className="icon"/></button>
        </div>
        </div>
      <div className="image-container">
        <img src={imageUrl} alt="Feature Image" />
      </div>
    </section>
  );
};

export default FeatureSection;
