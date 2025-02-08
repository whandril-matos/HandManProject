"use client"
import React from "react";
import "./CardList.scss";

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardListProps {
  items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
  
    <div className="card-list">
      
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
