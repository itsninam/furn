import { useState } from "react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function FilterMenuItems({ item, filterItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p
        onClick={() => setIsOpen(!isOpen)}
        className={`filter-category ${isOpen ? "open" : ""}`}
      >
        {item.category === "colors" ? "Colors" : "Price"}
        {isOpen ? <IoIosArrowDown /> : <FaPlus />}
      </p>
      {item.categoryItems.map((category, index) => {
        return (
          <p
            key={index}
            className={`filter-item ${isOpen ? "" : "hide"}`}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </p>
        );
      })}
      <p>{item.color}</p>
    </>
  );
}

export default FilterMenuItems;
