"use client"
import React from "react";
import "./List.scss";

interface ListItem {
  id: number;
  title: string;
  description: string;
}

interface ListProps {
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id} className="list-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
