import React, { useState } from "react";
import FilterMenu from "./FilterMenu";

function Filter({
  colors,
  filterItems,
  handleRemoveFilters,
  isMobileView,
  windowSize,
}) {
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);

  return (
    <>
      {isMobileView ? (
        <>
          <button onClick={() => setDisplayFilterMenu(true)}>Filter</button>
          {displayFilterMenu && (
            <FilterMenu
              isMobileView={isMobileView}
              filterItems={filterItems}
              colors={colors}
              setDisplayFilterMenu={setDisplayFilterMenu}
              displayFilterMenu={displayFilterMenu}
              handleRemoveFilters={handleRemoveFilters}
              windowSize={windowSize}
            />
          )}
        </>
      ) : (
        <>
          <FilterMenu
            isMobileView={isMobileView}
            filterItems={filterItems}
            colors={colors}
            setDisplayFilterMenu={setDisplayFilterMenu}
            displayFilterMenu={displayFilterMenu}
            handleRemoveFilters={handleRemoveFilters}
            windowSize={windowSize}
          />
        </>
      )}
    </>
  );
}

export default Filter;
