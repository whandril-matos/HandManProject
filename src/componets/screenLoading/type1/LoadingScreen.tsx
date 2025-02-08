"user client"
import React from "react";
import "./LoadingScreen.scss";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingScreen;
