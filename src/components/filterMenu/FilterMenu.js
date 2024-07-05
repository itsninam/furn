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
      categoryItems: ["Limited items", "Under 1,500"],
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
      <button
        onClick={() => handleRemoveFilters()}
        className="reset-filters-btn"
      >
        Reset filters
      </button>
    </>
  );
}

export default FilterMenu;
