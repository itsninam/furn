import React from "react";
import FilterMenuItems from "./FilterMenuItems";

function FilterMenu({ colors, filterItems, handleRemoveFilters }) {
  const filterMenuItems = [
    {
      category: "colors",
      categoryItems: colors,
    },
    {
      category: "saleItem",
      categoryItems: ["true"],
    },
  ];

  return (
    <>
      <p className="filter-tag">Filter by: </p>

      <ul>
        {filterMenuItems.map((item, index) => {
          return (
            <li key={index} className="filter-list">
              <FilterMenuItems item={item} filterItems={filterItems} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleRemoveFilters()} className="clear-btn">
        Reset filters
      </button>
    </>
  );
}

export default FilterMenu;
