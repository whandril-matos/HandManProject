"use client"
import React, { useState } from "react";
import "./AccordionList.scss";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionListProps {
  items: AccordionItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-list">
      {items.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <button className="accordion-title" onClick={() => toggleItem(index)}>
            {item.title}
            <span className={activeIndex === index ? "arrow up" : "arrow down"}>▼</span>
          </button>
          <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
