"use client"
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./VirtualCard.scss";

const VirtualCard = () => {
  return (
    <div className="virtual-card">
      <div className="card-header">
        <img
          src="https://via.placeholder.com/80"
          alt="User Icon"
          className="profile-icon"
        />
        <h2>John Doe</h2>
        <p>Web Developer</p>
      </div>
      <div className="card-body">
        <p>
          Olá! Sou um desenvolvedor web apaixonado por criar experiências
          digitais incríveis. Vamos conectar?
        </p>
      </div>
      <div className="card-footer">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default VirtualCard;
