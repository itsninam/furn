import FilterMenuItems from "./FilterMenuItems";
import { useEffect, useRef } from "react";

function FilterMenu({
  colors,
  filterItems,
  handleRemoveFilters,
  setDisplayFilterMenu,
  isMobileView,
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

  const filterMenu = useRef(null);
  const windowSize = window.matchMedia("(max-width: 945px)");

  useEffect(() => {
    document.body.style.overflow = windowSize.matches ? "hidden" : null;
  }, [windowSize.matches]);

  window.addEventListener("resize", () => {
    document.body.style.overflow =
      filterMenu.current?.className === "mobile-view" ? "hidden" : null;
  });

  return (
    <div className={isMobileView ? "mobile-view" : null} ref={filterMenu}>
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
