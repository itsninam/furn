import { useProducts } from "../../contexts/ProductsContext";
import Button from "../Button";
import FilterMenuItems from "./FilterMenuItems";

function FilterMenu({
  colors,
  filterItems,
  handleRemoveFilters,
  setDisplayFilterMenu,
  displayFilterMenu,
}) {
  const { isMobileView } = useProducts();

  const filterMenuItems = [
    {
      category: "colors",
      categoryItems: colors,
    },
    {
      category: "saleItem",
      categoryItems: [
        "High to low",
        "Low to high",
        "Limited items",
        "Under 1,500",
      ],
    },
  ];

  const closeFilterMenu = () => {
    setDisplayFilterMenu(!displayFilterMenu);
    document.body.style.overflow = "scroll";
  };

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
          <Button
            btnType="secondary"
            buttonLabel="Clear"
            onClick={() => handleRemoveFilters()}
          />

          <Button
            btnType="primary"
            buttonLabel="Done"
            onClick={() => closeFilterMenu()}
          />
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
