import React from "react";
import "./FullPageCard.scss";

const FullPageCard = () => {
  return (
    <div className="full-page-card">
      <div className="card-content">
        <div className="card-header">
          <img
            src="icon_eagle.png"
            alt="User Icon"
            className="profile-icon"
          />
          <h1>Speed Repair</h1>
          <p>Reparos residenciais</p>
        </div>
        <div className="card-body">
          <p>
          🔧 Um pequeno reparo pode transformar o ambiente da sua casa? Não deixe para amanhã o que pode ser resolvido hoje. Se a sua casa pede atenção, a Speed Repair está pronta para resolver! 🏠✨
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FullPageCard;
