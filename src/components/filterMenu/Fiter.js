import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import Button from "../Button";
import { useProducts } from "../../contexts/ProductsContext";

function Filter({ colors, filterItems, handleRemoveFilters }) {
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const { isMobileView } = useProducts();

  const openFilterMenu = () => {
    setDisplayFilterMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {isMobileView ? (
        <>
          <Button
            btnType="secondary"
            buttonLabel="Filter"
            onClick={() => openFilterMenu()}
          />
          {displayFilterMenu && (
            <FilterMenu
              filterItems={filterItems}
              colors={colors}
              setDisplayFilterMenu={setDisplayFilterMenu}
              displayFilterMenu={displayFilterMenu}
              handleRemoveFilters={handleRemoveFilters}
            />
          )}
        </>
      ) : (
        <>
          <FilterMenu
            filterItems={filterItems}
            colors={colors}
            setDisplayFilterMenu={setDisplayFilterMenu}
            displayFilterMenu={displayFilterMenu}
            handleRemoveFilters={handleRemoveFilters}
          />
        </>
      )}
    </>
  );
}

export default Filter;
