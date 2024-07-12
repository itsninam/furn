import FilterMenuItems from "./FilterMenuItems";
import { useEffect } from "react";

function FilterMenu({
  colors,
  filterItems,
  handleRemoveFilters,
  setDisplayFilterMenu,
  displayFilterMenu,
  isMobileView,
  windowSize,
}) {
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

  useEffect(() => {
    if (displayFilterMenu) {
      document.body.style.overflow = windowSize.matches ? "hidden" : null;
    }
  }, [displayFilterMenu, windowSize.matches]);

  return (
    <div className={isMobileView ? "mobile-view" : null}>
      {!isMobileView && <p className="filter-tag">Filter by: </p>}
      <ul>
        {filterMenuItems.map((item, index) => {
          return (
            <li key={index} className="filter-list">
              <FilterMenuItems item={item} filterItems={filterItems} />
            </li>
          );
        })}
      </ul>
      {isMobileView ? (
        <div className="filter-btn-container">
          <button
            onClick={() => handleRemoveFilters()}
            className="reset-filters-btn"
          >
            Reset filters
          </button>
          <button onClick={() => setDisplayFilterMenu(false)}>Close</button>
        </div>
      ) : (
        <button
          onClick={() => handleRemoveFilters()}
          className="reset-filters-btn"
        >
          Reset filters
        </button>
      )}
    </div>
  );
}

export default FilterMenu;
